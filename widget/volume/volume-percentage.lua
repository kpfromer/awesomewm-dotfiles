local awful = require('awful')
local wibox = require('wibox')
local mat_list_item = require('widget.material.list-item')
local dpi = require('beautiful').xresources.apply_dpi
local watch = require('awful.widget.watch')

local percentage = wibox.widget.textbox()
percentage.align = 'center'
percentage.valign = 'center'

-- TODO: remove global
function update_volume()
    -- awful.spawn.easy_async("amixer -D pulse sget Master", function(stdout)
    --     -- TODO: muted version
    --     local mute = string.match(stdout, '%[(o%D%D?)%]')
    --     local volume = string.match(stdout, '(%d?%d?%d)%%')
    --     percentage.text = volume
    --     collectgarbage('collect')
    -- end)
    awful.spawn.easy_async("pulsemixer --get-volume", function(stdout)
        -- TODO: muted version
        -- local mute = string.match(stdout, '%[(o%D%D?)%]')
        local volume = string.match(stdout, '%d?%d?')
        percentage.text = volume
        collectgarbage('collect')
    end)
end

update_volume()

local volume_setting = wibox.widget {
    percentage,
    forced_width = dpi(32),
    widget = wibox.container.background
}

return volume_setting
