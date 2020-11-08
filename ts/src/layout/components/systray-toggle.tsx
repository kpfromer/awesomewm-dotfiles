import * as jsxFactory from '../../helper/jsx-factory';
import * as wibox from 'wibox';
import * as gears from 'gears';
import * as filesystem from 'gears.filesystem';
import * as beautiful from 'beautiful';
import {Image, Layout, Margin} from '../../helper/components/base';
import {SystemTray} from '../panel-components';
import {PanelOutline} from '../panel-outline';
import {Clickable} from '../../widgets/clickable-container';

const dpi = beautiful.xresources.apply_dpi;
const configDir = filesystem.get_configuration_dir();
const widgetIconDir = `${configDir}images/widgets/systray/`;

export const SystemTrayToggle: JSX.FunctionComponent = () => {
  const tray = wibox.widget(
    <SystemTray screen="primary" base_size={dpi(20)} horizontal />
  ) as wibox.WiboxWidget;
  tray.visible = false;

  const icon = (
    <Image id="icon" image={`${widgetIconDir}right-arrow.svg`} resize />
  ) as wibox.ImageWidget;

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
