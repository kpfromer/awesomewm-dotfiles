import * as jsxFactory from '../helper/jsx-factory';
import * as awful from 'awful';
import * as wibox from 'wibox';
import * as gears from 'gears';
import * as beautiful from 'beautiful';
import {Layout, Margin} from '../helper/components/base';
import {Table} from 'gears';
import config from '../configuration/config';
import {TagList, TaskList, SystemTray} from './panel-components';
import {Clock} from './components/clock';
import {LayoutStatus} from './components/layout-status';
import {Bluetooth} from './components/bluetooth';

const dpi = beautiful.xresources.apply_dpi;

const {militaryTime} = config;

awful.screen.connect_for_each_screen((screen: awful.Screen) => {
  const panel = awful.wibar({
    position: 'top',
    screen,
    ontop: true,
    type: 'dock',
    height: dpi(48),
  });

  const font = 'Inter Bold 11';

  panel.setup(
    <Layout align horizontal>
      <Layout fixed horizontal>
        <TagList all screen={screen} buttons={{}} />
      </Layout>
      <TaskList currenttags screen={screen} buttons={{}} />
      <Layout fixed horizontal spacing={dpi(5)}>
        <SystemTray />
        <Bluetooth />
        <Clock font={font} militaryTime={militaryTime} screen={screen} />
        <LayoutStatus screen={screen} />
      </Layout>
    </Layout>
  );

  // -- Add widgets to the wibox
  // s.mywibox:setup {
  //     layout = wibox.layout.align.horizontal,
  //     { -- Left widgets
  //         layout = wibox.layout.fixed.horizontal,
  //         s.mytaglist,
  //         s.mypromptbox,
  //     },
  //     s.mytasklist, -- Middle widget
  //     { -- Right widgets
  // spotify_widget({
  // 	dim_when_paused = true,
  // 	dim_opacity = 0.5,
  // 	max_length = -1,
  // }),
  //   spacing = 6,
  // layout = wibox.layout.fixed.horizontal,
  // s.systray,
  //   brightnessarc_widgetidget(),
  //   volumearc_widget({display_notification = true}),
  //   batteryarc_widget({ }),
  //         mytextclock,
  //         s.mylayoutbox,
  //     },
  // }

  (screen as any).myPanel = panel;
});
