/** @noSelfInFile */
/** @noResolution */

declare module 'naughty' {
  import {GearsShape, Table} from 'gears';
  import {Screen} from 'awful';

  // todo:
  interface NotificationProps {
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
    timeout: number;
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
    screen: Screen;
    shape: GearsShape;
    widget_template: Widget;
  };
  type Box = (options: Partial<BoxProps>) => Widget;

  interface Layout {
    box: Box;
  }

  export const layout: Layout;
}
