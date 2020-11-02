import * as filesystem from 'gears.filesystem';
import * as awful from 'awful';

const config_dir = filesystem.get_configuration_dir();
const bin_dir = `${config_dir}utilities/`;

const apps = {
  default: {
    terminal: (os.getenv('TERMINAL') as string) ?? 'kitty',

    // GUI Text Editor
    textEditor: 'code',

    // Terminal based File Editor
    terminalEditor: os.getenv('EDITOR') ?? 'vim',

    // Web browser
    browser: os.getenv('BROWSER') ?? 'google-chrome-stable',

    // GUI File manager
    fileManager: 'caja',

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

    // Rofi Web Search
    // rofi_global:'rofi -dpi ' .. screen.primary.dpi ..
    //     ' -show "Global Search" -modi "Global Search":' .. config_dir ..
    //     '/configuration/rofi/global/rofi-spotlight.sh' .. ' -theme ' .. config_dir ..
    //     '/configuration/rofi/global/rofi.rasi',

    // // Application Menu
    // rofi_appmenu:'rofi -dpi ' .. screen.primary.dpi .. ' -show drun -theme ' .. config_dir ..
    //     '/configuration/rofi/appmenu/rofi.rasi'
    // rofi:rofi_command,
    // lock:'i3lock-fancy',
    // quake:'termite',
    // screenshot:'~/.config/awesome/configuration/utils/screenshot -m',
    // region_screenshot:'~/.config/awesome/configuration/utils/screenshot -r',
    // delayed_screenshot:'~/.config/awesome/configuration/utils/screenshot //delayed -r',

    // Editing these also edits the default program
    // associated with each tag/workspace
    // browser:os.getenv("BROWSER") or "google-chrome-stable",
    // editor:os.getenv("EDITOR") or "vim",
    // social:'discord',
    // // game:rofi_command,
    // files:os.getenv('FILE_BROWSER') or 'caja'
    // music:rofi_command
  },

  // List of apps to start once on start-up
  startUp: [
    // Force Composition Pipeline for nvidia
    'force-composition-pipeline',
    // Picom (compositor)
    `picom -b --experimental-backends --dbus --config ${config_dir}/configuration/picom.conf`,
    // Load xresources
    'xrdb merge .Xresources',
    // Start audio
    'start-pulseaudio-x11',
    // Start blue light filter
    'redshift -l 40.014984:-105.270546',
    'blueberry-tray', // Bluetooth tray icon

    // 'xfce4-power-manager', // Power manager
    // 'ibus-daemon //xim //daemonize', // Ibus daemon for keyboard
    // 'scream-start', // scream audio sink
    // 'numlockx on', // enable numlock
    // // '/usr/lib/policykit-1-gnome/polkit-gnome-authentication-agent-1 & eval $(gnome-keyring-daemon -s //components=pkcs11,secrets,ssh,gpg)', // credential manager
    // // '/usr/lib/x86_64-linux-gnu/libexec/polkit-kde-authentication-agent-1 & eval $(gnome-keyring-daemon -s //components=pkcs11,secrets,ssh,gpg)', // credential manager
    // '/usr/lib/xfce-polkit/xfce-polkit & eval $(gnome-keyring-daemon -s //components=pkcs11,secrets,ssh,gpg)', // credential manager
    // 'blueman-tray' // bluetooth tray
    // 'lxsession'
  ],

  // List of apps to start once on start-up
  // run_on_start_up:{

  // utils:{

  //   // Full Screenshot
  //   full_screenshot:bin_dir .. 'snap full',

  //   // Area Selected Screenshot
  //   area_screenshot:bin_dir .. 'snap area',

  //   // Update profile picture
  //   update_profile:bin_dir .. 'profile-image'
  // }
};

const config = {
  debug: false,
  modkey: 'Mod4',

  // Used for valid ways to layout awesomewm windows
  layouts: [
    awful.layout.suit.spiral.dwindle,
    awful.layout.suit.tile.left,
    awful.layout.suit.floating,
    awful.layout.suit.max as string,
    // awful.layout.suit.floating, awful.layout.suit.tile,
    // // awful.layout.suit.tile.left, awful.layout.suit.tile.bottom,
    // // awful.layout.suit.tile.top, awful.layout.suit.fair,
    // // awful.layout.suit.fair.horizontal, awful.layout.suit.spiral,
    // // awful.layout.suit.spiral.dwindle, awful.layout.suit.max,
    // awful.layout.suit.max.fullscreen, // awful.layout.suit.magnifier,
    // awful.layout.suit.corner.nw
    // // awful.layout.suit.corner.ne,
    // // awful.layout.suit.corner.sw,
    // // awful.layout.suit.corner.se,
  ],
  module: {
    auto_start: {
      debug_mode: false,
    },
    dynamic_wallpaper: {
      wall_dir: 'theme/wallpapers/',
      valid_picture_formats: ['jpg', 'png', 'jpeg'],
      // Leave this table empty for full auto scheduling
      // wallpaper_schedule:{
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
