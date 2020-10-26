import * as awful from 'awful';
import * as naughty from 'naughty';
import * as beautiful from 'beautiful';
import config from '../configuration/config';

const debug_mode = config.module?.auto_start?.debug_mode ?? false;

const run_once = function (this: void, cmd: string) {
  let findme = cmd;
  const firstspace = cmd.indexOf(' ');
  if (firstspace) {
    findme = cmd.substring(0, firstspace - 1);
  }

  awful.spawn.easy_async_with_shell(
    string.format('pgrep -u $USER -x %s > /dev/null || (%s)', findme, cmd),
    function (stdout, stderr) {
      if (!stderr || stderr === '' || !debug_mode) {
        return;
      }

      naughty.notification({
        app_name: 'Start-up Applications',
        title: '<b>Oof! Error detected when starting an application!</b>',
        message: stderr, // todo: stderr.replaceAll('%\n', ''),
        timeout: 20,
        icon: beautiful.awesome_icon,
      });
    }
  );
};
for (const app of config.apps.startUp) {
  run_once(app);
}
