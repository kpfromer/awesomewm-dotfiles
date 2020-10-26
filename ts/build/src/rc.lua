--[[ Generated with https://github.com/TypeScriptToLua/TypeScriptToLua ]]
local ____exports = {}
local awful = require("awful")
local beautiful = require("beautiful")
require("ts.build.src.configuration.client.index")
awful.util.shell = "sh"
beautiful.init(
    require("theme")
)
return ____exports
