// ░█▀▄░█░█░▀█▀░▀█▀░█▀█░█▀█░█▀▀
// ░█▀▄░█░█░░█░░░█░░█░█░█░█░▀▀█
// ░▀▀░░▀▀▀░░▀░░░▀░░▀▀▀░▀░▀░▀▀▀

import * as awful from 'awful';
import * as gears from 'gears';
import config from '../config';

const { modkey } = config;

export default gears.table.join(
  awful.button([modkey], 1, (client) => {
    client.emit_signal('request::activate', 'mouse_click', { raise: true });
  }),
  awful.button([modkey], 1, (client) => {
    client.emit_signal('request::activate', 'mouse_click', { raise: true });
    awful.mouse.client.move(client);
  }),
  awful.button(
    [config.modkey],
    // Right click
    3,
    (client) => {
      client.emit_signal('request::activate', 'mouse_click', { raise: true });
      awful.mouse.client.resize(client);
    },
  ),
);

// TODO:
// return awful.util.table.join(
// 	awful.button(
// 		{},
// 		1,
// 		function(c)
// 			client.focus = c
// 			c.raise()
// 		end
// 	),
// 	awful.button(
// 		{modkey},
// 		1,
// 		awful.mouse.client.move
// 	),
// 	awful.button(
// 		{modkey},
// 		3,
// 		awful.mouse.client.resize
// 	),
// 	awful.button(
// 		{modkey},
// 		4,
// 		function()
// 			awful.layout.inc(1)
// 		end
// 	),
// 	awful.button(
// 		{modkey},
// 		5,
// 		function()
// 			awful.layout.inc(-1)
// 		end
// 	)
// )
