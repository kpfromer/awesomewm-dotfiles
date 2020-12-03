import Awesome from 'awesome/jsx';
import * as wibox from 'wibox';
import * as gears from 'gears';
import * as beautiful from 'beautiful';
import {Background, Margin} from 'awesome/components/base';
import theme from '../theme/index';

const dpi = beautiful.xresources.apply_dpi;

export const PanelOutline: JSX.FunctionComponent<
  {
    backgroundColor?: string;
  },
  wibox.BaseWiboxWidget
> = ({children, backgroundColor = theme.transparent!}) => {
  return wibox.widget(
    <Margin top={dpi(9)} bottom={dpi(9)}>
      <Background
        bg={backgroundColor}
        shape={(cr, w, h) => {
          gears.shape.rounded_rect(cr, w, h, dpi(12));
        }}
        border_color={beautiful.groups_title_bg}
        border_width={dpi(1)}
      >
        {children}
      </Background>
    </Margin>
  );
};
