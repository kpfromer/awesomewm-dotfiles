-- ░█▀▀░█░░░▀█▀░█▀▀░█▀█░▀█▀░░░█░█░█▀▀░█░█░█▀▀
-- ░█░░░█░░░░█░░█▀▀░█░█░░█░░░░█▀▄░█▀▀░░█░░▀▀█
-- ░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░░▀░░░░▀░▀░▀▀▀░░▀░░▀▀▀
local awful = require('awful')
local gears = require('gears')
local modkey = require('configuration.keys.mod').modkey

local clientbuttons = gears.table.join(
    awful.button(
        {}, 1, function(c)
          c:emit_signal(
              'request::activate', 'mouse_click', {
                raise = true
              }
          )
        end
    ), awful.button(
        {modkey}, 1, function(c)
          c:emit_signal(
              'request::activate', 'mouse_click', {
                raise = true
              }
          )
          awful.mouse.client.move(c)
        end
    ), awful.button(
        {modkey}, -- Right click
        3, function(c)
          c:emit_signal(
              'request::activate', 'mouse_click', {
                raise = true
              }
          )
          awful.mouse.client.resize(c)
        end
    )
)

-- Keybindings per window
local clientkeys = gears.table.join(
    awful.key(
        {modkey}, 'f', function(c)
          c.fullscreen = not c.fullscreen
          c:raise()
        end, {
          description = 'toggle fullscreen',
          group = 'client'
        }
    ), awful.key(
        {modkey}, 'q', function(c)
          c:kill()
        end, {
          description = 'kill window',
          group = 'client'
        }
    ), awful.key(
        {
          modkey,
          'Control'
        }, 'space', awful.client.floating.toggle, {
          description = 'toggle floating',
          group = 'client'
        }
    ), awful.key(
        {
          modkey,
          'Control'
        }, 'Return', function(c)
          c:swap(awful.client.getmaster())
        end, {
          description = 'move to master',
          group = 'client'
        }
    ), awful.key(
        {modkey}, 'o', function(c)
          c:move_to_screen()
        end, {
          description = 'move to screen',
          group = 'client'
        }
    ), awful.key(
        {modkey}, 't', function(c)
          c.ontop = not c.ontop
        end, {
          description = 'toggle keep on top',
          group = 'client'
        }
    ), awful.key(
        {modkey}, 'n', function(c)
          -- The client currently has the input focus, so it cannot be
          -- minimized, since minimized clients can't have the focus.
          c.minimized = true
        end, {
          description = 'minimize',
          group = 'client'
        }
    ), awful.key(
        {modkey}, 'm', function(c)
          c.maximized = not c.maximized
          c:raise()
        end, {
          description = '(un)maximize',
          group = 'client'
        }
    ), awful.key(
        {
          modkey,
          'Control'
        }, 'm', function(c)
          c.maximized_vertical = not c.maximized_vertical
          c:raise()
        end, {
          description = '(un)maximize vertically',
          group = 'client'
        }
    ), awful.key(
        {
          modkey,
          'Shift'
        }, 'm', function(c)
          c.maximized_horizontal = not c.maximized_horizontal
          c:raise()
        end, {
          description = '(un)maximize horizontally',
          group = 'client'
        }
    ), awful.key(
        {modkey}, 'p', function(c)
          if c.floating then
            c.ontop = false
            c.sticky = false
            c.floating = false
          else
            c.ontop = true
            c.sticky = true
            c.floating = true
          end
        end, {
          description = 'pin window',
          group = 'client'
        }
    )
)

return {
  clientbuttons = clientbuttons,
  clientkeys = clientkeys
}
