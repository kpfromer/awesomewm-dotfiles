import * as filesystem from 'gears.filesystem';
import * as awful from 'awful';

export type CommandDefintion = {
  command: string;
  tag: number;
};

export type StartupProgram = string | CommandDefintion;

export interface Apps {
  readonly default: Readonly<{
    terminal: string;
    textEditor: string;
    terminalEditor: string;
    browser: string;
    fileManager: string;
    networkManager: string;
    bluetoothManager: string;
    powerManager: string;
    packageManager: string;
    lock: string;
    screenshot: string;
    quake: string;
    editor: string;
    rofiAppmenu: string;
  }>;
  readonly startUp: ReadonlyArray<StartupProgram>;
}

export interface Config {
  readonly debug: boolean;
  readonly modkey: awful.Modifier;

  // TODO: actually setup
  // Shows laptop related stuff like battery level
  readonly laptop: boolean;
  // Changes clock format from "1:00 pm" to "13:00"
  readonly militaryTime: boolean;

  // Used for valid ways to layout awesomewm windows
  readonly layouts: ReadonlyArray<string>;
  readonly module: Readonly<{
    auto_start: Readonly<{
      debug_mode: boolean;
    }>;

    dynamic_wallpaper: Readonly<{
      wall_dir: string;
      valid_picture_formats: ReadonlyArray<string>;

      stretch: false;
    }>;
  }>;

  readonly apps: Apps;
}

const config_dir = filesystem.get_configuration_dir();
const bin_dir = `${config_dir}utilities/`;

const apps: Apps = {
  default: {
    terminal: (os.getenv('TERMINAL') as string) ?? 'kitty',

    // GUI Text Editor
    textEditor: 'code',

    // Terminal based File Editor
    terminalEditor: os.getenv('EDITOR') ?? 'vim',

    // Web browser
    browser: os.getenv('BROWSER') ?? 'google-chrome-stable',

    // GUI File manager
    fileManager: 'nautilus',

    // Network manager
    networkManager: 'nm-connection-editor',

    // Bluetooth manager
    bluetoothManager: 'blueman-manager',

    // Power manager
    powerManager: 'xfce4-power-manager',

    // GUI Package manager
    packageManager: 'pamac-manager',

    // Lockscreen
    lock: 'awesome-client "awesome.emit_signal(\'module::lockscreen_show\')"',

    // Screenshot
    screenshot: 'spectacle --region',

    // Quake-like Terminal
    quake: 'kitty --name QuakeTerminal',

    editor: 'vim',

    rofiAppmenu: `rofi -dpi ${screen.primary.dpi} -show drun -theme ${config_dir}configuration/rofi/appmenu/rofi.rasi`,
  },

  // List of apps to start once on start-up
  startUp: [
    // Force Composition Pipeline for nvidia
    'force-composition-pipeline',
    // Picom (compositor)
    `picom -b --experimental-backends --dbus --config ${config_dir}configuration/picom.conf`,
    // Load xresources
    'xrdb merge .Xresources',
    // Start audio
    'start-pulseaudio-x11',
    // Start blue light filter
    'redshift',
    // Bluetooth tray icon
    'blueberry-tray',
    // Reload feh background
    // '/home/kpfromer/.fehbg',

    // Graphical Programs
    { command: 'mailspring', tag: 8 },
    { command: 'discord', tag: 9 },
    { command: 'slack', tag: 9 },
  ],
};

const config: Config = {
  debug: true,
  modkey: 'Mod4',

  // TODO: actually setup
  // Shows laptop related stuff like battery level
  laptop: false,
  // Changes clock format from "1:00 pm" to "13:00"
  militaryTime: false,

  // Used for valid ways to layout awesomewm windows
  layouts: [
    awful.layout.suit.spiral.dwindle,
    awful.layout.suit.tile.left,
    awful.layout.suit.floating,
    awful.layout.suit.max as string,
    // awful.layout.suit.floating,
    // awful.layout.suit.tile,
    // awful.layout.suit.tile.left,
    // awful.layout.suit.tile.bottom,
    // awful.layout.suit.tile.top,
    // awful.layout.suit.fair,
    // awful.layout.suit.fair.horizontal,
    // awful.layout.suit.spiral,
    // awful.layout.suit.spiral.dwindle,
    // awful.layout.suit.max,
    // awful.layout.suit.max.fullscreen,
    // awful.layout.suit.magnifier,
    // awful.layout.suit.corner.nw,
    // awful.layout.suit.corner.ne,
    // awful.layout.suit.corner.sw,
    // awful.layout.suit.corner.se,
  ],
  module: {
    auto_start: {
      debug_mode: false,
    },
    dynamic_wallpaper: {
      wall_dir: 'theme/wallpapers/',
      valid_picture_formats: ['jpg', 'png', 'jpeg'],
      // Leave this table empty for full auto scheduling
      // wallpaper_schedule: {
      //   ['00:00:00']:'midnight-wallpaper.png',
      //   ['06:22:00']:'morning-wallpaper.jpg',
      //   ['12:00:00']:'noon-wallpaper.jpg',
      //   ['17:58:00']:'night-wallpaper.jpg'
      //   // Example of just using auto-scheduling with keywords
      //   //[[
      // 	'midnight',
      // 	'morning',
      // 	'noon',
      // 	'afternoon',
      // 	'evening',
      // 	'night'
      // //]]
      // },
      stretch: false,
    },

    // //   lockscreen:{
    // //     military_clock:true,
    // //     fallback_password:'toor',
    // //     capture_intruder:true,
    // //     face_capture_dir:'$(xdg-user-dir PICTURES)/Intruders/',
    // //     blur_background:true,
    // //     wall_dir:'theme/wallpapers/',
    // //     default_wall_name:'morning-wallpaper.jpg',
    // //     tmp_wall_dir:'/tmp/awesomewm/' .. os.getenv('USER') .. '/'
    // //   }
    // // },
    // // widget:{
    // //   email:{
    // //     address:'',
    // //     app_password:'',
    // //     imap_server:'imap.gmail.com',
    // //     port:'993'
    // //   },

    // //   weather:{
    // //     key:'',
    // //     city_id:'',
    // //     units:'metric',
    // //     update_interval:1200
    // //   },

    // //   network:{
    // //     wired_interface:'enp42s0',
    // //     wireless_interface:'wlp40s0'
    // //   },

    // //   clock:{
    // //     military_mode:false
    // //   },

    // //   screen_recorder:{
    // //     resolution:'1366x768',
    // //     offset:'0,0',
    // //     audio:false,
    // //     save_directory:'$(xdg-user-dir VIDEOS)/Recordings/',
    // //     mic_level:'20',
    // //     fps:'30'
    // //   }
  },
  // Default Applications
  apps,
};

export default config;
