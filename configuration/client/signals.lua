-- ░█▀▀░▀█▀░█▀▀░█▀█░█▀█░█░░░█▀▀
-- ░▀▀█░░█░░█░█░█░█░█▀█░█░░░▀▀█
-- ░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀░▀░▀▀▀░▀▀▀

local awful = require('awful')
local gears = require("gears")
local wibox = require("wibox")
local beautiful = require('beautiful')

-- Signal function to execute when a new client appears.
_G.client.connect_signal(
    "manage",
    function(c)
        -- Set the windows at the slave,
        -- i.e. put it at the end of others instead of setting it master.
        -- if not awesome.startup then awful.client.setslave(c) end

        if _G.awesome.startup and not c.size_hints.user_position and not c.size_hints.program_position then
            -- Prevent clients from being unreachable after screen count changes.
            awful.placement.no_offscreen(c)
        end
    end
)

-- Enable sloppy focus, so that focus follows mouse.
_G.client.connect_signal(
    "mouse::enter",
    function(c)
        c:emit_signal("request::activate", "mouse_enter", {raise = false})
    end
)

_G.client.connect_signal(
    "focus",
    function(c)
        c.border_color = beautiful.border_focus
    end
)
_G.client.connect_signal(
    "unfocus",
    function(c)
        c.border_color = beautiful.border_normal
    end
)
-- }}}

-- Make the focused window have a glowing border
_G.client.connect_signal(
    "focus",
    function(c)
        c.border_color = beautiful.border_focus
    end
)
_G.client.connect_signal(
    "unfocus",
    function(c)
        c.border_color = beautiful.border_normal
    end
)

-- If a window wants titlebars (based on window rules) then give to them (see config.rules)
-- Handle Titlebars (min/max/close bar on every window)
-- https://awesomewm.org/doc/api/classes/client.html#request::titlebars
_G.client.connect_signal(
  "request::titlebars",
  function(c)
      -- buttons for the titlebar
      local buttons =
          gears.table.join(
          -- Click on titlebar
          awful.button(
              {},
              1,
              function()
                  c:emit_signal("request::activate", "titlebar", {raise = true})
                  awful.mouse.client.move(c)
              end
          ),
          -- Right click titlebar
          awful.button(
              {},
              3,
              function()
                  c:emit_signal("request::activate", "titlebar", {raise = true})
                  awful.mouse.client.resize(c)
              end
          )
      )

      awful.titlebar(c):setup {
          {
              -- Left
              awful.titlebar.widget.iconwidget(c),
              buttons = buttons,
              layout = wibox.layout.fixed.horizontal
          },
          {
              -- Middle
              {
                  -- Title
                  align = "center",
                  widget = awful.titlebar.widget.titlewidget(c)
              },
              buttons = buttons,
              layout = wibox.layout.flex.horizontal
          },
          {
              -- Right
              awful.titlebar.widget.floatingbutton(c),
              awful.titlebar.widget.maximizedbutton(c),
              awful.titlebar.widget.stickybutton(c),
              awful.titlebar.widget.ontopbutton(c),
              awful.titlebar.widget.closebutton(c),
              layout = wibox.layout.fixed.horizontal()
          },
          layout = wibox.layout.align.horizontal
      }
  end
)


-- TODO:
-- local awful = require('awful')
-- local gears = require('gears')
-- local beautiful = require('beautiful')

-- -- Signal function to execute when a new client appears.
-- client.connect_signal(
-- 	'manage',
-- 	function(c)
-- 		-- Focus, raise and activate
-- 		c:emit_signal(
-- 			'request::activate',
-- 			'mouse_enter',
-- 			{
-- 				raise = true
-- 			}
-- 		)

-- 		-- Set the windows at the slave,
-- 		-- i.e. put it at the end of others instead of setting it master.
-- 		if not awesome.startup then
-- 			awful.client.setslave(c)
-- 		end

-- 		if awesome.startup and not c.size_hints.user_position and
-- 			not c.size_hints.program_position then
			
-- 			-- Prevent clients from being unreachable after screen count changes.
-- 			awful.placement.no_offscreen(c)
-- 		end

-- 		-- Spawn client with rounded corners (of course it will follow the theme.client_radius)
-- 		-- if client's first_tag is not maximized and round_corners = false
-- 		local current_layout = awful.tag.getproperty(c.first_tag, 'layout')
-- 		if not c.round_corners or (current_layout == awful.layout.suit.max and not c.floating) then return end
-- 		c.shape = function(cr, width, height)
-- 			gears.shape.rounded_rect(cr, width, height, beautiful.client_radius or 6)
-- 		end
-- 	end
-- )

-- -- Enable sloppy focus, so that focus follows mouse then raises it.
-- client.connect_signal(
-- 	'mouse::enter',
-- 	function(c)
-- 		c:emit_signal(
-- 			'request::activate',
-- 			'mouse_enter',
-- 			{
-- 				raise = true
-- 			}
-- 		)
-- 	end
-- )

-- client.connect_signal(
-- 	'focus',
-- 	function(c)
-- 		c.border_color = beautiful.border_focus
-- 	end
-- )

-- client.connect_signal(
-- 	'unfocus',
-- 	function(c)
-- 		c.border_color = beautiful.border_normal
-- 	end
-- )

-- -- Manipulate client shape on fullscreen/non-fullscreen
-- client.connect_signal(
-- 	'property::fullscreen',
-- 	function(c)
-- 		if c.fullscreen then
-- 			c.shape = function(cr, width, height)
-- 				gears.shape.rectangle(cr, width, height)
-- 			end
-- 		else
-- 			local current_layout = awful.tag.getproperty(c.first_tag, 'layout')
-- 			if (current_layout == awful.layout.suit.max) then
-- 				c.shape = function(cr, width, height)
-- 					gears.shape.rectangle(cr, width, height)
-- 				end
-- 			else
-- 				c.shape = function(cr, width, height)
-- 					gears.shape.rounded_rect(cr, width, height, beautiful.client_radius or 6)
-- 				end
-- 			end
-- 		end
-- 	end
-- )

-- -- Manipulate client shape on maximized
-- client.connect_signal(
-- 	'property::maximized',
-- 	function(c)
-- 		local current_layout = awful.tag.getproperty(c.first_tag, 'layout')
-- 		if c.maximized then
-- 			c.shape = function(cr, width, height)
-- 				gears.shape.rectangle(cr, width, height)
-- 			end
-- 		else
-- 			if current_layout == awful.layout.suit.max then return end
-- 			c.shape = function(cr, width, height)
-- 				gears.shape.rounded_rect(cr, width, height, beautiful.client_radius or 6)
-- 			end
-- 		end
-- 	end
-- )

-- -- Manipulate client shape on floating
-- client.connect_signal(
-- 	'property::floating',
-- 	function(c)
-- 		local current_layout = awful.tag.getproperty(c.first_tag, 'layout')
-- 		if c.floating and not c.maximized then
-- 			c.shape = function(cr, width, height)
-- 				gears.shape.rounded_rect(cr, width, height, beautiful.client_radius or 6)
-- 			end
-- 		else
-- 			if current_layout == awful.layout.suit.max then
-- 				c.shape = function(cr, width, height)
-- 					gears.shape.rectangle(cr, width, height)
-- 				end
-- 			end
-- 		end
-- 	end
-- )
