// If a window wants titlebars (based on window rules) then give to them (see config.rules)
// Handle Titlebars (min/max/close bar on every window)
// https://awesomewm.org/doc/api/classes/client.html#request::titlebars

import * as jsxFactory from '../helper/jsx-factory';
import * as awful from 'awful';
import * as gears from 'gears';
import * as beautiful from 'beautiful';
const dpi = beautiful.xresources.apply_dpi;

let timer: gears.Timer | undefined;

const double_click_event_handler = (handle: (this: void) => void): void => {
  if (timer) {
    timer.stop();
    timer = undefined;
    handle();
  }
  timer = gears.timer.start_new(0.2, () => {
    timer = undefined;
    return false;
  });
};

const create_horizontal_bar = (
  client: awful.Client,
  buttons: unknown,
  pos: string,
  bg: string,
  size: number
) => {
  // if (pos === 'top' || pos === 'right') {
  //   pos = 'top';
  //   bg = '#FF00FF';
  // }

  awful.titlebar(client, {position: pos, bg, size}).setup(
    <align-horizontal>
      <margin margins={dpi(10)}>
        <fixed-horizontal spacing={dpi(7)}>
          {awful.titlebar.widget.ontopbutton(client)}
          {awful.titlebar.widget.floatingbutton(client)}
        </fixed-horizontal>
      </margin>
      <flex-horizontal buttons={buttons} />
      <margin margins={dpi(10)}>
        <fixed-horizontal spacing={dpi(7)}>
          {awful.titlebar.widget.minimizebutton(client)}
          {awful.titlebar.widget.maximizedbutton(client)}
          {awful.titlebar.widget.closebutton(client)}
        </fixed-horizontal>
      </margin>
    </align-horizontal>
  );
};

client.connect_signal('request::titlebars', client => {
  const buttons = gears.table.join(
    awful.button([], 1, () => {
      double_click_event_handler(() => {
        if (client.floating) {
          client.floating = false;
          return;
        }
        client.maximized = !client.maximized;
        client.raise();
      });
      client.emit_signal('request::activate', 'titlebar', {
        action: 'mouse_move',
      });
    }),
    awful.button([], 3, () => {
      client.emit_signal('request::activate', 'titlebar', {
        action: 'mouse_resize',
      });
    })
  );

  if (client.class === 'XTerm' || client.class === 'UXTerm') {
    create_horizontal_bar(
      client,
      buttons,
      'top',
      beautiful.xresources.get_current_theme().background,
      beautiful.titlebar_size
    );
  } else if (client.class === 'Nemo') {
    create_horizontal_bar(
      client,
      buttons,
      'top',
      beautiful.gtk.get_theme_variables().bg_color,
      beautiful.titlebar_size
    );
  } else if (client.type === 'normal') {
    create_horizontal_bar(
      client,
      buttons,
      'top',
      '#000000AA',
      beautiful.titlebar_size
    );
  } else if (client.type === 'dialog' || client.type === 'modal') {
    create_horizontal_bar(
      client,
      buttons,
      'top',
      '#000000AA',
      beautiful.titlebar_size
    );
  } else {
    create_horizontal_bar(
      client,
      buttons,
      'top',
      '#000000AA',
      beautiful.titlebar_size
    );
  }
});
