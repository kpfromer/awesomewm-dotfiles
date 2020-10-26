--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local filesystem = require("ts.build.src.theme.gears.filesystem")
local beautiful = require("beautiful")
local gears = require("gears")
local dpi = beautiful.xresources.apply_dpi
local gtk_variable = beautiful.gtk.get_theme_variables
local theme_dir = tostring(
    filesystem.get_configuration_dir()
) .. "/theme"
local titlebar_theme = "stoplight"
local titlebar_icon_path = ((tostring(theme_dir) .. "/icons/titlebar/") .. tostring(titlebar_theme)) .. "/"
local tip = titlebar_icon_path
local theme = {}
theme.font = "Inter Regular 10"
theme.font_bold = "Inter Bold 10"
theme.icon_theme = "Tela-blue-dark"
local function awesome_overrides(theme)
    theme.dir = theme_dir
    theme.icons = tostring(theme.dir) .. "/icons/"
    theme.wallpaper = tostring(theme.dir) .. "/wallpapers/morning-wallpaper.jpg"
    theme.font = "Inter Regular 10"
    theme.fg_normal = "#ffffffde"
    theme.fg_focus = "#e4e4e4"
    theme.fg_urgent = "#CC9393"
    theme.bg_normal = theme.background
    theme.bg_focus = "#5a5a5a"
    theme.bg_urgent = "#3F3F3F"
    theme.bg_systray = theme.background
    theme.systray_icon_spacing = dpi(nil, 16)
    theme.menu_height = dpi(nil, 16)
    theme.menu_width = dpi(nil, 160)
    theme.tooltip_bg = "#232323"
    theme.tooltip_border_width = 0
    theme.tooltip_shape = function(cr, w, h)
        gears.shape.rounded_rect(
            cr,
            w,
            h,
            dpi(nil, 6)
        )
    end
    theme.border_focus = gtk_variable().bg_color
    theme.border_normal = gtk_variable().base_color
    theme.border_marked = "#CC9393"
    theme.border_width = dpi(nil, 0)
    theme.border_radius = dpi(nil, 12)
    theme.client_radius = dpi(nil, 9)
    theme.useless_gap = dpi(nil, 4)
    theme.menu_font = "Inter Regular 11"
    theme.menu_submenu = ""
    theme.menu_height = dpi(nil, 34)
    theme.menu_width = dpi(nil, 200)
    theme.menu_border_width = dpi(nil, 20)
    theme.tooltip_bg = theme.background
    theme.tooltip_border_color = theme.transparent
    theme.tooltip_border_width = 0
    theme.tooltip_gaps = dpi(nil, 5)
    theme.tooltip_shape = function(cr, w, h)
        gears.shape.rounded_rect(
            cr,
            w,
            h,
            dpi(nil, 6)
        )
    end
    theme.separator_color = "#f2f2f244"
end
____exports.default = {theme = theme, awesome_overrides = awesome_overrides}
return ____exports
