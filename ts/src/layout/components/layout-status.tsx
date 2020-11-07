import * as jsxFactory from '../../helper/jsx-factory';
import * as awful from 'awful';
import * as gears from 'gears';
import * as beautiful from 'beautiful';
import {Margin} from '../../helper/components/base';
import {Clickable} from '../../widgets/clickable-container';
import {PanelOutline} from '../panel-outline';
const dpi = beautiful.xresources.apply_dpi;

/**
 * Shows the current layout or more commonly known as tiling mode (like dwindle or maximize)
 */
export const LayoutStatus: JSX.FunctionComponent<{screen: awful.Screen}> = ({
  screen,
}) => {
  const buttons = gears.table.join(
    awful.button([], 1, () => {
      awful.layout.inc(1);
    }),
    awful.button([], 3, () => {
      awful.layout.inc(-1);
    }),
    awful.button([], 4, () => {
      awful.layout.inc(1);
    }),
    awful.button([], 5, () => {
      awful.layout.inc(-1);
    })
  );

  return (
    <PanelOutline>
      <Clickable buttons={buttons}>
        <Margin margins={dpi(7)}>{awful.widget.layoutbox(screen)}</Margin>
      </Clickable>
    </PanelOutline>
  ) as any;
};
