local awful = require('awful')
local config = require('configuration.config')

require('configuration.client')

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
