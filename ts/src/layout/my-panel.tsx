import Awesome from 'awesome/jsx';
import * as awful from 'awful';
import * as beautiful from 'beautiful';
import {Layout, Margin} from 'awesome/components/base';
import config from '../configuration/config';
import {Clock} from './components/clock';
import {LayoutStatus} from './components/layout-status';
import {Bluetooth} from './components/bluetooth';
import {PanelOutline} from './panel-outline';
import {SystemTrayToggle} from './components/systray-toggle';
import {TaskList} from './components/task-list';
import {TagList} from './components/tag-list';
const dpi = beautiful.xresources.apply_dpi;

const {militaryTime} = config;

// TODO: extract
const Empty: JSX.FunctionComponent = () => <Margin />;

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

  const regular = '#00000033';
  const focus = '#ffffff66';
  const selectedColor = '#1B9AAA';

  panel.setup(
    <Margin left={dpi(5)} right={dpi(5)}>
      <Layout align horizontal expand="none">
        <Layout fixed horizontal>
          <PanelOutline>
            <TagList
              screen={screen}
              regular={regular}
              focus={focus}
              selectedColor={selectedColor}
            />
          </PanelOutline>

          <Margin left={dpi(5)}>
            <PanelOutline>
              <TaskList
                screen={screen}
                regular={regular}
                focus={focus}
                selectedColor={selectedColor}
              />
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
    </Margin>
  );

  (screen as any).myPanel = panel;
});
