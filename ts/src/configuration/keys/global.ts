import {Client} from 'awful';

import * as gears from 'gears';
import * as awful from 'awful';
// const hotkeys_popup = require('awful.hotkeys_popup');
import config from '../config';
const modkey = config.modkey;

function move_mouse_onto_focused_client(): void {
  if (client.focus) {
    const client_to_focus = client.focus;
    const geometry = client_to_focus.geometry();
    const x = geometry.x + geometry.width / 2;
    const y = geometry.y + geometry.height / 2;
    mouse.coords({x, y}, true);
  }
}

function move_focus_or_view_tag(
  original_focus: Client,
  direction: 'left' | 'right'
): void {
  if (original_focus === client.focus || !client.focus) {
    if (direction === 'left') {
      awful.tag.viewprev();
    } else {
      awful.tag.viewnext();
    }
  } else {
    move_mouse_onto_focused_client();
  }
}

let globalkeys = gears.table.join(
  // awful.key([modkey], 's', hotkeys_popup.show_help, {
  //   description: 'show help',
  //   group: 'awesome',
  // }),
  awful.key(
    [modkey],
    'Up',
    () => {
      awful.client.focus.bydirection('up');
      move_mouse_onto_focused_client();
    },
    () => {},
    {description: 'swap focus to top window', group: 'client'}
  ),
  awful.key(
    [modkey],
    'Down',
    () => {
      awful.client.focus.bydirection('down');
      move_mouse_onto_focused_client();
    },
    () => {},
    {description: 'swap focus to bottom window', group: 'client'}
  ),
  awful.key(
    [modkey],
    'Left',
    () => {
      const original_focus = client.focus;
      awful.client.focus.bydirection('left');
      move_focus_or_view_tag(original_focus, 'left');
    },
    () => {},
    {description: 'swap focus to left window', group: 'client'}
  ),
  awful.key(
    [modkey],
    'Right',
    () => {
      const original_focus = client.focus;
      awful.client.focus.bydirection('right');
      move_focus_or_view_tag(original_focus, 'right');
    },
    () => {},
    {description: 'swap focus to right window', group: 'client'}
  ),
  // TODO:
  // awful.key([modkey], 'Escape', awful.tag.history.restore, () => {}, {
  //   description: 'go back',
  //   group: 'tag',
  // }),
  awful.key(
    [modkey],
    'j',
    () => {
      awful.client.focus.byidx(1);
    },
    () => {},
    {description: 'focus next by index', group: 'client'}
  ),
  awful.key(
    [modkey],
    'k',
    () => {
      awful.client.focus.byidx(-1);
    },
    () => {},
    {description: 'focus previous by index', group: 'client'}
  ),
  awful.key(
    [modkey, 'Shift'],
    'j',
    () => {
      awful.client.swap.byidx(1);
    },
    () => {},
    {description: 'swap with next client by index', group: 'client'}
  ),
  awful.key(
    [modkey, 'Shift'],
    'k',
    () => {
      awful.client.swap.byidx(-1);
    },
    () => {},
    {description: 'swap with previous client by index', group: 'client'}
  ),
  awful.key(
    [modkey, 'Control'],
    'j',
    () => {
      awful.screen.focus_relative(1);
    },
    () => {},
    {description: 'focus the next screen', group: 'screen'}
  ),
  awful.key(
    [modkey, 'Control'],
    'k',
    () => {
      awful.screen.focus_relative(-1);
    },
    () => {},
    {description: 'focus the previous screen', group: 'screen'}
  ),
  // TODO:
  // awful.key([modkey], 'u', awful.client.urgent.jumpto, () => {}, {
  //   description: 'jump to urgent client',
  //   group: 'client',
  // }),
  // awful.key(
  //   [modkey],
  //   'Tab',
  //   () => {
  //     awful.client.focus.history.previous();
  //     if (client.focus) {
  //       client.focus.raise();
  //     }
  //   },
  //   () => {},
  //   {description: 'go back', group: 'client'}
  // ),
  awful.key(
    [modkey],
    'Return',
    () => {
      awful.spawn(config.apps.default.terminal);
    },
    () => {},
    {description: 'open a terminal', group: 'launcher'}
  ),
  awful.key(
    [modkey, 'Shift'],
    's',
    () => {
      awful.spawn(config.apps.default.screenshot);
    },
    () => {},
    {description: 'capture a screenshot', group: 'launcher'}
  ),
  awful.key([modkey, 'Control'], 'r', awesome.restart, () => {}, {
    description: 'reload awesome',
    group: 'awesome',
  }),
  awful.key([modkey, 'Shift'], 'q', awesome.quit, () => {}, {
    description: 'quit awesome',
    group: 'awesome',
  }),
  awful.key(
    [modkey],
    'l',
    () => {
      awful.spawn(config.apps.default.lock, false);
    },
    () => {},
    {description: 'lock the screen', group: 'Utility'}
  ),
  awful.key(
    [modkey],
    'space',
    () => {
      awful.layout.inc(1);
    },
    () => {},
    {description: 'select next', group: 'layout'}
  ),
  awful.key(
    [modkey, 'Shift'],
    'space',
    () => {
      awful.layout.inc(-1);
    },
    () => {},
    {description: 'select previous', group: 'layout'}
  ),
  awful.key(
    [modkey, 'Control'],
    'n',
    () => {
      const c = awful.client.restore();
      if (c) {
        c.emit_signal('request::activate', 'key.unminimize', {raise: true});
      }
    },
    () => {},
    {description: 'restore minimized', group: 'client'}
  ),
  // TODO:
  // awful.key(
  //   [modkey],
  //   'r',
  //   () => {
  //     awful.screen.focused().mypromptbox.run();
  //   },
  //   () => {},
  //   {description: 'run prompt', group: 'launcher'}
  // ),
  awful.key(
    [modkey],
    'x',
    () => {
      // todo:
      // awful.prompt.run {
      //   prompt = 'Run Lua code: ',
      //   textbox = awful.screen.focused().mypromptbox.widget,
      //   exe_callback = awful.util.eval,
      //   history_path = awful.util.get_cache_dir() .. '/history_eval'
      // }
    },
    () => {},
    {
      description: 'lua execute prompt',
      group: 'awesome',
    }
  ),
  // TODO:
  // awful.key(
  //   [modkey],
  //   'd',
  //   () => {
  //     awful.spawn(config.apps.default.rofi_appmenu, false);
  //   },
  //   () => {},
  //   {description: 'app launcher', group: 'launcher'}
  // ),
  awful.key(
    [modkey],
    'w',
    () => {
      awful.spawn(config.apps.default.browser);
    },
    () => {},
    {description: 'launch browser', group: 'apps'}
  ),
  awful.key(
    [modkey, 'Shift'],
    '-',
    () => {
      awful.spawn('pulsemixer --change-volume -5');
    },
    () => {},
    {description: 'decrease volume', group: 'audio'}
  ),
  awful.key(
    [modkey, 'Shift'],
    '=',
    () => {
      awful.spawn('pulsemixer --change-volume +5');
    },
    () => {},
    {description: 'increase volume', group: 'audio'}
  ),
  awful.key(
    [modkey, 'Shift'],
    ',',
    () => {
      awful.spawn('playerctl previous -p spotify');
    },
    () => {},
    {description: 'previous song', group: 'audio'}
  ),
  awful.key(
    [modkey, 'Shift'],
    '.',
    () => {
      awful.spawn('playerctl next -p spotify');
    },
    () => {},
    {description: 'next song', group: 'audio'}
  ),
  awful.key(
    [modkey, 'Shift'],
    'p',
    () => {
      awful.spawn('playerctl play-pause -p spotify');
    },
    () => {},
    {description: 'start/stop song', group: 'audio'}
  )
);

