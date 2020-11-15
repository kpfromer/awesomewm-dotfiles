// ░█▀▄░█░█░█░░░█▀▀░█▀▀
// ░█▀▄░█░█░█░░░█▀▀░▀▀█
// ░▀░▀░▀▀▀░▀▀▀░▀▀▀░▀▀▀
// Doc: https://awesomewm.org/doc/api/libraries/awful.rules.html
// Client rules doc: https://awesomewm.org/doc/api/classes/client.html#Extra_properties_available_in_awful_rules_and_awful_spawn

import * as awful from 'awful';
import client_buttons from './buttons';
import client_keys from './keys';

const rules: awful.Rule[] = [
  {rule_any: {name: ['kitty']}, properties: {skip_decoration: true}},
  {
    rule: {},
    properties: {
      focus: awful.client.focus.filter,
      raise: true,
      keys: client_keys,
      buttons: client_buttons,
      screen: awful.screen.preferred,
      placement: awful.placement.no_offscreen,
      floating: false,
      maximized: false,
      above: false,
      below: false,
      ontop: false,
      sticky: false,
      maximized_horizontal: false,
      maximized_vertical: false,
    },
  },
  {
    id: 'dialog',
    rule_any: {
      type: ['dialog'],
      class: ['Wicd-client.py', 'calendar.google.com'],
    },
    properties: {
      titlebars_enabled: true,
      floating: true,
      above: true,
      draw_backdrop: true,
      skip_decoration: true,
      placement: awful.placement.centered,
    },
  },
  {
    rule_any: {type: ['normal', 'dialog']},
    properties: {titlebars_enabled: true},
  },
  {
    rule_any: {
      class: [
        'Caja',
        'org.gnome.Nautilus',
        'Org.gnome.Nautilus',
        'gcr-prompter',
      ],
    },
    properties: {
      focus: true,
      floating: true,
      above: true,
      callback: function (this: void, window: awful.Client) {
        awful.placement.centered(window);
      },
    },
  },
  {
    rule_any: {class: ['Zoom'], name: ['Chat']},
    properties: {
      focus: true,
      floating: true,
      above: true,
      callback: function (this: void, window: awful.Client) {
        awful.placement.centered(window);
      },
    },
  },
];

awful.rules.rules = rules;

// local rules = {
//   {
//     rule_any = {
//       name = {"kitty"}
//     },
//     properties = {
//       skip_decoration = true
//     }
//   },
//   // All clients will match this rule.
//   {
//       rule = {},
//       properties = {
//           focus = awful.client.focus.filter,
//           raise = true,
//           keys = client_keys,
//           buttons = client_buttons,
//           screen = awful.screen.preferred,
//           placement = awful.placement.no_offscreen,
//           floating = false,
//           maximized = false,
//           above = false,
//           below = false,
//           ontop = false,
//           sticky = false,
//           maximized_horizontal = false,
//           maximized_vertical = false
//       }
//   },
//   {
//       id         = 'dialog',
//       rule_any   = {
//         type  = { 'dialog' },
//         class = { 'Wicd-client.py', 'calendar.google.com' }
//       },
//       properties = {
//         titlebars_enabled = true,
//         floating = true,
//         above = true,
//         draw_backdrop = true,
//         skip_decoration = true,
//         placement = awful.placement.centered
//       }
//     },
//   // Titlebars
// //   {
// //       rule_any = {
// //           type = {"dialog"},
// //           class = {"Wicd-client.py", "calendar.google.com"}
// //       },
// //       properties = {
// //           placement = awful.placement.centered,
// //           ontop = true,
// //           floating = true,
// //           drawBackdrop = true,
// //           shape = function()
// //               return function(cr, w, h)
// //                   gears.shape.rounded_rect(cr, w, h, 8)
// //               end
// //           end,
// //           skip_decoration = true
// //       }
// //   },
//   // Enable titlebars for all windows
//   {
//       // https://awesomewm.org/doc/api/classes/client.html#request::titlebars
//       // https://awesomewm.org/doc/api/classes/client.html#client.titlebars_enabled
//       rule_any = {type = {"normal", "dialog"}},
//       properties = {titlebars_enabled = true}
//   },
//   // Show caja, password permission, file manager as hover
//   {
//       rule_any = { class = {"Caja", "gcr-prompter"} },
//       properties = {
//           focus = true,
//           floating = true,
//           above = true,
//           // Center window on creation
//           callback = function (window)
//               awful.placement.centered(window)
//           end
//       }
//   },
//   // zoom chat as hover
//   {
//       rule_any = {class={"Zoom"}, name={"Chat"}},
//       properties = {
//           focus = true,
//           floating = true,
//           above = true,
//           // Center window on creation
//           callback = function (window)
//               awful.placement.centered(window)
//           end
//       }
//   },
// }

// awful.rules.rules = rules

