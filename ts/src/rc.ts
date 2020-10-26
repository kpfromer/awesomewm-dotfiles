// ░█▀█░█░█░█▀▀░█▀▀░█▀█░█▄█░█▀▀░█░█░█▄█
// ░█▀█░█▄█░█▀▀░▀▀█░█░█░█░█░█▀▀░█▄█░█░█
// ░▀░▀░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀░▀░▀░▀
// Kyle Pfromer
// Based off of glorius dotfiles
// Banner generated using `toilet -f pagga text`
// Standard awesome library

import * as gears from 'gears';
import * as awful from 'awful';
import * as beautiful from 'beautiful';
// TODO: require('awful.autofocus')

// ░█▀▀░█░█░█▀▀░█░░░█░░
// ░▀▀█░█▀█░█▀▀░█░░░█░░
// ░▀▀▀░▀░▀░▀▀▀░▀▀▀░▀▀▀

// https://awesomewm.org/apidoc/libraries/awful.util.html#shell
awful.util.shell = 'sh';

// ░▀█▀░█░█░█▀▀░█▄█░█▀▀
// ░░█░░█▀█░█▀▀░█░█░█▀▀
// ░░▀░░▀░▀░▀▀▀░▀░▀░▀▀▀

beautiful.init(require('theme'));

// ░█░░░█▀█░█░█░█▀█░█░█░▀█▀
// ░█░░░█▀█░░█░░█░█░█░█░░█░
// ░▀▀▀░▀░▀░░▀░░▀▀▀░▀▀▀░░▀░

// require('layout')

// ░█▀▀░█▀█░█▀█░█▀▀░▀█▀░█▀▀░█░█░█▀▄░█▀█░▀█▀░▀█▀░█▀█░█▀█
// ░█░░░█░█░█░█░█▀▀░░█░░█░█░█░█░█▀▄░█▀█░░█░░░█░░█░█░█░█
// ░▀▀▀░▀▀▀░▀░▀░▀░░░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀░▀░░▀░░▀▀▀░▀▀▀░▀░▀

import './configuration/client/index';
// import './configuration/root'
import './configuration/tags/index';

// import * as globalKeys from './configuration/keys/global';
// root.keys(globalKeys);

// require('configuration.client')
// require('configuration.root')
// require('configuration.tags')
// _G.root.keys(require('configuration.keys.global'))

// ░█▄█░█▀█░█▀▄░█░█░█░░░█▀▀░█▀▀
// ░█░█░█░█░█░█░█░█░█░░░█▀▀░▀▀█
// ░▀░▀░▀▀▀░▀▀░░▀▀▀░▀▀▀░▀▀▀░▀▀▀

// // Configuration/layout for system notifications (using naughty)
// require('module.notifications')
// // Handles staring up programs like picom
// require('module.auto-start')
// // Titlebars for clients (windows)
// require('module.titlebar')
// // TODO: Fix weird load up bug (lockscreen fixes this?)
// require('module.dynamic-wallpaper')

// require('module.menu')

// // TODO: fix
// require('module.lockscreen')

// ░█░█░█▀█░█░░░█░░░█▀█░█▀█░█▀█░█▀▀░█▀▄
// ░█▄█░█▀█░█░░░█░░░█▀▀░█▀█░█▀▀░█▀▀░█▀▄
// ░▀░▀░▀░▀░▀▀▀░▀▀▀░▀░░░▀░▀░▀░░░▀▀▀░▀░▀

// screen.connect_signal(
//     'request::wallpaper', function(s)
//       // If wallpaper is a function, call it with the screen
//       if beautiful.wallpaper then
//         if type(beautiful.wallpaper) == 'string' then

//           // Check if beautiful.wallpaper is color/image
//           if beautiful.wallpaper:sub(1, #'#') == '#' then
//             // If beautiful.wallpaper is color
//             gears.wallpaper.set(beautiful.wallpaper)

//           elseif beautiful.wallpaper:sub(1, #'/') == '/' then
//             // If beautiful.wallpaper is path/image
//             gears.wallpaper.maximized(beautiful.wallpaper, s)
//           end
//         else
//           beautiful.wallpaper(s)
//         end
//       end
//     end
// )
