-- ░▀█▀░█▀█░█▀▀░█▀▀
-- ░░█░░█▀█░█░█░▀▀█
-- ░░▀░░▀░▀░▀▀▀░▀▀▀

local icons = require('theme.icons')
local awful = require('awful')
local config = require('configuration.config')
local beautiful = require('beautiful')
local gears = require('gears')
local apps = config.apps

-- Tags used for the workspaces bar (located in the top left)
local tags = {
  {
      icon = icons.web_browser,
      type = 'internet',
      defaultApp = apps.default.browser,
      gap = beautiful.useless_gap
  }, {
      icon = icons.development,
      type = 'code',
      defaultApp = apps.default.editor,
      gap = beautiful.useless_gap
  }, {
      icon = icons.file_manager,
      type = 'files',
      defaultApp = apps.default.files,
      gap = beautiful.useless_gap
  }, {
      icon = icons.terminal,
      type = 'console',
      defaultApp = apps.default.terminal,
      gap = beautiful.useless_gap
  }, {
      icon = icons.social,
      type = 'social',
      defaultApp = apps.default.social,
      gap = beautiful.useless_gap
  },
  {
      icon = icons.sandbox,
      type = 'any',
      defaultApp = apps.default.rofi,
      gap = beautiful.useless_gap
  },
  -- TODO:
  {
    icon = icons.sandbox,
    type = 'any',
    defaultApp = apps.default.rofi,
    gap = beautiful.useless_gap
  },
  {
    icon = icons.sandbox,
    type = 'any',
    defaultApp = apps.default.rofi,
    gap = beautiful.useless_gap
  },
  {
    icon = icons.sandbox,
    type = 'any',
    defaultApp = apps.default.rofi,
    gap = beautiful.useless_gap
  }
}

-- Set tags layout
tag.connect_signal(
	'request::default_layouts',
	function()
	    awful.layout.append_default_layouts(config.layouts)
	end
)

-- Create tags for each screen
screen.connect_signal(
	'request::desktop_decoration',
	function(s)
		for i, tag in pairs(tags) do
			awful.tag.add(
				i,
				{
					icon = tag.icon,
					icon_only = true,
					layout = tag.layout or config.layouts[1],
					gap_single_client = true,
					gap = tag.gap,
					screen = s,
					default_app = tag.default_app,
					selected = i == 1
				}
			)
		end
	end
)

-- Change tag's client's shape and gap on change
tag.connect_signal(
	'property::layout',
	function(t)
		local current_layout = awful.tag.getproperty(t, 'layout')
		if (current_layout == awful.layout.suit.max) then
			-- Set clients gap to 0 and shape to rectangle if maximized
			t.gap = 0
			for _, c in ipairs(t:clients()) do
				if not c.floating then
					c.shape = function(cr, width, height)
						gears.shape.rectangle(cr, width, height)
					end
				else
					c.shape = function(cr, width, height)
						gears.shape.rounded_rect(cr, width, height, beautiful.client_radius)
					end
				end
			end
		else
			-- Set clients gap and shape
			t.gap = beautiful.useless_gap
			for _, c in ipairs(t:clients()) do
				if not c.round_corners or c.maximized then
					c.shape = function(cr, width, height)
						gears.shape.rectangle(cr, width, height)
					end
				else
					c.shape = function(cr, width, height)
						gears.shape.rounded_rect(cr, width, height, beautiful.client_radius)
					end
				end
			end
		end
	end
)

-- Focus on urgent clients
awful.tag.attached_connect_signal(
	s,
	'property::selected',
	function()
		local urgent_clients = function (c)
			return awful.rules.match(c, {urgent = true})
		end
		for c in awful.client.iterate(urgent_clients) do
			if c.first_tag == mouse.screen.selected_tag then
				client.focus = c
				c:raise()
			end
		end
	end
)
