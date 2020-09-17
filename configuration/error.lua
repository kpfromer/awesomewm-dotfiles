local naughty = require("naughty")

-- Check if awesome encountered an error during startup and fell back to
-- another config (This code will only ever execute for the fallback config)
if _G.awesome.startup_errors then
  naughty.notify(
      {
          preset = naughty.config.presets.critical,
          title = "Oops, there were errors during startup!",
          text = _G.awesome.startup_errors
      }
  )
end

-- Handle runtime errors after startup
do
  local in_error = false
  _G.awesome.connect_signal(
      "debug::error",
      function(err)
          -- Make sure we don't go into an endless error loop
          if in_error then
              return
          end
          in_error = true

          naughty.notify(
              {
                  preset = naughty.config.presets.critical,
                  title = "Oops, an error happened!",
                  text = tostring(err)
              }
          )
          in_error = false
      end
  )
end