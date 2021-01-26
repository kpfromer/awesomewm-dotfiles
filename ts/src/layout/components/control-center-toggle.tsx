/* eslint-disable @typescript-eslint/no-empty-function */
import { Image, Layout, Margin } from 'awesome/components/base';
import Awesome from 'awesome/jsx';
import * as awful from 'awful';
import * as beautiful from 'beautiful';
import * as filesystem from 'gears.filesystem';
import * as wibox from 'wibox';
import { Clickable } from '../../widgets/clickable-container';
import { PanelOutline } from '../panel-outline';

const dpi = beautiful.xresources.apply_dpi;
const widgetIconDir = `${filesystem.get_configuration_dir()}images/widgets/control-center-toggle/`;

/**
 * Shows button to toggle control center menu
 */
export const ControlCenterToggle: JSX.FunctionComponent = () => {
  const icon = wibox.widget<wibox.ImageWidget>(
    <Image id="icon" image={`${widgetIconDir}control-center.svg`} resize />,
  );

  const image = (
    <Layout align horizontal>
      {icon}
    </Layout>
  );

  return (
    <PanelOutline>
      <Clickable
        onLeftClick={() => {
          // TODO: better implementation
          ((awful.screen.focused() as any).control_center as {
            toggle: (this: any) => void;
          }).toggle();
        }}
      >
        <Margin margins={dpi(7)}>{image}</Margin>
      </Clickable>
    </PanelOutline>
  );
};
