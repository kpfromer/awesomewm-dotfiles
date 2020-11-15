import Awesome from 'awesome/jsx';
import * as wibox from 'wibox';
import * as gears from 'gears';
import * as filesystem from 'gears.filesystem';
import * as beautiful from 'beautiful';
import {Image, Layout, Margin} from 'awesome/components/base';
import {SystemTray} from 'awesome/components/panel';
import {PanelOutline} from '../panel-outline';
import {Clickable} from '../../widgets/clickable-container';

const dpi = beautiful.xresources.apply_dpi;
const configDir = filesystem.get_configuration_dir();
const widgetIconDir = `${configDir}images/widgets/systray/`;

export const SystemTrayToggle: JSX.FunctionComponent = () => {
  const tray = wibox.widget(
    <SystemTray screen="primary" base_size={dpi(20)} horizontal />
  );
  tray.visible = false;

  const icon = wibox.widget<wibox.ImageWidget>(
    <Image id="icon" image={`${widgetIconDir}right-arrow.svg`} resize />
  );

  return (
    <fragment>
      <Margin top={dpi(10)}>{tray}</Margin>

      <PanelOutline>
        <Clickable
          onButtonPress={button => {
            // Toggles image
            if (button === 1) {
              if (tray.visible) {
                icon.set_image(
                  gears.surface.load_uncached(
                    `${widgetIconDir}right-arrow.svg`
                  )!
                );
              } else {
                icon.set_image(
                  gears.surface.load_uncached(`${widgetIconDir}left-arrow.svg`)!
                );
              }
              tray.visible = !tray.visible;
            }
          }}
        >
          <Margin margins={dpi(7)}>
            <Layout align horizontal>
              {icon}
            </Layout>
          </Margin>
        </Clickable>
      </PanelOutline>
    </fragment>
  );
};
