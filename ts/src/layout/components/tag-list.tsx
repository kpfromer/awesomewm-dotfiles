import Awesome from 'awesome/jsx';
import * as awful from 'awful';
import {TagList as TagListPlain} from 'awesome/components/panel';
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

export const TagList: JSX.FunctionComponent<Props> = ({
  screen,
  selectedColor,
  focus,
  regular,
}) => {
  return (
    <TagListPlain
      all
      screen={screen}
      buttons={[
        awful.button<awful.Tag>([], 1, tag => tag.view_only()),
        awful.button<awful.Tag>([], 4, tag => awful.tag.viewprev(tag.screen)),
        awful.button<awful.Tag>([], 5, tag => awful.tag.viewnext(tag.screen)),
      ]}
      tag={
        <Clickable
          create_callback={(self, tag: awful.Tag, index, objects) => {
            const [background] = self.get_children_by_id<
              wibox.BackgroundWidget
            >('tag-background');

            // Initialize
            if (tag.selected) {
              background.set_bg(selectedColor);
            }

            self.connect_signal('mouse::enter', () => {
              if (!tag.selected) background.set_bg(focus);
            });
            self.connect_signal('mouse::leave', () => {
              if (!tag.selected) background.set_bg(regular);
            });

            // https://www.reddit.com/r/awesomewm/comments/dq6cld/problem_with_urgent_signal_in_tag_list/
            // https://www.reddit.com/r/awesomewm/comments/apj6mv/is_it_possible_to_change_the_tag_icons_depending/
            tag.connect_signal('property::selected', (tag: awful.Tag) => {
              background.set_bg(tag.selected ? selectedColor : regular);
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
