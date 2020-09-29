local beautiful = require('beautiful')
local wibox = require('wibox')
local dpi = require('beautiful').xresources.apply_dpi

local systray = wibox.widget.systray()
systray:set_horizontal(true)
systray:set_base_size(32)

local TopPanel = function(s, offset)
  -- TODO: remove
  local offsetx = -dpi(330)
  local offsety = 0
  if offset == true then
    -- offsetx = dpi(128)
    offsety = dpi(12)
  end
  local panel = wibox(
      {
        ontop = false,
        screen = s,
        height = dpi(32),
        width = dpi(128),
        x = s.geometry.width + offsetx,
        y = s.geometry.y + offsety,
        stretch = false,
        bg = beautiful.primary.hue_900,
        fg = beautiful.fg_normal,
        struts = {
          top = dpi(32)
        }
      }
  )

  panel:setup{
    layout = wibox.layout.align.horizontal,
    wibox.container.margin(systray, dpi(4), dpi(4), dpi(4), dpi(4)),
    nil,
    require('widget.battery')
  }

  return panel
end

return TopPanel
