import { Background, Margin, Text } from 'awesome/components/base';
import { TagList as TagListPlain } from 'awesome/components/panel';
import Awesome from 'awesome/jsx';
import * as awful from 'awful';
import * as beautiful from 'beautiful';
import * as wibox from 'wibox';
import theme from '../../theme/index';
import { Clickable } from '../../widgets/clickable-container';

const dpi = beautiful.xresources.apply_dpi;

interface Props {
  screen: awful.ScreenInstance;
  selectedColor?: string;
  hasChildrenColor?: string;
  focus: string;
  backgroundColor?: string;
}

export const TagList: JSX.FunctionComponent<Props> = ({
  screen,
  selectedColor = theme.accent!,
  hasChildrenColor = '#dddddd33',
  focus,
  backgroundColor = theme.transparent!,
}) => {
  return (
    <TagListPlain
      all
      screen={screen}
      onLeftClick={(tag) => tag.view_only()}
      onScrollDown={(tag) => awful.tag.viewprev(tag.screen)}
      onScrollUp={(tag) => awful.tag.viewnext(tag.screen)}
      tag={
        <Clickable
          create_callback={(self, tag: awful.TagInstance, index, objects) => {
            const [background] = self.get_children_by_id<wibox.BackgroundWidget>('tag-background');

            // Initialize
            if (tag.selected) {
              background.set_bg(selectedColor);
            } else if (tag.clients().length > 0) {
              background.set_bg(hasChildrenColor);
            }

            const [text] = self.get_children_by_id<wibox.TextWidget>('tag-index');
            text.set_markup(index.toString(10));

            // Add background color on hover
            self.connect_signal('mouse::enter', () => {
              if (!tag.selected) background.set_bg(focus);
            });
            self.connect_signal('mouse::leave', () => {
              if (!tag.selected)
                background.set_bg(
                  tag.selected
                    ? selectedColor
                    : tag.clients().length > 0
                    ? hasChildrenColor
                    : backgroundColor,
                );
            });

            // Add background color if client added/removed from tag
            tag.connect_signal('tagged', () => {
              if (!tag.selected && tag.clients().length > 0) background.set_bg(hasChildrenColor);
            });
            tag.connect_signal('ungtagged', () => {
              if (!tag.selected && tag.clients().length === 0) background.set_bg(backgroundColor);
            });

            // https://www.reddit.com/r/awesomewm/comments/dq6cld/problem_with_urgent_signal_in_tag_list/
            // https://www.reddit.com/r/awesomewm/comments/apj6mv/is_it_possible_to_change_the_tag_icons_depending/
            tag.connect_signal('property::selected', (tag: awful.TagInstance) => {
              background.set_bg(
                tag.selected
                  ? selectedColor
                  : tag.clients().length > 0
                  ? hasChildrenColor
                  : backgroundColor,
              );
            });
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
