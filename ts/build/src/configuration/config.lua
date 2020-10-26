--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local filesystem = require("gears.filesystem")
local awful = require("awful")
local config_dir = filesystem:get_configuration_dir()
local bin_dir = tostring(config_dir) .. "utilities/"
local apps = {
    default = {
        terminal = os.getenv("TERMINAL") or "kitty",
        textEditor = "code",
        terminalEditor = os.getenv("EDITOR") or "vim",
        browser = os.getenv("BROWSER") or "google-chrome-stable",
        fileManager = "caja",
        networkManager = "nm-connection-editor",
        bluetoothManager = "blueman-manager",
        powerManager = "xfce4-power-manager",
        packageManager = "pamac-manager",
        lock = "awesome-client \"awesome.emit_signal('module::lockscreen_show')\"",
        screenshot = "spectacle //region",
        quake = "kitty //name QuakeTerminal"
    }
}
local config = {modkey = "Mod4", layouts = {awful.layout.suit.spiral.dwindle, awful.layout.suit.tile.left, awful.layout.suit.floating, awful.layout.suit.max}, module = {auto_start = {debug_mode = false}, dynamic_wallpaper = {wall_dir = "theme/wallpapers/", valid_picture_formats = {"jpg", "png", "jpeg"}, stretch = false}}, apps = apps}
____exports.default = config
return ____exports
