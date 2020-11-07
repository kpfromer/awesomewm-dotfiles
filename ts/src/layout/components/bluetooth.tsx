import * as jsxFactory from '../../helper/jsx-factory';
import * as awful from 'awful';
import * as wibox from 'wibox';
import * as gears from 'gears';
import * as filesystem from 'gears.filesystem';
import * as beautiful from 'beautiful';
import {Image, Layout, Margin, Tooltip} from '../../helper/components/base';
import {ButtonPressHandler, Clickable} from '../../widgets/clickable-container';
import {TextClock} from '../panel-components';
import {PanelOutline} from '../panel-outline';
import config from '../../configuration/config';

const dpi = beautiful.xresources.apply_dpi;
const {bluetoothManager} = config.apps.default;
const widgetIconDir = `${filesystem.get_configuration_dir()}images/widgets/bluetooth/`;

/**
 * Shows bluetooth status.
 */
export const Bluetooth: JSX.FunctionComponent = () => {
  const icon = (
    <Image id="icon" image={`${widgetIconDir}bluetooth-off.svg`} resize />
  );

  const image = (
    <Layout align horizontal>
      {icon}
    </Layout>
  );

  const buttons = gears.table.join(
    awful.button(
      [],
      1,
      () => {},
      () => {
        awful.spawn(bluetoothManager, false);
      }
    )
  );

  const button = (
    <PanelOutline>
      <Clickable buttons={buttons}>
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
    image
  );

  return button;
};
