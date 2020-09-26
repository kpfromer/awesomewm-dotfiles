-- ░▀█▀░█▀█░█▀▀░█▀▀
-- ░░█░░█▀█░█░█░▀▀█
-- ░░▀░░▀░▀░▀▀▀░▀▀▀

local icons = require('theme.icons')
local awful = require('awful')
local config = require('configuration.config')
local beautiful = require('beautiful')
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

-- Add tags for each window
awful.screen.connect_for_each_screen(function(s)
  for i, tag in pairs(tags) do
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

-- TODO: comment
_G.tag.connect_signal('property::layout', function(t)
  local currentLayout = awful.tag.getproperty(t, 'layout')
  if (currentLayout == awful.layout.suit.max) then
      t.gap = 2
  else
      t.gap = 2
  end
end)

_G.tag.connect_signal('property::selected',
                      function() updateBarsVisibility() end)