/** @forRange */
declare function forRange(
  start: number,
  limit: number,
  step?: number
): number[];

// Bind all key numbers to tags.
// Be careful: we use keycodes to make it work on any keyboard layout.
// This should map on the top row of your keyboard, usually 1 to 9.
for (const i of forRange(1, 9)) {
  globalkeys = gears.table.join(
    globalkeys,
    awful.key(
      [modkey],
      `#${i + 9}`,
      () => {
        const screen = awful.screen.focused();
        const tag = screen.tags[i];
        if (tag) {
          tag.view_only();
        }
      },
      () => {},
      {description: 'view tag #' + i, group: 'tag'}
    ),
    awful.key(
      [modkey, 'Control'],
      `#${i + 9}`,
      () => {
        const screen = awful.screen.focused();
        const tag = screen.tags[i];
        if (tag) {
          awful.tag.viewtoggle(tag);
        }
      },
      () => {},
      {description: 'toggle tag #' + i, group: 'tag'}
    ),
    awful.key(
      [modkey, 'Shift'],
      `#${i + 9}`,
      () => {
        if (client.focus) {
          const tag = client.focus.screen.tags[i];
          if (tag) {
            client.focus.move_to_tag(tag);
          }
        }
      },
      () => {},
      {description: 'move focused client to tag #' + i, group: 'tag'}
    ),
    awful.key(
      [modkey, 'Control', 'Shift'],
      `#${i + 9}`,
      () => {
        if (client.focus) {
          // TODO:
          const tag = client.focus.screen.tags[i];
          if (tag) {
            // TODO:
            // client.focus.toggle_tag(tag);
          }
        }
      },
      () => {},
      {description: 'toggle focused client on tag #' + i, group: 'tag'}
    )
  );
}
export default globalkeys;
