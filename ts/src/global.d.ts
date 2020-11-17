/** @noResolution */

import {
  AwesomeStatic,
  ClientStatic,
  Root,
  ScreenStatic,
  TagStatic,
} from 'awful';

declare global {
  export const awesome: AwesomeStatic;
  export const client: ClientStatic;
  export const screen: ScreenStatic;
  export const tag: TagStatic;
  export const root: Root;
  // TODO:
  export const mouse: any;

  /** @forRange */
  function forRange(start: number, limit: number, step?: number): number[];
}
