// /** @noSelfInFile */
/** @noResolution */

declare module 'ruled' {
  import { Table } from 'gears';
  import { Notification } from 'naughty';

  interface NotificationRuled {
    connect_signal: {
      (this: void, name: 'request::rules', callback: () => void): void;
    };

    remove_rule_source: (this: void, name: string) => unknown;

    apply: (this: void, n: Notification) => unknown;

    append_rule: (this: void, rule: Table) => unknown;

    append_rules: (this: void, rule: Table) => unknown;

    remove_rule: (this: void, rule: Table) => unknown;
  }

  export const notification: NotificationRuled;
}
