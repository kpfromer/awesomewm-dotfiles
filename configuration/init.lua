local awful = require('awful')
local gears = require("gears")
local wibox = require("wibox")
local config = require('configuration.config')

require('configuration.client.rules')

-- Global Keybindings
_G.root.keys(require("configuration.keys.global"))

-- Set awesomewm window layouts
awful.layout.layouts = config.layouts

-- Add tags for each window
awful.screen.connect_for_each_screen(function(s)
  for i, tag in pairs(config.tags) do
      awful.tag.add(i, {
          icon = tag.icon,
          icon_only = true,
          layout = config.layouts[1],
          gap_single_client = true,
          gap = 2,
          screen = s,
          defaultApp = tag.defaultApp,
          selected = i == 1
      })
  end
end)

-- Start up default applications
-- Kill old versions of default applications
function autostart()
    for _, app in ipairs(config.apps.run_on_start_up) do
        local script_name = app
        local firstspace = app:find(" ")
        if firstspace then
            script_name = app:sub(0, firstspace - 1)
        end
        -- Only spawn if there are no other process of same name running
        awful.spawn.with_shell(string.format("pgrep -u $USER -x %s > /dev/null || (%s)", script_name, app), false)
     end
end
-- TODO:
-- autostart()

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

-- TODO: comment
_G.tag.connect_signal('property::layout', function(t)
  local currentLayout = awful.tag.getproperty(t, 'layout')
  if (currentLayout == awful.layout.suit.max) then
      t.gap = 2
  else
      t.gap = 2
  end
end)

-- Error handling
require('configuration.error')