// TODO:
// local awful from('awful')
// local gears from('gears')
// local ruled from('ruled')
// local client_keys from('configuration.client.keys')
// local client_buttons from('configuration.client.buttons')

// ruled.client.connect_signal(
// 	'request::rules',
// 	function()

// 		// All clients will match this rule.
// 		ruled.client.append_rule {
// 			id         = 'global',
// 			rule       = { },
// 			properties = {
// 				focus     = awful.client.focus.filter,
// 				raise     = true,
// 				floating = false,
// 				maximized = false,
// 				above = false,
// 				below = false,
// 				ontop = false,
// 				sticky = false,
// 				maximized_horizontal = false,
// 				maximized_vertical = false,
// 				round_corners = true,
// 				keys = client_keys,
// 				buttons = client_buttons,
// 				screen    = awful.screen.preferred,
// 				shape = function(cr, width, height)
// 					gears.shape.rectangle(cr, width, height)
// 				end,
// 				placement = awful.placement.no_overlap + awful.placement.no_offscreen
// 			}
// 		}

// 		// Titlebar rules
// 		ruled.client.append_rule {
// 			id 		= 'titlebars',
// 			rule_any   = {
// 				type = {
// 					'normal',
// 					'dialog'
// 				}
// 			},
// 			properties = {
// 				titlebars_enabled = true
// 			}
// 		}

// 		// Dialogs
// 		ruled.client.append_rule {
// 			id         = 'dialog',
// 			rule_any   = {
// 				type  = { 'dialog' },
// 				class = { 'Wicd-client.py', 'calendar.google.com' }
// 			},
// 			properties = {
// 				titlebars_enabled = true,
// 				floating = true,
// 				above = true,
// 				draw_backdrop = true,
// 				skip_decoration = true,
// 				placement = awful.placement.centered
// 			}
// 		}

// 		// Modals
// 		ruled.client.append_rule {
// 			id         = 'dialog',
// 			rule_any   = {
// 				type = { 'modal' }
// 			},
// 			properties = {
// 				titlebars_enabled = true,
// 				floating = true,
// 				above = true,
// 				draw_backdrop = true,
// 				skip_decoration = true,
// 				placement = awful.placement.centered
// 			}
// 		}

// 		// Utilities
// 		ruled.client.append_rule {
// 			id         = 'utility',
// 			rule_any   = {
// 				type = { 'utility' }
// 			},
// 			properties = {
// 				titlebars_enabled = false,
// 				floating = true,
// 				skip_decoration = true,
// 				placement = awful.placement.centered
// 			}
// 		}

// 		// Splash
// 		ruled.client.append_rule {
// 			id         = 'splash',
// 			rule_any   = {
// 				type = { 'splash' }
// 			},
// 			properties = {
// 				titlebars_enabled = false,
// 				round_corners = false,
// 				floating = true,
// 				above = true,
// 				skip_decoration = true,
// 				placement = awful.placement.centered
// 			}
// 		}

// 		// Terminal emulators
// 		ruled.client.append_rule {
// 			id         = 'terminals',
// 			rule_any   = {
// 				class = {
// 					'URxvt',
// 					'XTerm',
// 					'UXTerm',
// 					'kitty',
// 					'K3rmit'
// 				}
// 			},
// 			properties = {
// 				tag = '1',
// 				switch_to_tags = true,
// 				size_hints_honor = false,
// 				titlebars_enabled = true
// 			}
// 		}

// 		// Browsers and chats
// 		ruled.client.append_rule {
// 			id         = 'web_browsers',
// 			rule_any   = {
// 				class = {
// 					'firefox',
// 					'Tor Browser',
// 					'discord',
// 					'Chromium',
// 					'Google-chrome'
// 				}
// 			},
// 			properties = {
// 				tag = '2'
// 			}
// 		}

// 		// Text editors and word processing
// 		ruled.client.append_rule {
// 			id         = 'text_editors',
// 			rule_any   = {
// 				class = {
// 					'Geany',
// 					'Atom',
// 					'Subl3',
// 					'code-oss'
// 				},
// 				name  = {
// 					'LibreOffice',
// 					'libreoffice'
// 				}
// 			},
// 			properties = {
// 				tag = '3'
// 			}
// 		}

// 		// File managers
// 		ruled.client.append_rule {
// 			id         = 'file_managers',
// 			rule_any   = {
// 				class = {
// 					'dolphin',
// 					'ark',
// 					'Nemo',
// 					'File-roller'
// 				}
// 			},
// 			properties = {
// 				tag = '4',
// 				switch_to_tags = true
// 			}
// 		}

// 		// Multimedia
// 		ruled.client.append_rule {
// 			id         = 'multimedia',
// 			rule_any   = {
// 				class = {
// 					'vlc',
// 					'Spotify'
// 				}
// 			},
// 			properties = {
// 				tag = '5',
// 				switch_to_tags = true,
// 				draw_backdrop = false
// 			}
// 		}

