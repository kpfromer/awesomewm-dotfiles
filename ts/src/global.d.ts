/** @noResolution */

import {AwesomeStatic, ClientStatic, ScreenStatic, TagStatic} from 'awful';
import {Table} from 'gears';

declare global {
  export const awesome: AwesomeStatic;
  export const client: ClientStatic;
  export const screen: ScreenStatic;
  export const tag: TagStatic;
  // TODO:
  export const mouse: any;
  export const root: {
    keys: (this: void, keys: any) => void;
    buttons: (this: void, butons: Table) => void;
  };

  /** @forRange */
  function forRange(start: number, limit: number, step?: number): number[];
}
