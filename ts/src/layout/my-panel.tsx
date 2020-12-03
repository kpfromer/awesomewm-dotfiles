import { Layout, Margin } from 'awesome/components/base';
import Awesome from 'awesome/jsx';
import * as awful from 'awful';
import * as beautiful from 'beautiful';
import config from '../configuration/config';
import theme from '../theme/index';
import { Bluetooth } from './components/bluetooth';
import { Clock } from './components/clock';
import { LayoutStatus } from './components/layout-status';
import { SystemTrayToggle } from './components/systray-toggle';
import { TagList } from './components/tag-list';
import { TaskList } from './components/task-list';
import { PanelOutline } from './panel-outline';
const dpi = beautiful.xresources.apply_dpi;

const { militaryTime } = config;

// TODO: extract
const Empty: JSX.FunctionComponent = () => <Margin />;

screen.connect_signal('request::desktop_decoration', (screen: awful.ScreenInstance) => {
  const panel = awful.wibar({
    position: 'bottom',
    screen,
    ontop: true,
    type: 'dock',
    height: dpi(48),
    bg: theme.background!,
    fg: beautiful.fg_normal,
  });

  const font = theme.font_bold!;

  const focus = '#ffffffbb';

  panel.setup(
    <Margin left={dpi(5)} right={dpi(5)}>
      <Layout align horizontal expand="none">
        <Layout fixed horizontal>
          <PanelOutline>
            <TagList screen={screen} focus={focus} />
          </PanelOutline>

          <Margin left={dpi(5)}>
            <PanelOutline>
              <TaskList screen={screen} focus={focus} />
            </PanelOutline>
          </Margin>
        </Layout>

        <Empty />

        <Layout fixed horizontal spacing={dpi(5)}>
          <SystemTrayToggle />
          <Bluetooth />
          <Clock font={font} militaryTime={militaryTime} screen={screen} />
          <LayoutStatus screen={screen} />
        </Layout>
      </Layout>
    </Margin>,
  );

  (screen as any).myPanel = panel;
});
