// If a window wants titlebars (based on window rules) then give to them (see config.rules)
// Handle Titlebars (min/max/close bar on every window)
// https://awesomewm.org/doc/api/classes/client.html#request::titlebars

import {
  CloseButton,
  FloatingButton,
  // Layout,
  MaximizedButton,
  MinimizeButton,
  OnTopButton,
} from 'awesome/components/base';
import {Layout} from 'awesome/components/wrapped';
import Awesome from 'awesome/jsx';
import * as awful from 'awful';
import * as beautiful from 'beautiful';
import * as gears from 'gears';
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

// local create_vertical_bar = function(c, buttons, pos, bg, size)

// 	-- Check if passed position is valid for this position
// 	if (pos == 'top' or pos == 'bottom') then
// 		pos = 'left'
// 		bg = '#FF00FF'
// 	end

// 	awful.titlebar(c, {position = pos, bg = bg, size = size}) : setup {
// 		{
// 			{
// 				awful.titlebar.widget.closebutton(c),
// 				awful.titlebar.widget.maximizedbutton(c),
// 				awful.titlebar.widget.minimizebutton(c),
// 				spacing = dpi(7),
// 				layout  = wibox.layout.fixed.vertical
// 			},
// 			margins = dpi(10),
// 			widget = wibox.container.margin
// 		},
// 		{
// 			buttons = buttons,
// 			layout = wibox.layout.flex.vertical
// 		},
// 		{
// 			{
// 				awful.titlebar.widget.ontopbutton(c),
// 				awful.titlebar.widget.floatingbutton(c),
// 				spacing = dpi(7),
// 				layout  = wibox.layout.fixed.vertical
// 			},
// 			margins = dpi(10),
// 			widget = wibox.container.margin
// 		},
// 		layout = wibox.layout.align.vertical
// 	}
// end

const create_horizontal_bar = (
  client: awful.ClientInstance,
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
    <Layout align horizontal>
      <Layout margins={dpi(10)} fixed horizontal spacing={dpi(7)}>
        <OnTopButton client={client} />
        <FloatingButton client={client} />
      </Layout>

      <Layout flex horizontal buttons={buttons} />

      <Layout margins={dpi(10)} fixed horizontal spacing={dpi(7)}>
        <MinimizeButton client={client} />
        <MaximizedButton client={client} />
        <CloseButton client={client} />
      </Layout>
    </Layout>
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
