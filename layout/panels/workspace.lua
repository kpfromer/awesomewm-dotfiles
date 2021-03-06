local beautiful = require('beautiful')
local wibox = require('wibox')
local TagList = require('widget.tag-list')

local dpi = require('beautiful').xresources.apply_dpi

local WorkspacePanel = function(s, offset)
  local offsetx = 0
  local offsety = 0
  if offset == true then
    offsetx = dpi(50)
    offsety = dpi(12)
  end
  local panel = wibox(
      {
        ontop = false,
        screen = s,
        height = dpi(32),
        width = dpi(275),
        x = s.geometry.x + offsetx,
        y = s.geometry.y + offsety,
        stretch = false,
        bg = beautiful.primary.hue_900,
        fg = beautiful.fg_normal
      }
  )

  local padding = dpi(5)

  panel:struts{
    top = dpi(32) + offsety + padding
  }

  panel:setup{
    layout = wibox.layout.align.horizontal,
    TagList(s)
  }

  return panel
end

return WorkspacePanel
