import Awesome from 'awesome/jsx';
import * as awful from 'awful';
import {TaskList as TaskListPlain} from '../panel-components';
import {Background, Margin, Image} from 'awesome/components/base';
import {Clickable} from '../../widgets/clickable-container';
import * as wibox from 'wibox';
import * as beautiful from 'beautiful';

const dpi = beautiful.xresources.apply_dpi;

interface Props {
  screen: awful.Screen;
  selectedColor: string;
  focus: string;
  regular: string;
}

export const TaskList: JSX.FunctionComponent<Props> = ({
  screen,
  selectedColor,
  focus,
  regular,
}) => {
  return (
    <TaskListPlain
      currenttags
      screen={screen}
      buttons={{}}
      task={
        <Clickable
          create_callback={(
            self,
            client: awful.ClientInstance,
            index,
            objects
          ) => {
            const [background] = self.get_children_by_id<
              wibox.BackgroundWidget
            >('tag-background');

            // Initialize
            if (client.focus) {
              background.set_bg(selectedColor);
            }

            self.connect_signal('mouse::enter', () => {
              if (!client.focus) background.set_bg(focus);
            });
            self.connect_signal('mouse::leave', () => {
              if (!client.focus) background.set_bg(regular);
            });

            // https://www.reddit.com/r/awesomewm/comments/dq6cld/problem_with_urgent_signal_in_tag_list/
            // https://www.reddit.com/r/awesomewm/comments/apj6mv/is_it_possible_to_change_the_tag_icons_depending/
            client.connect_signal('focus', () => {
              background.set_bg(selectedColor);
            });
            client.connect_signal('unfocus', () => {
              background.set_bg(regular);
            });
          }}
        >
          <Background id="tag-background" bg={regular}>
            <Margin margins={dpi(6)}>
              <Image id="icon_role" />
            </Margin>
          </Background>
        </Clickable>
      }
    />
  );
};
