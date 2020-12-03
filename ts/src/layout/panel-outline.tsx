import { Background, Margin } from 'awesome/components/base';
import Awesome from 'awesome/jsx';
import * as beautiful from 'beautiful';
import * as gears from 'gears';
import * as wibox from 'wibox';
import theme from '../theme/index';

const dpi = beautiful.xresources.apply_dpi;

interface Props {
  backgroundColor?: string;
  outlineColor?: string;
}

export const PanelOutline: JSX.FunctionComponent<Props, wibox.BaseWiboxWidget> = ({
  children,
  backgroundColor = theme.transparent!,
  outlineColor = theme!.groups_title_bg,
}) => {
  return wibox.widget(
    <Margin top={dpi(9)} bottom={dpi(9)}>
      <Background
        bg={backgroundColor}
        shape={(cr, w, h) => {
          gears.shape.rounded_rect(cr, w, h, dpi(12));
        }}
        border_color={outlineColor}
        border_width={dpi(1)}
      >
        {children}
      </Background>
    </Margin>,
  );
};
