/* eslint-disable @typescript-eslint/no-empty-function */
/**
 * @noSelfInFile
 */
// ░█░█░█▀▀░█░█░█▀▀
// ░█▀▄░█▀▀░░█░░▀▀█
// ░▀░▀░▀▀▀░░▀░░▀▀▀

import * as awful from 'awful';
import * as gears from 'gears';
import config from '../config';
const { modkey } = config;

export default gears.table.join(
  awful.key(
    [modkey],
    'f',
    (c) => {
      c.fullscreen = !c.fullscreen;
      c.raise();
    },
    () => {},
    { description: 'toggle fullscreen', group: 'client' },
  ),
  awful.key(
    [modkey],
    'q',
    (c) => {
      c.kill();
    },
    () => {},
    { description: 'kill window', group: 'client' },
  ),
  awful.key(
    [modkey, 'Control'],
    'space',
    (client) => {
      client.floating = !client.floating;
      client.ontop = false;
      client.raise();
    },
    () => {},
    {
      description: 'toggle floating',
      group: 'client',
    },
  ),
  // awful.key(
  //   [modkey, 'Control'],
  //   'Return',
  //   c => {
  //     // is this depercated
  //     c.swap(awful.ClientInstance .getmaster());
  //   },
  //   () => {},
  //   {description: 'move to master', group: 'client'}
  // ),
  awful.key(
    [modkey],
    'o',
    (c) => {
      c.move_to_screen();
    },
    () => {},
    { description: 'move to screen', group: 'client' },
  ),
  awful.key(
    [modkey],
    't',
    (c) => {
      c.ontop = !c.ontop;
    },
    () => {},
    { description: 'toggle keep on top', group: 'client' },
  ),
  awful.key(
    [modkey],
    'n',
    (c) => {
      c.minimized = true;
    },
    () => {},
    { description: 'minimize', group: 'client' },
  ),
  awful.key(
    [modkey],
    'm',
    (c) => {
      c.maximized = !c.maximized;
      c.raise();
    },
    () => {},
    { description: '(un)maximize', group: 'client' },
  ),
  awful.key(
    [modkey, 'Control'],
    'm',
    (c) => {
      c.maximized_vertical = !c.maximized_vertical;
      c.raise();
    },
    () => {},
    { description: '(un)maximize vertically', group: 'client' },
  ),
  awful.key(
    [modkey, 'Shift'],
    'm',
    (c) => {
      c.maximized_horizontal = !c.maximized_horizontal;
      c.raise();
    },
    () => {},
    { description: '(un)maximize horizontally', group: 'client' },
  ),
  awful.key(
    [modkey],
    'p',
    (c) => {
      if (c.floating) {
        c.ontop = false;
        c.sticky = false;
        c.floating = false;
      } else {
        c.ontop = true;
        c.sticky = true;
        c.floating = true;

        const { height } = c.screen.geometry;
        const newHeight = (1 / 3) * height;
        const newWidth = (16 / 9) * newHeight;

        c.geometry({ height: newHeight, width: newWidth });
        awful.placement.bottom_right(c, { margins: { bottom: 60 } });
      }
    },
    () => {},
    { description: 'pin window', group: 'client' },
  ),
);
