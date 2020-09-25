-- ░█▀▄░█░█░▀█▀░▀█▀░█▀█░█▀█░█▀▀
-- ░█▀▄░█░█░░█░░░█░░█░█░█░█░▀▀█
-- ░▀▀░░▀▀▀░░▀░░░▀░░▀▀▀░▀░▀░▀▀▀
-- TODO: DESCRIPTION
-- Docs:
-- TODO

local awful = require('awful')
local gears = require('gears')
local modkey = require('configuration.keys.mod').modkey

return gears.table.join(
  awful.button(
      {},
      1,
      function(c)
          c:emit_signal("request::activate", "mouse_click", {raise = true})
      end
  ),
  awful.button(
      {modkey},
      1,
      function(c)
          c:emit_signal("request::activate", "mouse_click", {raise = true})
          awful.mouse.client.move(c)
      end
  ),
  awful.button(
      {modkey},
      -- Right click
      3,
      function(c)
          c:emit_signal("request::activate", "mouse_click", {raise = true})
          awful.mouse.client.resize(c)
      end
  )
)

-- TODO:
-- return awful.util.table.join(
-- 	awful.button(
-- 		{},
-- 		1,
-- 		function(c)
-- 			client.focus = c
-- 			c:raise()
-- 		end
-- 	),
-- 	awful.button(
-- 		{modkey},
-- 		1,
-- 		awful.mouse.client.move
-- 	),
-- 	awful.button(
-- 		{modkey},
-- 		3,
-- 		awful.mouse.client.resize
-- 	),
-- 	awful.button(
-- 		{modkey},
-- 		4,
-- 		function()
-- 			awful.layout.inc(1)
-- 		end
-- 	),
-- 	awful.button(
-- 		{modkey},
-- 		5,
-- 		function()
-- 			awful.layout.inc(-1)
-- 		end
-- 	)
-- )
