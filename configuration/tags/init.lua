-- ░▀█▀░█▀█░█▀▀░█▀▀
-- ░░█░░█▀█░█░█░▀▀█
-- ░░▀░░▀░▀░▀▀▀░▀▀▀

local icons = require('theme.icons')
local awful = require('awful')
local config = require('configuration.config')
local apps = config.apps

-- Tags used for the workspaces bar (located in the top left)
local tags = {
  {
      icon = icons.firefox,
      type = 'firefox',
      defaultApp = apps.default.browser,
      screen = 1
  }, {
      icon = icons.code,
      type = 'code',
      defaultApp = apps.default.editor,
      screen = 1
  }, {
      icon = icons.folder,
      type = 'files',
      defaultApp = apps.default.files,
      screen = 1
  }, {
      icon = icons.console,
      type = 'console',
      defaultApp = apps.default.terminal,
      screen = 1
  }, {
      icon = icons.social,
      type = 'social',
      defaultApp = apps.default.social,
      screen = 1
  },
  {
      icon = icons.lab,
      type = 'any',
      defaultApp = apps.default.rofi,
      screen = 1
  },
  -- TODO:
  {
    icon = icons.lab,
    type = 'any',
    defaultApp = apps.default.rofi,
    screen = 1
  },
  {
    icon = icons.lab,
    type = 'any',
    defaultApp = apps.default.rofi,
    screen = 1
  },
  {
    icon = icons.lab,
    type = 'any',
    defaultApp = apps.default.rofi,
    screen = 1
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