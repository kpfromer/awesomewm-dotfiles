import {NotificationProps, notification} from 'naughty';
import * as beautiful from 'beautiful';

export const log = function (
  this: void,
  message: string,
  opts?: Partial<NotificationProps>
) {
  const {
    app_name = 'AwesomeWM Log',
    title = '<b>Log from AwesomeWM</b>',
    timeout = 50,
    icon = beautiful.awesome_icon,
  } = opts ?? {};

  notification({
    app_name,
    title,
    timeout,
    icon,
    message,
  });
};
