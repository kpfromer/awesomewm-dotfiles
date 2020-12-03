import { Margin } from 'awesome/components/base';
import Awesome from 'awesome/jsx';
import * as awful from 'awful';
import * as beautiful from 'beautiful';
import { Clickable } from '../../widgets/clickable-container';
import { PanelOutline } from '../panel-outline';
const dpi = beautiful.xresources.apply_dpi;

/**
 * Shows the current layout or more commonly known as tiling mode (like dwindle or maximize)
 */
export const LayoutStatus: JSX.FunctionComponent<{
  screen: awful.ScreenInstance;
}> = ({ screen }) => {
  return (
    <PanelOutline>
      <Clickable
        onLeftClick={() => awful.layout.inc(1)}
        onScrollUp={() => awful.layout.inc(1)}
        onRightClick={() => awful.layout.inc(-1)}
        onScrollDown={() => awful.layout.inc(-1)}
      >
        <Margin margins={dpi(7)}>{awful.widget.layoutbox(screen)}</Margin>
      </Clickable>
    </PanelOutline>
  ) as any;
};
