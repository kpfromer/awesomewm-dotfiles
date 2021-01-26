// ░█▀█░█░█░█▀▀░█▀▀░█▀█░█▄█░█▀▀░█░█░█▄█
// ░█▀█░█▄█░█▀▀░▀▀█░█░█░█░█░█▀▀░█▄█░█░█
// ░▀░▀░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀░▀░▀░▀
// Kyle Pfromer
// Based off of glorius dotfiles
// Banner generated using `toilet -f pagga text`

import * as awful from 'awful';
import * as beautiful from 'beautiful';
import * as gears from 'gears';
import { isString } from 'helper/type-check';

// ░█▀▀░█░█░█▀▀░█░░░█░░
// ░▀▀█░█▀█░█▀▀░█░░░█░░
// ░▀▀▀░▀░▀░▀▀▀░▀▀▀░▀▀▀
// https://awesomewm.org/apidoc/libraries/awful.util.html#shell
awful.util.shell = 'sh';

// ░█▀▀░█▀█░█▀█░█▀▀░▀█▀░█▀▀░█░█░█▀▄░█▀█░▀█▀░▀█▀░█▀█░█▀█
// ░█░░░█░█░█░█░█▀▀░░█░░█░█░█░█░█▀▄░█▀█░░█░░░█░░█░█░█░█
// ░▀▀▀░▀▀▀░▀░▀░▀░░░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀░▀░░▀░░▀▀▀░▀▀▀░▀░▀

import './configuration/client/index';
import globalKeys from './configuration/keys/global';
import './configuration/tags/index';

// ░█░░░█▀█░█░█░█▀█░█░█░▀█▀
// ░█░░░█▀█░░█░░█░█░█░█░░█░
// ░▀▀▀░▀░▀░░▀░░▀▀▀░▀▀▀░░▀░

import './layout/my-panel';

// ░█▄█░█▀█░█▀▄░█░█░█░░░█▀▀░█▀▀
// ░█░█░█░█░█░█░█░█░█░░░█▀▀░▀▀█
// ░▀░▀░▀▀▀░▀▀░░▀▀▀░▀▀▀░▀▀▀░▀▀▀

// // Handles staring up programs like picom
import './module/auto-start';
// // Configuration/layout for system notifications (using naughty)
import './module/notifications';
// // Titlebars for clients (windows)
import './module/titlebar';

// ░▀█▀░█░█░█▀▀░█▄█░█▀▀
// ░░█░░█▀█░█▀▀░█░█░█▀▀
// ░░▀░░▀░▀░▀▀▀░▀░▀░▀▀▀

import theme from './theme/index';

// ░█▀▀░█░█░█▀▀░█░░░█░░
// ░▀▀█░█▀█░█▀▀░█░░░█░░
// ░▀▀▀░▀░▀░▀▀▀░▀▀▀░▀▀▀

// https://awesomewm.org/apidoc/libraries/awful.util.html#shell
awful.util.shell = 'sh';

beautiful.init(theme);

root.keys = globalKeys as any;

// TODO: Fix weird load up bug (lockscreen fixes this?)
// require('module.dynamic-wallpaper')
// require('module.menu')
// TODO: fix
// require('module.lockscreen')

// ░█░█░█▀█░█░░░█░░░█▀█░█▀█░█▀█░█▀▀░█▀▄
// ░█▄█░█▀█░█░░░█░░░█▀▀░█▀█░█▀▀░█▀▀░█▀▄
// ░▀░▀░▀░▀░▀▀▀░▀▀▀░▀░░░▀░▀░▀░░░▀▀▀░▀░▀

screen.connect_signal('request::wallpaper', (screen) => {
  if (beautiful.wallpaper) {
    // If wallpaper is a function, call it with the screen
    if (isString(beautiful.wallpaper)) {
      const { wallpaper } = beautiful;
      // Check if beautiful.wallpaper is color/image
      switch (wallpaper.charAt(0)) {
        case '#':
          // If beautiful.wallpaper is color
          return gears.wallpaper.set(wallpaper);
        default:
          // If beautiful.wallpaper is path/image
          return gears.wallpaper.maximized(wallpaper, screen);
      }
    } else {
      beautiful.wallpaper(screen);
    }
  }
});
