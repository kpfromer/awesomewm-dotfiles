import Awesome from 'awesome/jsx';
import * as awful from 'awful';
import * as wibox from 'wibox';
import {ButtonEvents, convertButtonEventsToAwesomeButtons} from './types';

export const TagList: JSX.FunctionComponent<
  Omit<awful.TagListWidgetProps, 'filter' | 'buttons'> &
    ButtonEvents<awful.TagInstance> & {
      all?: boolean;
      selected?: boolean;
      noempty?: boolean;
      // Template for the tag
      tag?: any;
    }
> = ({
  screen,
  all = false,
  selected = false,
  noempty = false,
  tag,

  // Events
  onLeftClick,
  onMiddleClick,
  onRightClick,
  onScrollDown,
  onScrollUp,
}) => {
  let filter: (this: void, tag: awful.TagInstance) => void =
    awful.widget.taglist.filter.all;

  if (all) {
    filter = awful.widget.taglist.filter.all;
  } else if (selected) {
    filter = awful.widget.taglist.filter.selected;
  } else if (noempty) {
    filter = awful.widget.taglist.filter.noempty;
  }

  const options: awful.TagListWidgetProps = {
    screen,
    filter,
    buttons: convertButtonEventsToAwesomeButtons({
      onLeftClick,
      onMiddleClick,
      onRightClick,
      onScrollDown,
      onScrollUp,
    }),
  };

  if (tag) {
    options.widget_template = tag;
  }

  return awful.widget.taglist(options) as any;
};

export const TaskList: JSX.FunctionComponent<
  Omit<awful.TaskListWidgetProps, 'filter' | 'buttons'> &
    ButtonEvents<awful.ClientInstance> & {
      allscreen?: boolean;
      alltags?: boolean;
      currenttags?: boolean;
      minimizedcurrenttags?: boolean;
      focused?: boolean;
      task?: any;
    }
> = ({
  screen,
  allscreen = false,
  alltags = false,
  currenttags = false,
  minimizedcurrenttags = false,
  focused = false,
  task,

  // Events
  onLeftClick,
  onMiddleClick,
  onRightClick,
  onScrollDown,
  onScrollUp,
}) => {
  let filter: (
    this: void,
    client: awful.ClientInstance,
    screen: awful.ScreenInstance
  ) => void = awful.widget.tasklist.filter.currenttags;

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

  const options: awful.TaskListWidgetProps = {
    screen,
    filter,
    buttons: convertButtonEventsToAwesomeButtons({
      onLeftClick,
      onMiddleClick,
      onRightClick,
      onScrollDown,
      onScrollUp,
    }),
  };

  if (task) {
    options.widget_template = task;
  }

  return awful.widget.tasklist(options) as any;
};

export const SystemTray: JSX.FunctionComponent<wibox.SystrayWidgetProps> = props => {
  return <base {...props} widget={wibox.widget.systray} />;
};

export const TextClock: JSX.FunctionComponent<wibox.TextClockWidgetProps> = props => {
  return wibox.widget(<base {...props} widget={wibox.widget.textclock} />);
};
