-- ░█▀█░█░█░█▀▀░█▀▀░█▀█░█▄█░█▀▀░█░█░█▄█
-- ░█▀█░█▄█░█▀▀░▀▀█░█░█░█░█░█▀▀░█▄█░█░█
-- ░▀░▀░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀░▀░▀░▀░▀
-- Kyle Pfromer
-- Based off of 
-- Banner generated using `toilet -f pagga text`

-- Standard awesome library
local gears = require("gears")
require("awful.autofocus")
-- Theme handling library
local beautiful = require("beautiful")

-- Print any errors
require('configuration.error')

-- ░▀█▀░█░█░█▀▀░█▄█░█▀▀
-- ░░█░░█▀█░█▀▀░█░█░█▀▀
-- ░░▀░░▀░▀░▀▀▀░▀░▀░▀▀▀

beautiful.init(require("theme"))

-- ░█▀▀░█▀█░█▀█░█▀▀░▀█▀░█▀▀░█░█░█▀▄░█▀█░▀█▀░▀█▀░█▀█░█▀█
-- ░█░░░█░█░█░█░█▀▀░░█░░█░█░█░█░█▀▄░█▀█░░█░░░█░░█░█░█░█
-- ░▀▀▀░▀▀▀░▀░▀░▀░░░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀░▀░░▀░░▀▀▀░▀▀▀░▀░▀

require('configuration.client')
require('configuration.root')
require('configuration.tags')
_G.root.keys(require("configuration.keys.global"))

-- ░█░░░█▀█░█░█░█▀█░█░█░▀█▀
-- ░█░░░█▀█░░█░░█░█░█░█░░█░
-- ░▀▀▀░▀░▀░░▀░░▀▀▀░▀▀▀░░▀░
          
require("layout")

-- ░█▄█░█▀█░█▀▄░█░█░█░░░█▀▀░█▀▀
-- ░█░█░█░█░█░█░█░█░█░░░█▀▀░▀▀█
-- ░▀░▀░▀▀▀░▀▀░░▀▀▀░▀▀▀░▀▀▀░▀▀▀

-- Configuration/layout for system notifications (using naughty)
require('module.notifications') 
-- Handles staring up programs like picom
require('module.auto-start')
-- Titlebars for clients (windows)
require('module.titlebar')
require('module.dynamic-wallpaper')

-- ░█░█░█▀█░█░░░█░░░█▀█░█▀█░█▀█░█▀▀░█▀▄
-- ░█▄█░█▀█░█░░░█░░░█▀▀░█▀█░█▀▀░█▀▀░█▀▄
-- ░▀░▀░▀░▀░▀▀▀░▀▀▀░▀░░░▀░▀░▀░░░▀▀▀░▀░▀

-- todo: extract
local function set_wallpaper(s)
    -- If wallpaper is a function, call it with the screen
    if beautiful.wallpaper then
        if type(beautiful.wallpaper) == 'string' then

            -- Check if beautiful.wallpaper is color/image
            if beautiful.wallpaper:sub(1, #'#') == '#' then
                -- If beautiful.wallpaper is color
                gears.wallpaper.set(beautiful.wallpaper)

            elseif beautiful.wallpaper:sub(1, #'/') == '/' then
                -- If beautiful.wallpaper is path/image
                gears.wallpaper.maximized(beautiful.wallpaper, s)
            end
        else
            beautiful.wallpaper(s)
        end
    end
end

screen.connect_signal('request::wallpaper', set_wallpaper)
-- Re-set wallpaper when a screen's geometry changes (e.g. different resolution)
screen.connect_signal("property::geometry", set_wallpaper)