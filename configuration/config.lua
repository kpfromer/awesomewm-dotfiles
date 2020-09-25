local filesystem = require('gears.filesystem')
local awful = require('awful')
local icons = require('theme.icons')

-- TODO: get working
-- Thanks to jo148 on github for making rofi dpi aware!
local with_dpi = require('beautiful').xresources.apply_dpi
local get_dpi = require('beautiful').xresources.get_dpi
local rofi_command = 'env /usr/bin/rofi -dpi ' .. get_dpi() .. ' -width ' ..
                         with_dpi(400) .. ' -show drun -theme ' ..
                         filesystem.get_configuration_dir() ..
                         '/configuration/rofi.rasi -run-command "/bin/bash -c -i \'shopt -s expand_aliases; {cmd}\'"'

local apps = {
    default = {
        terminal = os.getenv("TERMINAL") or "kitty",
        rofi = rofi_command,
        -- lock = 'i3lock-fancy',
        -- quake = 'termite',
        -- screenshot = '~/.config/awesome/configuration/utils/screenshot -m',
        -- region_screenshot = '~/.config/awesome/configuration/utils/screenshot -r',
        -- delayed_screenshot = '~/.config/awesome/configuration/utils/screenshot --delayed -r',

        -- Editing these also edits the default program
        -- associated with each tag/workspace
        browser = os.getenv("BROWSER") or "google-chrome-stable",
        editor = os.getenv("EDITOR") or "vim",
        social = 'discord',
        -- game = rofi_command,
        files = os.getenv('FILE_BROWSER') or 'caja'
        -- music = rofi_command
    },
    -- List of apps to start once on start-up
    run_on_start_up = {
        -- Force Composition Pipeline for nvidia
        "force-composition-pipeline",
        -- Load xresources
        "xrdb merge .Xresources",
        -- Start audio
        "start-pulseaudio-x11",
        -- Dunst for notifcations (TODO: update to use awesomewm)
        "dunst",
        -- Backgrounds
        "nitrogen --restore",
        -- Picom (compositor)
        "picom -b --experimental-backends --config ~/.config/picom.conf"
        
        -- -- Add applications that need to be killed between reloads
        -- -- to avoid multipled instances, inside the awspawn script
        -- '~/.config/awesome/configuration/awspawn', -- Spawn "dirty" apps that can linger between sessions
        -- 'compton --config ' .. filesystem.get_configuration_dir() ..
        --     '/configuration/compton.conf', 'nm-applet --indicator', -- wifi
        -- -- 'blueberry-tray', -- Bluetooth tray icon
        -- 'xfce4-power-manager', -- Power manager
        -- 'ibus-daemon --xim --daemonize', -- Ibus daemon for keyboard
        -- 'scream-start', -- scream audio sink
        -- 'numlockx on', -- enable numlock
        -- -- '/usr/lib/policykit-1-gnome/polkit-gnome-authentication-agent-1 & eval $(gnome-keyring-daemon -s --components=pkcs11,secrets,ssh,gpg)', -- credential manager
        -- -- '/usr/lib/x86_64-linux-gnu/libexec/polkit-kde-authentication-agent-1 & eval $(gnome-keyring-daemon -s --components=pkcs11,secrets,ssh,gpg)', -- credential manager
        -- '/usr/lib/xfce-polkit/xfce-polkit & eval $(gnome-keyring-daemon -s --components=pkcs11,secrets,ssh,gpg)', -- credential manager
        -- 'blueman-tray' -- bluetooth tray
        -- 'lxsession'
    }
}

local config = {
    -- Used for valid ways to layout awesomewm windows
    layouts = {
        awful.layout.suit.tile.left, awful.layout.suit.floating,
        awful.layout.suit.max
        -- awful.layout.suit.floating, awful.layout.suit.tile,
        -- -- awful.layout.suit.tile.left, awful.layout.suit.tile.bottom,
        -- -- awful.layout.suit.tile.top, awful.layout.suit.fair,
        -- -- awful.layout.suit.fair.horizontal, awful.layout.suit.spiral,
        -- -- awful.layout.suit.spiral.dwindle, awful.layout.suit.max,
        -- awful.layout.suit.max.fullscreen, -- awful.layout.suit.magnifier,
        -- awful.layout.suit.corner.nw
        -- -- awful.layout.suit.corner.ne,
        -- -- awful.layout.suit.corner.sw,
        -- -- awful.layout.suit.corner.se,
    },
    -- Tags used for the workspaces bar (located in the top left)
    tags = {
        {
            icon = icons.firefox,
            type = 'firefox',
            defaultApp = apps.default.browser,
            screen = 1
        }, {
            icon = icons.code,
            type = 'code',
            defaultApp = apps.default.editor,
            screen = 1
        }, {
            icon = icons.folder,
            type = 'files',
            defaultApp = apps.default.files,
            screen = 1
        }, {
            icon = icons.console,
            type = 'console',
            defaultApp = apps.default.terminal,
            screen = 1
        }, {
            icon = icons.social,
            type = 'social',
            defaultApp = apps.default.social,
            screen = 1
        },
        {
            icon = icons.lab,
            type = 'any',
            defaultApp = apps.default.rofi,
            screen = 1
        }
    },
    -- Default Applications
    apps = apps
}

return config
