--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local filesystem = require("gears.filesystem")
local theme_dir = tostring(
    filesystem:get_configuration_dir()
) .. "/theme"
local theme = {}
theme.icons = tostring(theme_dir) .. "/icons/"
theme.font = "Inter Regular 10"
theme.font_bold = "Inter Bold 10"
theme.system_black_dark = "#3D4C5F"
theme.system_black_light = "#56687E"
theme.system_red_dark = "#EE4F84"
theme.system_red_light = "#F48FB1"
theme.system_green_dark = "#53E2AE"
theme.system_green_light = "#A1EFD3"
theme.system_yellow_dark = "#F1FF52"
theme.system_yellow_light = "#F1FA8C"
theme.system_blue_dark = "#6498EF"
theme.system_blue_light = "#92B6F4"
theme.system_magenta_dark = "#985EFF"
theme.system_magenta_light = "#BD99FF"
theme.system_cyan_dark = "#24D1E7"
theme.system_cyan_light = "#87DFEB"
theme.system_white_dark = "#E5E5E5"
theme.system_white_light = "#F8F8F2"
theme.accent = theme.system_blue_dark
theme.background = "#00000066"
theme.background_light = "#f2f2f266"
theme.transparent = "#00000000"
theme.awesome_icon = tostring(theme.icons) .. "awesome.svg"
____exports.awesome_overrides = function(theme)
end
____exports.default = {theme = theme, awesome_overrides = ____exports.awesome_overrides}
return ____exports
