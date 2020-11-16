/** @noSelfInFile */
/** @noResolution */

declare module 'naughty' {
  import {GearsShape, Table} from 'gears';
  import {ScreenInstance} from 'awful';

  // todo:
  interface NotificationProps {
    urgency?: 'critical' | 'normal' | 'low';
    shape?: GearsShape;
    opacity?: number;
    margin?: number;
    run?: () => void;
    destory?: () => void;
    preset?: Table;
    callback?: () => void;
    actions?: Table;
    ignore_suspend?: boolean;

    // CUSTOM:
    app_name: string;
    title: string;
    message: string;
    timeout?: number;
    icon: string;
  }

  interface NotificationFunctions {}

  type Notification = NotificationProps & NotificationFunctions;

  /**
   *
   * https://elv13.github.io/core_components/naughty.notification.html#naughty.notification
   */
  export const notification: (
    args: NotificationProps,
    opt?: string
  ) => Notification | undefined;

  export const notify: (args: NotificationProps) => Notification | undefined;

  export type Widget = Table;
  /**
   * TODO
   * https://awesomewm.org/apidoc/popups_and_bars/naughty.layout.box.html#naughty.layout.box
   */
  type BoxProps = {
    notification: any;
    type: string;
    screen: ScreenInstance;
    shape: unknown;
    // shape: GearsShape;
    widget_template: Widget;
  };
  type Box = (options: Partial<BoxProps>) => Widget;

  interface Layout {
    box: Box;
  }

  export const layout: Layout;

  export const config: {
    padding: number;
    spacing: number;
    icon_dirs: Table;
    icon_formats: Table;
    notify_callback: (this: void) => void;
    presets: Table;
    defaults: Table;
  };

  export const connect_signal: {
    (
      this: void,
      name: 'request::display_error',
      callback: (message: string, startup: boolean) => void
    ): void;
    (
      this: void,
      name: 'request::icon',
      callback: (
        n: Notification,
        context: string,
        hits: {app_icon: string; path: string; image: string}
      ) => void
    ): void;
    (
      this: void,
      name: 'request::display',
      callback: (notification: Table, context: string) => void
    ): void;
  };

  interface NaughtyWidget {
    icon: (this: void) => unknown;
    title: (this: void) => unknown;
    message: (this: void) => unknown;
  }

  export const widget: NaughtyWidget;

  interface NaughtyList {
    actions: unknown;
  }

  export const list: NaughtyList;
}
