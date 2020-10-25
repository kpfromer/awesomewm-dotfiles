local gears = require('gears')
local awful = require('awful')

root.buttons(
    gears.table.join(
        -- mymainmenu is the menu module (module/menu.lua)
        awful.button(
            {}, 1, function()
              if mymainmenu then mymainmenu:hide() end
            end
        ), awful.button(
            {}, 3, function()
              if mymainmenu then mymainmenu:toggle() end
            end
        )
    )
)
