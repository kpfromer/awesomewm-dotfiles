/** @noSelfInFile */
/** @noResolution */

declare module 'naughty' {
  import {NoSelfGearsShape, Table} from 'gears';

  // todo:
  interface NotificationProps {
    shape?: NoSelfGearsShape;
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
   * https://elv13.github.io/core_components/naughty.notification.html#naughty.notification
   */
  export const notification: (
    args: NotificationProps,
    opt?: string
  ) => Notification | undefined;
}
