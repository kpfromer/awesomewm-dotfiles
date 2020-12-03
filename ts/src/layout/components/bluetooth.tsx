/* eslint-disable @typescript-eslint/no-empty-function */
import { Image, Layout, Margin, Tooltip } from 'awesome/components/base';
import Awesome from 'awesome/jsx';
import * as awful from 'awful';
import * as beautiful from 'beautiful';
import * as filesystem from 'gears.filesystem';
import * as wibox from 'wibox';
import config from '../../configuration/config';
import { Clickable } from '../../widgets/clickable-container';
import { PanelOutline } from '../panel-outline';

const dpi = beautiful.xresources.apply_dpi;
const { bluetoothManager } = config.apps.default;
const widgetIconDir = `${filesystem.get_configuration_dir()}images/widgets/bluetooth/`;

/**
 * Shows bluetooth status.
 */
export const Bluetooth: JSX.FunctionComponent = () => {
  const icon = wibox.widget<wibox.ImageWidget>(
    <Image id="icon" image={`${widgetIconDir}bluetooth-off.svg`} resize />,
  );

  const image = (
    <Layout align horizontal>
      {icon}
    </Layout>
  );

  const button = (
    <PanelOutline>
      <Clickable onLeftClick={() => awful.spawn(bluetoothManager, false)}>
        <Margin margins={dpi(7)}>{image}</Margin>
      </Clickable>
    </PanelOutline>
  );

  // TODO:
  const tooltip = (
    <Tooltip
      objects={[button]}
      mode="outside"
      align="right"
      margin_leftright={dpi(8)}
      margin_topbottom={dpi(8)}
      preferred_positions={['right', 'left', 'top', 'bottom']}
    />
  );

  awful.widget.watch(
    'rfkill list bluetooth',
    5,
    (_, stdout) => {
      let widgetIconName = '';

      if (stdout.indexOf('Soft blocked: yes') > 0) {
        widgetIconName = 'bluetooth-off';
        tooltip.markup = 'Bluetooth is off';
      } else {
        widgetIconName = 'bluetooth';
        tooltip.markup = 'Bluetooth is on';
      }
      icon.set_image(`${widgetIconDir}${widgetIconName}.svg`);
      collectgarbage('collect');
    },
    image,
  );

  return button;
};
