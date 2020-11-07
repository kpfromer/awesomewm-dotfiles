import * as jsxFactory from '../helper/jsx-factory';
import * as wibox from 'wibox';
import * as gears from 'gears';
import * as beautiful from 'beautiful';
import {Background, Margin} from '../helper/components/base';

const dpi = beautiful.xresources.apply_dpi;

export const PanelOutline: JSX.FunctionComponent = ({children}) => {
  return wibox.widget(
    <Margin top={dpi(9)} bottom={dpi(9)}>
      <Background
        bg={beautiful.transparent}
        shape={(cr, w, h) => {
          gears.shape.rounded_rect(cr, w, h, dpi(12));
        }}
        border_color={beautiful.groups_title_bg}
        border_width={dpi(1)}
      >
        {children}
      </Background>
    </Margin>
  ) as any;
};
