import * as jsxFactory from '../helper/jsx-factory';
import * as awful from 'awful';
import * as beautiful from 'beautiful';
import * as wibox from 'wibox';
import {
  Background,
  Margin,
  Image,
  Layout,
  Text,
} from '../helper/components/base';
const dpi = beautiful.xresources.apply_dpi;

export const TagList: JSX.FunctionComponent<
  Omit<awful.TagListWidgetProps, 'filter'> & {
    all?: boolean;
    selected?: boolean;
    noempty?: boolean;
  }
> = ({screen, buttons, all = false, selected = false, noempty = false}) => {
  let filter: (this: void, tag: awful.Tag) => void =
    awful.widget.taglist.filter.all;

  if (all) {
    filter = awful.widget.taglist.filter.all;
  } else if (selected) {
    filter = awful.widget.taglist.filter.selected;
  } else if (noempty) {
    filter = awful.widget.taglist.filter.noempty;
  }

  return awful.widget.taglist({
    screen,
    filter,
    buttons,

    // update_function: (widget: any, buttons, label, data, objects) => {
    //   for (const [index, object] of Object.entries(objects)) {
    //     const {text, icon} = label(object);

    //     widget.add(<Image image={icon} />);
    //   }
    // },

    // widget_template: <Image id="icon_role" />,
    // widget_template: (
    //   <Background id="background_role">
    //     <Margin left={5} right={5}>
    //       <Layout fixed horizontal>
    //         {{
    //           id: 'index_role',
    //           widget: wibox.widget.textbox,
    //         }}
    //       </Layout>
    //     </Margin>
    //   </Background>
    // ),
    // widget_template: children as any,
    // ...(children === undefined ? {} : {widget_template: children as any}),
  }) as any;
};

export const TaskList: JSX.FunctionComponent<
  Omit<awful.TaskListWidgetProps, 'filter'> & {
    allscreen?: boolean;
    alltags?: boolean;
    currenttags?: boolean;
    minimizedcurrenttags?: boolean;
    focused?: boolean;
  }
> = ({
  screen,
  buttons,
  allscreen = false,
  alltags = false,
  currenttags = false,
  minimizedcurrenttags = false,
  focused = false,
}) => {
  let filter: (this: void, client: awful.Client, screen: awful.Screen) => void =
    awful.widget.tasklist.filter.currenttags;

  if (allscreen) {
    filter = awful.widget.tasklist.filter.allscreen;
  } else if (alltags) {
    filter = awful.widget.tasklist.filter.alltags;
  } else if (currenttags) {
    filter = awful.widget.tasklist.filter.currenttags;
  } else if (minimizedcurrenttags) {
    filter = awful.widget.tasklist.filter.minimizedcurrenttags;
  } else if (focused) {
    filter = awful.widget.tasklist.filter.focused;
  }

  return awful.widget.tasklist({
    screen,
    filter,
    buttons,
  }) as any;
};

export const SystemTray: JSX.FunctionComponent<wibox.SystrayWidgetProps> = props => {
  return <base {...props} widget={wibox.widget.systray} />;
};

export const TextClock: JSX.FunctionComponent<wibox.TextClockWidgetProps> = props => {
  return wibox.widget(<base {...props} widget={wibox.widget.textclock} />);
};
