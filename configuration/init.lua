local awful = require('awful')
local gears = require("gears")
local wibox = require("wibox")
local config = require('configuration.config')

-- Set awesomewm window layouts
awful.layout.layouts = config.layouts

-- Set window rules
awful.rules.rules = config.rules

-- Add tags for each window
awful.screen.connect_for_each_screen(function(s)
  for i, tag in pairs(config.tags) do
      awful.tag.add(i, {
          icon = tag.icon,
          icon_only = true,
          layout = awful.layout.suit.tile,
          gap_single_client = true,
          gap = 2,
          screen = s,
          defaultApp = tag.defaultApp,
          selected = i == 1
      })
  end
end)

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
