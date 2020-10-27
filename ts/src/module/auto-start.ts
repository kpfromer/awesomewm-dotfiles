import * as awful from 'awful';
import * as beautiful from 'beautiful';
import config from '../configuration/config';
import {log} from '../helper/log';

const run_once = function (this: void, command: string) {
  const firstSpace = command.indexOf(' ');

  // converts something like "command --args" -> "command"
  const program = firstSpace >= 0 ? command.substring(0, firstSpace) : command;

  awful.spawn.easy_async_with_shell(
    `pgrep -u $USER -x ${program} > /dev/null || (${command})`,
    // string.format('pgrep -u $USER -x %s > /dev/null || (%s)', findMe, cmd),
    function (stdout, stderr) {
      if (!stderr || stderr === '' || !config.debug) {
        return;
      }
      // message: stderr, // todo: stderr.replaceAll('%\n', ''),
      log(stderr, {
        app_name: 'Start-up Applications',
        title: '<b>Oof! Error detected when starting an application!</b>',
        timeout: 20,
        icon: beautiful.awesome_icon,
      });
    }
  );
};
for (const app of config.apps.startUp) {
  run_once(app);
}
