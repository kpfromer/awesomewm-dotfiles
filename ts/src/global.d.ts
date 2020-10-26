/** @noResolution */

import {Client, Screen, Tag} from 'awful';
import {Table} from 'gears';

declare global {
  export const awesome: any;
  export const client: Client;
  // TODO:
  export const mouse: any;
  export const root: {
    keys: (this: void, keys: any) => void;
    buttons: (this: void, butons: Table) => void;
  };

  export const tag: {
    connect_signal: (
      this: void,
      type: string,
      func: (tag: Tag) => void
    ) => void;
  };

  export const screen: {
    connect_signal: (
      this: void,
      type: string,
      func: (screen: Screen) => void
    ) => void;
  };
}
