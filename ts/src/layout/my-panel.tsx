import * as jsxFactory from '../helper/jsx-factory';
import * as awful from 'awful';
import * as wibox from 'wibox';
import * as gears from 'gears';
import * as beautiful from 'beautiful';
import {Background, Image, Layout, Margin} from '../helper/components/base';
import config from '../configuration/config';
import {TagList, TaskList} from './panel-components';
import {Clock} from './components/clock';
import {LayoutStatus} from './components/layout-status';
import {Bluetooth} from './components/bluetooth';
import {PanelOutline} from './panel-outline';
import {SystemTrayToggle} from './components/systray-toggle';
import {Clickable} from '../widgets/clickable-container';
const dpi = beautiful.xresources.apply_dpi;

const {militaryTime} = config;

function debug(this: void, ...values: string[]): void {
  awful.spawn.easy_async_with_shell(
    `echo "\\"${values.join(',')}\\"" > /tmp/awesome-log.txt`,
    () => {}
  );
}

screen.connect_signal('request::desktop_decoration', (screen: awful.Screen) => {
  const panel = awful.wibar({
    position: 'top',
    screen,
    ontop: true,
    type: 'dock',
    height: dpi(48),
    bg: '#00000066',
    // TODO: fix beautiful variables not found (they are undefined!!)
    // bg: beautiful.background,
    fg: beautiful.fg_normal,
  });

  const font = 'Inter Bold 11';

  panel.setup(
    <Margin left={dpi(5)} right={dpi(5)}>
      <Layout align horizontal expand="none">
        <Layout fixed horizontal>
          <PanelOutline>
            <TagList
              all
              screen={screen}
              buttons={[
                awful.button<awful.Tag>([], 1, tag => tag.view_only()),
                awful.button<awful.Tag>([], 4, tag =>
                  awful.tag.viewprev(tag.screen)
                ),
                awful.button<awful.Tag>([], 5, tag =>
                  awful.tag.viewnext(tag.screen)
                ),
              ]}
              tag={
                <Clickable>
                  <Margin margins={dpi(6)}>
                    <Image id="icon_role" />
                  </Margin>
                </Clickable>
              }
            />
          </PanelOutline>
        </Layout>
        <TaskList currenttags screen={screen} buttons={{}} />
        <Layout fixed horizontal spacing={dpi(5)}>
          <SystemTrayToggle />
          <Bluetooth />
          <Clock font={font} militaryTime={militaryTime} screen={screen} />
          <LayoutStatus screen={screen} />
        </Layout>
      </Layout>
    </Margin>
  );

  (screen as any).myPanel = panel;
});
