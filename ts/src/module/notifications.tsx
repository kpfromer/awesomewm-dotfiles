import Awesome from 'awesome/jsx';
import * as gears from 'gears';
import * as wibox from 'wibox';
import * as awful from 'awful';
import * as ruled from 'ruled';
// import * as menubar from 'menubar'
import * as beautiful from 'beautiful';
import * as naughty from 'naughty';
import {
  Background,
  Constraint,
  Layout,
  Margin,
  NaughtyIcon,
  NaughtyMessage,
  NaughtyTitle,
  Text,
} from 'awesome/components/base';
import { Clickable } from '../widgets/clickable-container';

const dpi = beautiful.xresources.apply_dpi;
// const clickable_container = require('widget.clickable-container');

// Defaults
naughty.config.defaults.ontop = true;
naughty.config.defaults.icon_size = dpi(32);
naughty.config.defaults.timeout = 5;
naughty.config.defaults.title = 'System Notification';
naughty.config.defaults.margin = dpi(16);
naughty.config.defaults.border_width = 0;
naughty.config.defaults.position = 'top_left';
naughty.config.defaults.shape = function (this: void, cr: any, w: number, h: number) {
  gears.shape.rounded_rect(cr, w, h, dpi(6));
};

// Apply theme variables
naughty.config.padding = dpi(8);
naughty.config.spacing = dpi(8);
naughty.config.icon_dirs = [
  '/usr/share/icons/Tela',
  '/usr/share/icons/Tela-blue-dark',
  '/usr/share/icons/Papirus/',
  '/usr/share/icons/la-capitaine-icon-theme/',
  '/usr/share/icons/gnome/',
  '/usr/share/icons/hicolor/',
  '/usr/share/pixmaps/',
];
naughty.config.icon_formats = ['svg', 'png', 'jpg', 'gif'];

// Presets/rules
ruled.notification.connect_signal('request::rules', () => {
  // Critical notifs
  ruled.notification.append_rule({
    rule: { urgency: 'critical' },
    properties: {
      font: 'Inter Bold 10',
      bg: '#ff0000',
      fg: '#ffffff',
      margin: dpi(16),
      position: 'top_left',
      implicit_timeout: 0,
    },
  });

  // Normal notifs
  ruled.notification.append_rule({
    rule: { urgency: 'normal' },
    properties: {
      font: 'Inter Bold 10',
      bg: beautiful.transparent,
      fg: beautiful.fg_normal,
      margin: dpi(16),
      position: 'top_left',
      implicit_timeout: 5,
    },
  });

  // Low notifs
  ruled.notification.append_rule({
    rule: { urgency: 'low' },
    properties: {
      font: 'Inter Bold 10',
      bg: beautiful.transparent,
      fg: beautiful.fg_normal,
      margin: dpi(16),
      position: 'top_left',
      implicit_timeout: 5,
    },
  });
});

// Error handling
naughty.connect_signal('request::display_error', (message, startup) => {
  naughty.notification({
    urgency: 'critical',
    title: `Oops, an error happened${startup ? ' during startup!' : '!'}`,
    message: message,
    app_name: 'System Notification',
    icon: beautiful.awesome_icon,
  });
});

// TODO: extract

const Place: JSX.FunctionComponent = ({ children }) => (
  <base widget={wibox.container.place}>{children}</base>
);

// XDG icon lookup
naughty.connect_signal('request::icon', (n, context, hints) => {
  if (context !== 'app_icon') {
    return;
  }
  // TODO:
  // const path =
  //   menubar.utils.lookup_icon(hints.app_icon) ||
  //   menubar.utils.lookup_icon(hints.app_icon.lower());
  // if (path) {
  //   n.icon = path;
  // }
});

// Connect to naughty on display signal
naughty.connect_signal('request::display', (n) => {
  const actions = wibox.widget({
    notification: n,
    style: {
      underline_normal: false,
      underline_selected: true,
    },
    widget: naughty.list.actions,
    base_layout: wibox.widget(<Layout flex horizontal spacing={dpi(0)} />),
    widget_template: (
      <Margin margins={dpi(4)}>
        <Background
          bg={beautiful.groups_bg}
          shape={gears.shape.rounded_rect}
          forced_height={dpi(30)}
        >
          <Clickable>
            <Place>
              <Text id="text_role" font="Inter Regular 10" />
            </Place>
          </Clickable>
        </Background>
      </Margin>
    ),
  });

  naughty.layout.box({
    notification: n,
    type: 'notification',
    // TODO: todo: fix
    screen: (awful.screen.preferred as any)(),
    shape: gears.shape.rectangle,
    widget_template: (
      <Background bg={beautiful.background} shape={gears.shape.rounded_rect}>
        <Constraint strategy="max" height={dpi(250)} width={dpi(250)}>
          <Constraint strategy="min" width={dpi(250)}>
            <Background id="background_role" bg={beautiful.transparent}>
              <Layout fixed vertical spacing={dpi(4)}>
                <Margin margins={dpi(0)}>
                  <Layout fixed vertical fill_space>
                    <Background bg={beautiful.background}>
                      <Margin margins={beautiful.notification_margin}>
                        <Text markup font="Inter Bold 10" align="center" valign="center">
                          {n.app_name ?? 'System Notification'}
                        </Text>
                      </Margin>
                    </Background>
                    <Layout fixed horizontal>
                      <Margin margins={beautiful.notification_margin}>
                        <NaughtyIcon resize_strategy="center" />
                      </Margin>
                      <Margin margins={beautiful.notification_margin}>
                        <Layout align vertical expand="none">
                          <Layout fixed vertical>
                            <NaughtyTitle align="left" />
                            <NaughtyMessage align="left" />
                          </Layout>
                        </Layout>
                      </Margin>
                    </Layout>
                    {actions}
                  </Layout>
                </Margin>
              </Layout>
            </Background>
          </Constraint>
        </Constraint>
      </Background>
    ),
  });

  // TODO:
  // const focused = awful.screen.focused();
  // if (
  //   dont_disturb_state ||
  //   (focused.info_center && focused.info_center.visible)
  // ) {
  //   naughty.destroy_all_notifications(undefined, 1);
  // }
});
