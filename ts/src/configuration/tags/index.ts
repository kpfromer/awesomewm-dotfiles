import * as awful from 'awful';
import * as beautiful from 'beautiful';
import * as gears from 'gears';
import icons from '../../theme/icons/index';
import config from '../config';

const tags: Partial<awful.TagInstance>[] = [
  {
    icon: icons.web_browser,
    // type: 'internet',
    // default_app: apps.default.browser,
    gap: beautiful.useless_gap,
  },
  {
    icon: icons.development,
    // type: 'code',
    // default_app: apps.default.editor,
    gap: beautiful.useless_gap,
  },
  {
    icon: icons.file_manager,
    // type: 'files',
    // defaultApp: apps.default.files,
    gap: beautiful.useless_gap,
  },
  {
    icon: icons.terminal,
    // type: 'console',
    // default_app: apps.default.terminal,
    gap: beautiful.useless_gap,
  },
  {
    icon: icons.social,
    // type: 'social',
    // default_app: apps.default.social,
    gap: beautiful.useless_gap,
  },
  {
    icon: icons.sandbox,
    // type: 'any',
    // default_app: apps.default.rofi,
    gap: beautiful.useless_gap,
  },
  {
    icon: icons.sandbox,
    // type: 'any',
    // default_app: apps.default.rofi,
    gap: beautiful.useless_gap,
  },
  {
    icon: icons.sandbox,
    // type: 'any',
    // default_app: apps.default.rofi,
    gap: beautiful.useless_gap,
  },
  {
    icon: icons.sandbox,
    // type: 'any',
    // default_app: apps.default.rofi,
    gap: beautiful.useless_gap,
  },
];

tag.connect_signal('request::default_layouts', () => {
  awful.layout.append_default_layouts(config.layouts);
});

screen.connect_signal('request::desktop_decoration', (s) => {
  tags.forEach((tag, index) => {
    awful.tag.add(index.toString(), {
      icon: tag.icon,
      // icon_only: true,
      layout: tag.layout ?? (config.layouts[0] as any),
      gap_single_client: true,
      gap: tag.gap,
      screen: s,
      // default_app: tag.default_app,
      selected: index === 0,
    });
  });
});

tag.connect_signal('property::layout', (tag) => {
  const current_layout = tag.layout;
  // TODO: fixing typing for awful.layout stuffs
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  if (current_layout === awful.layout.suit.max) {
    tag.gap = 0;
    for (const c of Object.values(tag.clients())) {
      if (!c.floating) {
        c.shape = (cr, width, height) => {
          gears.shape.rectangle(cr, width, height);
        };
      } else {
        c.shape = (cr, width, height) => {
          gears.shape.rounded_rect(cr, width, height, beautiful.client_radius);
        };
      }
    }
  } else {
    tag.gap = beautiful.useless_gap;
    for (const c of Object.values(tag.clients())) {
      if (!c.round_corners || c.maximized) {
        c.shape = function (cr, width, height) {
          gears.shape.rectangle(cr, width, height);
        };
      } else {
        c.shape = function (cr, width, height) {
          gears.shape.rounded_rect(cr, width, height, beautiful.client_radius);
        };
      }
    }
  }
});

// awful.tag.attached_connect_signal(s, 'property::selected', function () {
//   let urgent_clients = function (c) {
//     return awful.rules.match(c, {urgent: true});
//   };
//   for (const [c] of awful.ClientInstance .iterate(urgent_clients)) {
//     if (c.first_tag === mouse.screen.selected_tag) {
//       client.focus = c;
//       c.raise();
//     }
//   }
// });
