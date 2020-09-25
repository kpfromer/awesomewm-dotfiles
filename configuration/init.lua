local awful = require('awful')
local config = require('configuration.config')

require('configuration.client')
require('configuration.root')
require('configuration.tags')

-- Global Keybindings
_G.root.keys(require("configuration.keys.global"))

-- Set awesomewm window layouts
awful.layout.layouts = config.layouts

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

-- Error handling
require('configuration.error')
