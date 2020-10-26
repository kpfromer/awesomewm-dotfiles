--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local awful = require("awful")
local ____buttons = require("ts.build.src.configuration.client.buttons")
local client_buttons = ____buttons.default
local ____keys = require("ts.build.src.configuration.client.keys")
local client_keys = ____keys.default
local rules = {
    {rule_any = {name = {"kitty"}}, properties = {skip_decoration = true}},
    {rule = {}, properties = {focus = awful.client.focus.filter, raise = true, keys = client_keys, buttons = client_buttons, screen = awful.screen.preferred, placement = awful.placement.no_offscreen, floating = false, maximized = false, above = false, below = false, ontop = false, sticky = false, maximized_horizontal = false, maximized_vertical = false}},
    {id = "dialog", rule_any = {type = {"dialog"}, class = {"Wicd-client.py", "calendar.google.com"}}, properties = {titlebars_enabled = true, floating = true, above = true, draw_backdrop = true, skip_decoration = true, placement = awful.placement.centered}},
    {rule_any = {type = {"normal", "dialog"}}, properties = {titlebars_enabled = true}},
    {
        rule_any = {class = {"Caja", "gcr-prompter"}},
        properties = {
            focus = true,
            floating = true,
            above = true,
            callback = function(window)
                awful.placement.centered(window)
            end
        }
    },
    {
        rule_any = {class = {"Zoom"}, name = {"Chat"}},
        properties = {
            focus = true,
            floating = true,
            above = true,
            callback = function(window)
                awful.placement.centered(window)
            end
        }
    }
}
awful.rules.rules = rules
return ____exports
