import * as awful from 'awful';
import * as beautiful from 'beautiful';
import { notification, NotificationProps } from 'naughty';

export const log = function (this: void, message: string, opts?: Partial<NotificationProps>): void {
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

function dump(this: void, table: Record<string, unknown>, indent = 0): string {
  const spacing = string.rep('  ', indent);
  let result = '';
  for (const [key, value] of Object.entries(table)) {
    result += spacing;

    if (type(value) === 'table') {
      result += `${key}:\n`;
      result += dump(value as Record<string, unknown>, indent + 1);
    } else {
      result += `${key}: ${value}\n`;
    }
  }

  return result;
}

export const dumpData = dump;

export function logToFile(this: void, value: any, location = '/tmp/awesome.txt'): void {
  const text = type(value) === 'table' ? dump(value) : value;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  awful.spawn.easy_async_with_shell(`echo "${text.replace('"', '\\"')}" > ${location}`, () => {});
}