// 		// Gaming
// 		ruled.client.append_rule {
// 			id         = 'gaming',
// 			rule_any   = {
// 				class = {
// 					'Wine',
// 					'dolphin-emu',
// 					'Steam',
// 					'Citra',
// 					'supertuxkart'
// 				},
// 				name = { 'Steam' }
// 			},
// 			properties = {
// 				tag = '6',
// 				skip_decoration = true,
// 				switch_to_tags = true,
// 				floating = true,
// 				placement = awful.placement.centered
// 			}
// 		}

// 		// Multimedia Editing
// 		ruled.client.append_rule {
// 			id         = 'graphics_editors',
// 			rule_any   = {
// 				class = {
// 					'Gimp-2.10',
// 					'Inkscape',
// 					'Flowblade'
// 				}
// 			},
// 			properties = {
// 				tag = '7'
// 			}
// 		}

// 		// Sandboxes and VMs
// 		ruled.client.append_rule {
// 			id         = 'sandbox',
// 			rule_any   = {
// 				class = {
// 					'VirtualBox Manage',
// 					'VirtualBox Machine'
// 				}
// 			},
// 			properties = {
// 				tag = '8'
// 			}
// 		}

// 		// IDEs and Tools
// 		ruled.client.append_rule {
// 			id         = 'ide',
// 			rule_any   = {
// 				class = {
// 					'Oomox',
// 					'Unity',
// 					'UnityHub',
// 					'jetbrains-studio',
// 					'Ettercap'
// 				}
// 			},
// 			properties = {
// 				tag = '9',
// 				skip_decoration = true
// 			}
// 		}

// 		// Image viewers
// 		ruled.client.append_rule {
// 			id        = 'image_viewers',
// 			rule_any  = {
// 				class    = {
// 					'feh',
// 					'Pqiv',
// 					'Sxiv'
// 				},
// 			},
// 			properties = {
// 				titlebars_enabled = true,
// 				skip_decoration = true,
// 				floating = true,
// 				ontop = false,
// 				placement = awful.placement.centered
// 			}
// 		}

// 		// Discord updater
// 		ruled.client.append_rule {
// 			id        = 'discord_updater',
// 			rule_any  = {
// 				name = {'Discord Updater'}
// 			},
// 			properties = {
// 				round_corners = false,
// 				skip_decoration = true,
// 				titlebars_enabled = false,
// 				floating = true,
// 				ontop = true,
// 				placement = awful.placement.centered
// 			}
// 		}

// 		// Floating
// 		ruled.client.append_rule {
// 			id       = 'floating',
// 			rule_any = {
// 				instance    = {
// 					'file_progress',
// 					'Popup',
// 					'nm-connection-editor',
// 				},
// 				class = {
// 					'scrcpy' ,
// 					'Mugshot',
// 					'Pulseeffects'
// 				}
// 			},
// 			properties = {
// 				titlebars_enabled = true,
// 				skip_decoration = true,
// 				ontop = true,
// 				floating = true,
// 				focus = awful.client.focus.filter,
// 				raise = true,
// 				keys = client_keys,
// 				buttons = client_buttons,
// 				placement = awful.placement.centered
// 			}
// 		}

// 	end
// )

// // Normally we'd do this with a rule, but some program like spotify doesn't set its class or name
// // until after it starts up, so we need to catch that signal.

// // If the application is fullscreen in its settings, make sure to set `c.fullscreen = false` first
// // before moving to the desired tag or else the tag where the program spawn will cause panels to hide.
// // After moving the program to specified tag you can set `c.fullscreen = true` now

// client.connect_signal(
// 	'property::class',
// 	function(c)
// 		if c.class == 'Spotify' then
// 			local window_mode = false

// 			// Check if fullscreen or window mode
// 			if c.fullscreen then
// 				window_mode = false
// 				c.fullscreen = false
// 			else
// 				window_mode = true
// 			end

// 			// Check if Spotify is already open
// 			local stk = function (c)
// 				return ruled.client.match(c, { class = 'Spotify' })
// 			end

// 			local stk_count = 0
// 			for c in awful.client.iterate(stk) do
// 				stk_count = stk_count + 1
// 			end

// 			// If Spotify is already open, don't open a new instance
// 			if stk_count > 1 then
// 				c:kill()
// 				// Switch to previous instance
// 				for c in awful.client.iterate(stk) do
// 					c:jump_to(false)
// 				end
// 			else
// 				// Move the instance to specified tag on this screen
// 				local t = awful.tag.find_by_name(awful.screen.focused(), '6')
// 				c:move_to_tag(t)
// 				t:view_only()

// 				// Fullscreen mode if not window mode
// 				if not window_mode then
// 					c.fullscreen = true
// 				else
// 					c.floating = true
// 				end
// 			end
// 		end
// 	end
// )
