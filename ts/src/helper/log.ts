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

function dump(this: void, table: object, indent = 0): string {
  const spacing = string.rep('  ', indent);
  let result = '';
  for (const [key, value] of Object.entries(table)) {
    result += spacing;

    if (type(value) === 'table') {
      result += `${key}:\n`;
      result += dump(value, indent + 1);
    } else {
      result += `${key}: ${value}\n`;
    }
  }

  return result;
}

export const dumpData = dump;

export function logToFile(
  this: void,
  value: any,
  location = '/tmp/awesome.txt'
): void {
  const text = type(value) === 'table' ? dump(value) : value;

  awful.spawn.easy_async_with_shell(
    `echo "${text.replace('"', '\\"')}" > ${location}`,
    () => {}
  );
}
