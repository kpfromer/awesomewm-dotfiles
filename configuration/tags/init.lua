local awful = require('awful')
local icons = require('theme.icons')
local apps = require('configuration.apps')

-- Tags for workspace selector (top left of nav)
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
    {icon = icons.lab, type = 'any', defaultApp = apps.default.rofi, screen = 1}
}

awful.layout.layouts = {
    awful.layout.suit.tile, awful.layout.suit.max, awful.layout.suit.floating
}

awful.screen.connect_for_each_screen(function(s)
    for i, tag in pairs(tags) do
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

_G.tag.connect_signal('property::layout', function(t)
    local currentLayout = awful.tag.getproperty(t, 'layout')
    if (currentLayout == awful.layout.suit.max) then
        t.gap = 2
    else
        t.gap = 2
    end
end)
