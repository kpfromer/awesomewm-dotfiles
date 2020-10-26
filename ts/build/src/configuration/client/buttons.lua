--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local awful = require("awful")
local gears = require("gears")
local ____config = require("ts.build.src.configuration.config")
local config = ____config.default
local modkey = config.modkey
____exports.default = gears.table.join(
    awful.button(
        {modkey},
        1,
        function(client)
            client:emit_signal("request::activate", "mouse_click", {raise = true})
        end
    ),
    awful.button(
        {modkey},
        1,
        function(client)
            client:emit_signal("request::activate", "mouse_click", {raise = true})
            awful.mouse.client:move(client)
        end
    ),
    awful.button(
        {config.modkey},
        3,
        function(client)
            client:emit_signal("request::activate", "mouse_click", {raise = true})
            awful.mouse.client:resize(client)
        end
    )
)
return ____exports
