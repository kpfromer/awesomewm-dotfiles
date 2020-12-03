import { Image, Margin, Tooltip } from 'awesome/components/base';
import Awesome from 'awesome/jsx';
import * as awful from 'awful';
import * as beautiful from 'beautiful';
import * as filesystem from 'gears.filesystem';
import * as wibox from 'wibox';
import { Clickable } from '../../widgets/clickable-container';

const dpi = beautiful.xresources.apply_dpi;
const widgetIconDir = `${filesystem.get_configuration_dir()}images/widgets/wifi/`;

// acpi sample outputs
// Battery 0: Discharging, 75%, 01:51:38 remaining
// Battery 0: Charging, 53%, 00:57:43 until charged

interface Props {
  wifiInterface?: string;
}

export const Wifi: JSX.FunctionComponent<Props> = ({ wifiInterface = 'wlp40s0' }) => {
  let connected = false;
  let essid = 'N/A';

  const imageWidget = wibox.widget<wibox.ImageWidget>(<Image id="icon" resize />);

  imageWidget.set_image(`${widgetIconDir}wifi-strength-off.svg`);

  const widgetButton = wibox.widget(
    // TODO: REFACTOR BUTTON USAGE FOR ONCLICK
    <Clickable
      buttons={[
        awful.button(
          [],
          1,
          // eslint-disable-next-line @typescript-eslint/no-empty-function
          () => {},
          () => {
            awful.spawn('nm-connection-editor', false);
          },
        ),
      ]}
    >
      <Margin margins={dpi(7)}>{imageWidget}</Margin>
    </Clickable>,
  );

  const tooltip = (
    <Tooltip
      objects={[widgetButton]}
      mode="outside"
      align="right"
      timer_function={() => {
        if (connected) {
          return `Connected to "${essid}"`;
        }
        return 'Wireless network is disconnected';
      }}
      preferred_positions={['right', 'left', 'top', 'bottom']}
      margin_leftright={dpi(8)}
      margin_topbottom={dpi(8)}
    />
  );

  function grabText(this: void): void {
    if (connected) {
      awful.spawn.easy_async(`iw dev ${wifiInterface} link`, (stdout) => {
        // lua has different match return values
        // essid = (stdout.match('SSID:(.-)\n') as unknown) as string;

        const token = 'SSID: ';
        const start = stdout.indexOf(token);
        const end = stdout.indexOf('\n', start);
        essid = stdout.substring(start + token.length, end);

        if (essid === undefined) {
          essid === 'N/A';
        }
      });
    }
  }

  awful.widget.watch(
    'awk \'NR==3 {printf "%3.0f" ,($3/70)*100}\' /proc/net/wireless',
    5,
    (_, stdout) => {
      let widgetIconName = 'wifi-strength';
      const wifiStrength = parseInt(stdout, 10);

      if (wifiStrength !== undefined) {
        connected = true;

        const wifiStrengthRounded = math.floor(wifiStrength / 25 + 0.5);
        widgetIconName = `${widgetIconName}-${wifiStrengthRounded}`;
        imageWidget.set_image(`${widgetIconDir}${widgetIconName}.svg`);
      } else {
        connected = false;
        imageWidget.set_image(`${widgetIconDir}${widgetIconName}-off.svg`);
      }

      if (connected && (essid == 'N/A' || essid === undefined)) {
        grabText();
      }

      collectgarbage('collect');
    },
    imageWidget,
  );

  imageWidget.connect_signal('mouse::enter', () => {
    grabText();
  });

  return widgetButton;
};
