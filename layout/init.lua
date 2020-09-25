local awful = require("awful")
local menubar = require("menubar")
local hotkeys_popup = require("awful.hotkeys_popup")
local beautiful = require("beautiful")

-- -- Create a launcher widget and a main menu
-- myawesomemenu = {
--     {
--         "hotkeys",
--         function() hotkeys_popup.show_help(nil, awful.screen.focused()) end
--     }, {"manual", terminal .. " -e man awesome"},
--     {"edit config", editor_cmd .. " " .. awesome.conffile},
--     {"restart", awesome.restart}, {"quit", function() awesome.quit() end}
-- }

-- mymainmenu = awful.menu({
--     items = {
--         {"awesome", myawesomemenu, beautiful.awesome_icon},
--         {"open terminal", terminal}
--     }
-- })

-- mylauncher = awful.widget.launcher({
--     image = beautiful.awesome_icon,
--     menu = mymainmenu
-- })

-- -- Menubar configuration
-- menubar.utils.terminal = terminal -- Set the terminal for applications that require it

-- NEW

local workspace_panel = require('layout.panels.workspace')
local clock_panel = require('layout.panels.clock')
local volume_panel = require('layout.panels.volume')
local mode_panel = require('layout.panels.mode')
local date_panel = require('layout.panels.date')
local tasklist_panel = require('layout.panels.tasklist')
local systemtray_panel = require('layout.panels.systemtray')

-- Create a wibox for each screen and add it
awful.screen.connect_for_each_screen(function(s)
    -- TODO: figure out what this means (multile monitor?)
    if s.index == 1 then
        -- s.left_panel = left_panel(s)
        s.mode_panel = mode_panel(s, true)
        s.tasklist_panel = tasklist_panel(s, true)
        s.workspace_panel = workspace_panel(s, true)
        s.date_panel = date_panel(s, true)
        s.clock_panel = clock_panel(s, true)
        s.systemtray_panel = systemtray_panel(s, true)
        s.volume_panel = volume_panel(s, true)
    else
        s.mode_panel = mode_panel(s, false)
        s.workspace_panel = workspace_panel(s, false)
        s.tasklist_panel = tasklist_panel(s, false)
        s.date_panel = date_panel(s, false)
        s.clock_panel = clock_panel(s, false)
        s.systemtray_panel = systemtray_panel(s, false)
        s.volume_panel = volume_panel(s, false)
    end
end)


-- Hide bars when app go fullscreen
function updateBarsVisibility()
    for s in screen do
        if s.selected_tag then
            local fullscreen = s.selected_tag.fullscreenMode
            -- Order matters here for shadow
            s.workspace_panel.visible = not fullscreen
            s.mode_panel.visible = not fullscreen
            s.tasklist_panel.visible = not fullscreen
            s.date_panel.visible = not fullscreen
            s.clock_panel.visible = not fullscreen
            s.systemtray_panel.visible = not fullscreen
            s.volume_panel.visible = not fullscreen
            -- if s.left_panel then
            --     s.left_panel.visible = not fullscreen
            -- end
        end
    end
end

_G.client.connect_signal('property::fullscreen', function(c)
    c.screen.selected_tag.fullscreenMode = c.fullscreen
    updateBarsVisibility()
end)

_G.client.connect_signal('unmanage', function(c)
    if c.fullscreen then
        c.screen.selected_tag.fullscreenMode = false
        updateBarsVisibility()
    end
end)