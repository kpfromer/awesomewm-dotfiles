import * as awful from 'awful';
import * as gears from 'gears';
import config from '../config';
const {modkey} = config;

const clientbuttons = gears.table.join(
  awful.button([], 1, function (c) {
    c.emit_signal('request::activate', 'mouse_click', {raise: true});
  }),
  awful.button([modkey], 1, function (c) {
    c.emit_signal('request::activate', 'mouse_click', {raise: true});
    awful.mouse.client.move(c);
  }),
  awful.button([modkey], 3, function (c) {
    c.emit_signal('request::activate', 'mouse_click', {raise: true});
    awful.mouse.client.resize(c);
  })
);

const clientkeys = gears.table.join(
  awful.key(
    [modkey],
    'f',
    function (c) {
      c.fullscreen = !c.fullscreen;
      c.raise();
    },
    () => {},
    {description: 'toggle fullscreen', group: 'client'}
  ),
  awful.key(
    [modkey],
    'q',
    function (c) {
      c.kill();
    },
    () => {},
    {description: 'kill window', group: 'client'}
  ),
  awful.key(
    [modkey, 'Control'],
    'space',
    () => {
      awful.client.floating = !awful.client.floating;
    },
    () => {},
    {
      description: 'toggle floating',
      group: 'client',
    }
  ),
  awful.key(
    [modkey, 'Control'],
    'Return',
    function (c) {
      c.swap(awful.client.getmaster());
    },
    () => {},
    {description: 'move to master', group: 'client'}
  ),
  awful.key(
    [modkey],
    'o',
    function (c) {
      c.move_to_screen();
    },
    () => {},
    {description: 'move to screen', group: 'client'}
  ),
  awful.key(
    [modkey],
    't',
    function (c) {
      c.ontop = !c.ontop;
    },
    () => {},
    {description: 'toggle keep on top', group: 'client'}
  ),
  awful.key(
    [modkey],
    'n',
    function (c) {
      c.minimized = true;
    },
    () => {},
    {description: 'minimize', group: 'client'}
  ),
  awful.key(
    [modkey],
    'm',
    function (c) {
      c.maximized = !c.maximized;
      c.raise();
    },
    () => {},
    {description: '(un)maximize', group: 'client'}
  ),
  awful.key(
    [modkey, 'Control'],
    'm',
    function (c) {
      c.maximized_vertical = !c.maximized_vertical;
      c.raise();
    },
    () => {},
    {description: '(un)maximize vertically', group: 'client'}
  ),
  awful.key(
    [modkey, 'Shift'],
    'm',
    function (c) {
      c.maximized_horizontal = !c.maximized_horizontal;
      c.raise();
    },
    () => {},
    {description: '(un)maximize horizontally', group: 'client'}
  ),
  awful.key(
    [modkey],
    'p',
    function (c) {
      if (c.floating) {
        c.ontop = false;
        c.sticky = false;
        c.floating = false;
      } else {
        c.ontop = true;
        c.sticky = true;
        c.floating = true;
      }
    },
    () => {},
    {description: 'pin window', group: 'client'}
  )
);

export default {clientbuttons, clientkeys};
