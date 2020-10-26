// import {Client} from 'awful';

// let gears = require('gears');
// let awful = require('awful');
// let hotkeys_popup = require('awful.hotkeys_popup');
// let config = require('configuration.config');
// let modkey = require('configuration.keys.mod').modkey;

// function move_mouse_onto_focused_client(): void {
//   if (client.focus) {
//     const client_to_focus = client.focus;
//     const geometry = client_to_focus.geometry();
//     const x = geometry.x + geometry.width / 2;
//     const y = geometry.y + geometry.height / 2;
//     mouse.coords({x, y}, true);
//   }
// }
// function move_focus_or_view_tag(
//   original_focus: Client,
//   direction: 'left' | 'right'
// ): void {
//   if (original_focus === client.focus || !client.focus) {
//     if (direction === 'left') {
//       awful.tag.viewprev();
//     } else {
//       awful.tag.viewnext();
//     }
//   } else {
//     move_mouse_onto_focused_client();
//   }
// }
// let globalkeys = gears.table.join(
//   awful.key([modkey], 's', hotkeys_popup.show_help, {
//     description: 'show help',
//     group: 'awesome',
//   }),
//   awful.key(
//     [modkey],
//     'Up',
//     function () {
//       awful.client.focus.bydirection('up');
//       move_mouse_onto_focused_client();
//     },
//     {description: 'swap focus to top window', group: 'client'}
//   ),
//   awful.key(
//     [modkey],
//     'Down',
//     function () {
//       awful.client.focus.bydirection('down');
//       move_mouse_onto_focused_client();
//     },
//     {description: 'swap focus to bottom window', group: 'client'}
//   ),
//   awful.key(
//     [modkey],
//     'Left',
//     function () {
//       let original_focus = client.focus;
//       awful.client.focus.bydirection('left');
//       move_focus_or_view_tag(original_focus, 'left');
//     },
//     {description: 'swap focus to left window', group: 'client'}
//   ),
//   awful.key(
//     [modkey],
//     'Right',
//     function () {
//       let original_focus = client.focus;
//       awful.client.focus.bydirection('right');
//       move_focus_or_view_tag(original_focus, 'right');
//     },
//     {description: 'swap focus to right window', group: 'client'}
//   ),
//   awful.key([modkey], 'Escape', awful.tag.history.restore, {
//     description: 'go back',
//     group: 'tag',
//   }),
//   awful.key(
//     [modkey],
//     'j',
//     function () {
//       awful.client.focus.byidx(1);
//     },
//     {description: 'focus next by index', group: 'client'}
//   ),
//   awful.key(
//     [modkey],
//     'k',
//     function () {
//       awful.client.focus.byidx(-1);
//     },
//     {description: 'focus previous by index', group: 'client'}
//   ),
//   awful.key(
//     [modkey, 'Shift'],
//     'j',
//     function () {
//       awful.client.swap.byidx(1);
//     },
//     {description: 'swap with next client by index', group: 'client'}
//   ),
//   awful.key(
//     [modkey, 'Shift'],
//     'k',
//     function () {
//       awful.client.swap.byidx(-1);
//     },
//     {description: 'swap with previous client by index', group: 'client'}
//   ),
//   awful.key(
//     [modkey, 'Control'],
//     'j',
//     function () {
//       awful.screen.focus_relative(1);
//     },
//     {description: 'focus the next screen', group: 'screen'}
//   ),
//   awful.key(
//     [modkey, 'Control'],
//     'k',
//     function () {
//       awful.screen.focus_relative(-1);
//     },
//     {description: 'focus the previous screen', group: 'screen'}
//   ),
//   awful.key([modkey], 'u', awful.client.urgent.jumpto, {
//     description: 'jump to urgent client',
//     group: 'client',
//   }),
//   awful.key(
//     [modkey],
//     'Tab',
//     function () {
//       awful.client.focus.history.previous();
//       if (client.focus) {
//         client.focus.raise();
//       }
//     },
//     {description: 'go back', group: 'client'}
//   ),
//   awful.key(
//     [modkey],
//     'Return',
//     function () {
//       awful.spawn(config.apps.default.terminal);
//     },
//     {description: 'open a terminal', group: 'launcher'}
//   ),
//   awful.key(
//     [modkey, 'Shift'],
//     's',
//     function () {
//       awful.spawn(config.apps.default.screenshot);
//     },
//     {description: 'capture a screenshot', group: 'launcher'}
//   ),
//   awful.key([modkey, 'Control'], 'r', awesome.restart, {
//     description: 'reload awesome',
//     group: 'awesome',
//   }),
//   awful.key([modkey, 'Shift'], 'q', awesome.quit, {
//     description: 'quit awesome',
//     group: 'awesome',
//   }),
//   awful.key(
//     [modkey],
//     'l',
//     function () {
//       awful.spawn(config.apps.default.lock, false);
//     },
//     {description: 'lock the screen', group: 'Utility'}
//   ),
//   awful.key(
//     [modkey],
//     'space',
//     function () {
//       awful.layout.inc(1);
//     },
//     {description: 'select next', group: 'layout'}
//   ),
//   awful.key(
//     [modkey, 'Shift'],
//     'space',
//     function () {
//       awful.layout.inc(-1);
//     },
//     {description: 'select previous', group: 'layout'}
//   ),
//   awful.key(
//     [modkey, 'Control'],
//     'n',
//     function () {
//       let c = awful.client.restore();
//       if (c) {
//         c.emit_signal('request::activate', 'key.unminimize', {raise: true});
//       }
//     },
//     {description: 'restore minimized', group: 'client'}
//   ),
//   awful.key(
//     [modkey],
//     'r',
//     function () {
//       awful.screen.focused().mypromptbox.run();
//     },
//     {description: 'run prompt', group: 'launcher'}
//   ),
//   awful.key(
//     [modkey],
//     'x',
//     function () {
//       // todo:
//       // awful.prompt.run {
//       //   prompt = 'Run Lua code: ',
//       //   textbox = awful.screen.focused().mypromptbox.widget,
//       //   exe_callback = awful.util.eval,
//       //   history_path = awful.util.get_cache_dir() .. '/history_eval'
//       // }
//     },
//     {
//       description: 'lua execute prompt',
//       group: 'awesome',
//     }
//   ),
//   awful.key(
//     [modkey],
//     'd',
//     function () {
//       awful.spawn(config.apps.default.rofi_appmenu, false);
//     },
//     {description: 'app launcher', group: 'launcher'}
//   ),
//   awful.key(
//     [modkey],
//     'w',
//     function () {
//       awful.spawn(config.apps.default.browser);
//     },
//     {description: 'launch browser', group: 'apps'}
//   ),
//   awful.key(
//     [modkey, 'Shift'],
//     '-',
//     function () {
//       awful.spawn('pulsemixer --change-volume -5');
//     },
//     {description: 'decrease volume', group: 'audio'}
//   ),
//   awful.key(
//     [modkey, 'Shift'],
//     '=',
//     function () {
//       awful.spawn('pulsemixer --change-volume +5');
//     },
//     {description: 'increase volume', group: 'audio'}
//   ),
//   awful.key(
//     [modkey, 'Shift'],
//     ',',
//     function () {
//       awful.spawn('playerctl previous -p spotify');
//     },
//     {description: 'previous song', group: 'audio'}
//   ),
//   awful.key(
//     [modkey, 'Shift'],
//     '.',
//     function () {
//       awful.spawn('playerctl next -p spotify');
//     },
//     {description: 'next song', group: 'audio'}
//   ),
//   awful.key(
//     [modkey, 'Shift'],
//     'p',
//     function () {
//       awful.spawn('playerctl play-pause -p spotify');
//     },
//     {description: 'start/stop song', group: 'audio'}
//   )
// );
// for (let i = 1; i <= 9; i++) {
//   globalkeys = gears.table.join(
//     globalkeys,
//     awful.key(
//       [modkey],
//       '#' + (i + 9),
//       function () {
//         let screen = awful.screen.focused();
//         let tag = screen.tags[i];
//         if (tag) {
//           tag.view_only();
//         }
//       },
//       {description: 'view tag #' + i, group: 'tag'}
//     ),
//     awful.key(
//       [modkey, 'Control'],
//       '#' + (i + 9),
//       function () {
//         let screen = awful.screen.focused();
//         let tag = screen.tags[i];
//         if (tag) {
//           awful.tag.viewtoggle(tag);
//         }
//       },
//       {description: 'toggle tag #' + i, group: 'tag'}
//     ),
//     awful.key(
//       [modkey, 'Shift'],
//       '#' + (i + 9),
//       function () {
//         if (client.focus) {
//           let tag = client.focus.screen.tags[i];
//           if (tag) {
//             client.focus.move_to_tag(tag);
//           }
//         }
//       },
//       {description: 'move focused client to tag #' + i, group: 'tag'}
//     ),
//     awful.key(
//       [modkey, 'Control', 'Shift'],
//       '#' + (i + 9),
//       function () {
//         if (client.focus) {
//           // TODO:
//           let tag = client.focus.screen.tags[i];
//           if (tag) {
//             // TODO:
//             // client.focus.toggle_tag(tag);
//           }
//         }
//       },
//       {description: 'toggle focused client on tag #' + i, group: 'tag'}
//     )
//   );
// }
// export default globalkeys;
