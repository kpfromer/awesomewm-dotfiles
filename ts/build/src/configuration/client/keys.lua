--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local awful = require("awful")
local gears = require("gears")
local ____config = require("ts.build.src.configuration.config")
local config = ____config.default
local modkey = config.modkey
____exports.default = gears.table.join(
    awful.key(
        {modkey},
        "f",
        function(c)
            c.fullscreen = not c.fullscreen
            c:raise()
        end,
        function()
        end,
        {description = "toggle fullscreen", group = "client"}
    ),
    awful.key(
        {modkey},
        "q",
        function(c)
            c:kill()
        end,
        function()
        end,
        {description = "kill window", group = "client"}
    ),
    awful.key(
        {modkey, "Control"},
        "space",
        function()
            awful.client.floating = not awful.client.floating
        end,
        function()
        end,
        {description = "toggle floating", group = "client"}
    ),
    awful.key(
        {modkey, "Control"},
        "Return",
        function(c)
            c:swap(
                awful.client:getmaster()
            )
        end,
        function()
        end,
        {description = "move to master", group = "client"}
    ),
    awful.key(
        {modkey},
        "o",
        function(c)
            c:move_to_screen()
        end,
        function()
        end,
        {description = "move to screen", group = "client"}
    ),
    awful.key(
        {modkey},
        "t",
        function(c)
            c.ontop = not c.ontop
        end,
        function()
        end,
        {description = "toggle keep on top", group = "client"}
    ),
    awful.key(
        {modkey},
        "n",
        function(c)
            c.minimized = true
        end,
        function()
        end,
        {description = "minimize", group = "client"}
    ),
    awful.key(
        {modkey},
        "m",
        function(c)
            c.maximized = not c.maximized
            c:raise()
        end,
        function()
        end,
        {description = "(un)maximize", group = "client"}
    ),
    awful.key(
        {modkey, "Control"},
        "m",
        function(c)
            c.maximized_vertical = not c.maximized_vertical
            c:raise()
        end,
        function()
        end,
        {description = "(un)maximize vertically", group = "client"}
    ),
    awful.key(
        {modkey, "Shift"},
        "m",
        function(c)
            c.maximized_horizontal = not c.maximized_horizontal
            c:raise()
        end,
        function()
        end,
        {description = "(un)maximize horizontally", group = "client"}
    ),
    awful.key(
        {modkey},
        "p",
        function(c)
            if c.floating then
                c.ontop = false
                c.sticky = false
                c.floating = false
            else
                c.ontop = true
                c.sticky = true
                c.floating = true
            end
        end,
        function()
        end,
        {description = "pin window", group = "client"}
    )
)
return ____exports
