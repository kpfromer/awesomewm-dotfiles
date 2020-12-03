import Awesome from 'awesome/jsx';
import * as awful from 'awful';
import {TagList as TagListPlain} from 'awesome/components/panel';
import {Background, Margin, Image, Text} from 'awesome/components/base';
import {Clickable} from '../../widgets/clickable-container';
import * as wibox from 'wibox';
import * as beautiful from 'beautiful';
import theme from '../../theme/index';

const dpi = beautiful.xresources.apply_dpi;

interface Props {
  screen: awful.ScreenInstance;
  selectedColor?: string;
  focus: string;
  backgroundColor?: string;
}

export const TagList: JSX.FunctionComponent<Props> = ({
  screen,
  selectedColor = theme.accent!,
  focus,
  backgroundColor = theme.transparent!,
}) => {
  return (
    <TagListPlain
      all
      screen={screen}
      onLeftClick={tag => tag.view_only()}
      onScrollDown={tag => awful.tag.viewprev(tag.screen)}
      onScrollUp={tag => awful.tag.viewnext(tag.screen)}
      tag={
        <Clickable
          create_callback={(self, tag: awful.TagInstance, index, objects) => {
            const [background] = self.get_children_by_id<
              wibox.BackgroundWidget
            >('tag-background');

            // Initialize
            if (tag.selected) {
              background.set_bg(selectedColor);
            }

            const [text] = self.get_children_by_id<wibox.TextWidget>(
              'tag-index'
            );
            text.set_markup(index.toString(10));

            self.connect_signal('mouse::enter', () => {
              if (!tag.selected) background.set_bg(focus);
            });
            self.connect_signal('mouse::leave', () => {
              if (!tag.selected) background.set_bg(backgroundColor);
            });

            // https://www.reddit.com/r/awesomewm/comments/dq6cld/problem_with_urgent_signal_in_tag_list/
            // https://www.reddit.com/r/awesomewm/comments/apj6mv/is_it_possible_to_change_the_tag_icons_depending/
            tag.connect_signal(
              'property::selected',
              (tag: awful.TagInstance) => {
                background.set_bg(
                  tag.selected ? selectedColor : backgroundColor
                );
              }
            );
          }}
        >
          <Background id="tag-background" bg={backgroundColor}>
            <Margin margins={dpi(6)}>
              <Text id="tag-index" />
            </Margin>
          </Background>
        </Clickable>
      }
    />
  );
};
