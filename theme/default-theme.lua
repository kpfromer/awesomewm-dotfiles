local filesystem = require('gears.filesystem')
local beautiful = require('beautiful')
local mat_colors = require('theme.mat-colors')
local gears = require('gears')

local dpi = beautiful.xresources.apply_dpi
local gtk_variable = beautiful.gtk.get_theme_variables

local theme_dir = filesystem.get_configuration_dir() .. '/theme'
local titlebar_theme = 'stoplight'
local titlebar_icon_path = theme_dir .. '/icons/titlebar/' .. titlebar_theme .. '/'
local tip = titlebar_icon_path

local theme = {}

-- Font
theme.font = 'Inter Regular 10'
theme.font_bold = 'Inter Bold 10'

-- Colors Pallets

-- Primary
theme.primary = mat_colors.deep_orange

-- Accent
theme.accent = mat_colors.orange

-- Background
theme.background = mat_colors.grey

-- Menu icon theme
theme.icon_theme = 'Tela-blue-dark'

local awesome_overrides = function(theme)
    theme.dir = os.getenv('HOME') .. '/.config/awesome/theme'

    theme.icons = theme.dir .. '/icons/'
    theme.wallpaper = theme.dir .. '/wallpapers/morning-wallpaper.jpg'
    -- theme.wallpaper = '#e0e0e0'

    -- Default font
    theme.font = 'Inter Regular 10'

    -- todo: rest of theme

    theme.fg_normal = '#ffffffde'

    theme.fg_focus = '#e4e4e4'
    theme.fg_urgent = '#CC9393'
    theme.bat_fg_critical = '#232323'

    theme.bg_normal = theme.primary.hue_900
    theme.bg_focus = '#5a5a5a'
    theme.bg_urgent = '#3F3F3F'
    theme.bg_systray = theme.primary.hue_900

    -- Borders

    theme.border_width = dpi(1)
    theme.border_normal = theme.primary.hue_900
    theme.border_focus = theme.primary.hue_500
    theme.border_marked = '#CC9393'

    -- Menu

    theme.menu_height = dpi(16)
    theme.menu_width = dpi(160)

    -- Tooltips
    theme.tooltip_bg = '#232323'
    -- theme.tooltip_border_color = '#232323'
    theme.tooltip_border_width = 0
    theme.tooltip_shape = function(cr, w, h)
        gears.shape.rounded_rect(cr, w, h, dpi(6))
    end

    -- Layout

    theme.layout_max = theme.icons .. 'layouts/arrow-expand-all.png'
    theme.layout_tile = theme.icons .. 'layouts/view-quilt.png'
    theme.layout_floating = theme.icons .. 'layouts/floating.png'

    -- Taglist

    theme.taglist_bg_empty = theme.primary.hue_900
    theme.taglist_bg_occupied = theme.primary.hue_900
    theme.taglist_bg_urgent = 'linear:0,0:0,' .. dpi(48) .. ':0,' ..
                                  theme.accent.hue_500 .. ':0.07,' ..
                                  theme.accent.hue_500 .. ':0.07,' ..
                                  theme.primary.hue_900 .. ':1,' ..
                                  theme.primary.hue_900
    theme.taglist_bg_focus = 'linear:0,0:0,' .. dpi(32) .. ':0,' ..
                                 theme.primary.hue_900 .. ':0.9,' ..
                                 theme.primary.hue_900 .. ':0.9,' ..
                                 theme.primary.hue_500 .. ':1,' ..
                                 theme.primary.hue_500
        
    -- Tasklist

    theme.tasklist_font = 'Roboto medium 11'
    theme.tasklist_bg_normal = theme.primary.hue_900
    theme.tasklist_bg_focus = 'linear:0,0:0,' .. dpi(32) .. ':0,' ..
                                  theme.primary.hue_900 .. ':0.9,' ..
                                  theme.primary.hue_900 .. ':0.9,' ..
                                  theme.fg_normal .. ':1,' .. theme.fg_normal
    theme.tasklist_bg_urgent = theme.primary.hue_900
    theme.tasklist_fg_focus = '#DDDDDD'
    theme.tasklist_fg_urgent = theme.fg_normal
    theme.tasklist_fg_normal = '#AAAAAA'

    theme.icon_theme = 'Tela circle purple dark'

    -- Client
    theme.border_width = dpi(1)
    theme.border_focus = theme.primary.hue_100
    theme.border_normal = theme.primary.hue_900
    
    	-- Titlebar
    theme.titlebar_size = dpi(34)
	theme.titlebar_bg_focus = gtk_variable().bg_color:sub(1,7) .. '66'
	theme.titlebar_bg_normal = gtk_variable().base_color:sub(1,7) .. '66'
	theme.titlebar_fg_focus = gtk_variable().fg_color .. '00'
	theme.titlebar_fg_normal = gtk_variable().fg_color .. '00'

	-- Close Button
	theme.titlebar_close_button_normal = tip .. 'close_normal.svg'
	theme.titlebar_close_button_focus  = tip .. 'close_focus.svg'

	-- Minimize Button
	theme.titlebar_minimize_button_normal = tip .. 'minimize_normal.svg'
	theme.titlebar_minimize_button_focus  = tip .. 'minimize_focus.svg'

	-- Ontop Button
	theme.titlebar_ontop_button_normal_inactive = tip .. 'ontop_normal_inactive.svg'
	theme.titlebar_ontop_button_focus_inactive  = tip .. 'ontop_focus_inactive.svg'
	theme.titlebar_ontop_button_normal_active = tip .. 'ontop_normal_active.svg'
	theme.titlebar_ontop_button_focus_active  = tip .. 'ontop_focus_active.svg'

	-- Sticky Button
	theme.titlebar_sticky_button_normal_inactive = tip .. 'sticky_normal_inactive.svg'
	theme.titlebar_sticky_button_focus_inactive  = tip .. 'sticky_focus_inactive.svg'
	theme.titlebar_sticky_button_normal_active = tip .. 'sticky_normal_active.svg'
	theme.titlebar_sticky_button_focus_active  = tip .. 'sticky_focus_active.svg'

	-- Floating Button
	theme.titlebar_floating_button_normal_inactive = tip .. 'floating_normal_inactive.svg'
	theme.titlebar_floating_button_focus_inactive  = tip .. 'floating_focus_inactive.svg'
	theme.titlebar_floating_button_normal_active = tip .. 'floating_normal_active.svg'
	theme.titlebar_floating_button_focus_active  = tip .. 'floating_focus_active.svg'

	-- Maximized Button
	theme.titlebar_maximized_button_normal_inactive = tip .. 'maximized_normal_inactive.svg'
	theme.titlebar_maximized_button_focus_inactive  = tip .. 'maximized_focus_inactive.svg'
	theme.titlebar_maximized_button_normal_active = tip .. 'maximized_normal_active.svg'
	theme.titlebar_maximized_button_focus_active  = tip .. 'maximized_focus_active.svg'

	-- Hovered Close Button
	theme.titlebar_close_button_normal_hover = tip .. 'close_normal_hover.svg'
	theme.titlebar_close_button_focus_hover  = tip .. 'close_focus_hover.svg'

	-- Hovered Minimize Buttin
	theme.titlebar_minimize_button_normal_hover = tip .. 'minimize_normal_hover.svg'
	theme.titlebar_minimize_button_focus_hover  = tip .. 'minimize_focus_hover.svg'

	-- Hovered Ontop Button
	theme.titlebar_ontop_button_normal_inactive_hover = tip .. 'ontop_normal_inactive_hover.svg'
	theme.titlebar_ontop_button_focus_inactive_hover  = tip .. 'ontop_focus_inactive_hover.svg'
	theme.titlebar_ontop_button_normal_active_hover = tip .. 'ontop_normal_active_hover.svg'
	theme.titlebar_ontop_button_focus_active_hover  = tip .. 'ontop_focus_active_hover.svg'

	-- Hovered Sticky Button
	theme.titlebar_sticky_button_normal_inactive_hover = tip .. 'sticky_normal_inactive_hover.svg'
	theme.titlebar_sticky_button_focus_inactive_hover  = tip .. 'sticky_focus_inactive_hover.svg'
	theme.titlebar_sticky_button_normal_active_hover = tip .. 'sticky_normal_active_hover.svg'
	theme.titlebar_sticky_button_focus_active_hover  = tip .. 'sticky_focus_active_hover.svg'

	-- Hovered Floating Button
	theme.titlebar_floating_button_normal_inactive_hover = tip .. 'floating_normal_inactive_hover.svg'
	theme.titlebar_floating_button_focus_inactive_hover  = tip .. 'floating_focus_inactive_hover.svg'
	theme.titlebar_floating_button_normal_active_hover = tip .. 'floating_normal_active_hover.svg'
	theme.titlebar_floating_button_focus_active_hover  = tip .. 'floating_focus_active_hover.svg'

	-- Hovered Maximized Button
	theme.titlebar_maximized_button_normal_inactive_hover = tip .. 'maximized_normal_inactive_hover.svg'
	theme.titlebar_maximized_button_focus_inactive_hover  = tip .. 'maximized_focus_inactive_hover.svg'
	theme.titlebar_maximized_button_normal_active_hover = tip .. 'maximized_normal_active_hover.svg'
	theme.titlebar_maximized_button_focus_active_hover  = tip .. 'maximized_focus_active_hover.svg'
end
return {theme = theme, awesome_overrides = awesome_overrides}
