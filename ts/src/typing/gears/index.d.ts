/**
 * @noSelf
 * @noResolution
 */
declare module 'gears' {
  export type GearsShapeFunction = (
    this: void,
    cairoContent: any,
    width: number,
    height: number
  ) => void;

  /**
   * @noSelf
   * https://awesomewm.org/doc/api/libraries/gears.shape.html#module.rounded_rect
   */
  interface NoSelfGearsShape {
    /**
     * A simple rectangle.
     *
     * https://awesomewm.org/doc/api/libraries/gears.shape.html#module.rectangle
     */
    rectangle: (cr: any, width: number, height: number) => void;

    /**
     * Add a rounded rectangle to the current path. Note: If the radius is bigger than either half side, it will be reduced.
     *
     * https://awesomewm.org/doc/api/libraries/gears.shape.html#module.rounded_rect
     */
    rounded_rect: (
      cr: any,
      width: number,
      height: number,
      radius: number
    ) => void;
  }

  export type GearsShape = NoSelfGearsShape;

  export const shape: NoSelfGearsShape;

  // /** @luaTable */
  // export class Table<K extends {} = {}, V = any> {
  //   readonly length: number;
  //   set(key: K, value: V | undefined): void;
  //   get(key: K): V | undefined;
  // }

  export type Table<V = any> = {[key: string]: V};

  /**
   * @noSelf
   * https://awesomewm.org/doc/api/libraries/gears.table.html
   */
  interface NoSelfGearsTable {
    join: (...tables: Table[]) => Table;
  }

  export type GearsTable = NoSelfGearsTable;

  export const table: GearsTable;

  // interface Gears {
  //   /**
  //    * @noSelf
  //    */
  //   timer: (args: {
  //     timeout: number;
  //     autostart: boolean;
  //     call_now: boolean;
  //     callback: Function;
  //     single_shot: boolean;
  //   }) => unknown;
  // }
  interface Timer {
    /**
     * Stop the timer.
     */
    stop: () => void;
    /**
     * Start the timer.
     */
    start: () => void;
    /**
     * Restart the timer. This is equivalent to stopping the timer if it is running and then starting it.
     */
    again: () => void;
  }

  export const timer: {
    start_new: (this: void, timeout: number, callback: () => void) => Timer;

    weak_start_new: (
      this: void,
      timeout: number,
      callback: () => void
    ) => Timer;

    // 'delayed_call': (this: void, callback: function,...: unknown) => unknown;
  };
}

/**
 * @noSelf
 */
/** @noResolution */
declare module 'gears.filesystem' {
  /**
   * Get the path to the user’s config dir. This is the directory containing the configuration file (“rc.lua”).
   *
   * @returns A string with the requested path with a slash at the end.
   *
   * https://awesomewm.org/doc/api/libraries/gears.filesystem.html#get_configuration_dir
   */
  export const get_configuration_dir: () => string;
}

/**
 * @noSelf
 */
/** @noResolution */
declare module 'gears.table' {
  import {Table} from 'gears';

  // interface GTable {
  // /**
  //  * @noSelf
  //  */
  // find_keys: (
  //   t: Table,
  //   matcher: function,
  //   ordered: boolean,
  //   max: number
  // ) => unknown;
  // /**
  //  * @noSelf
  //  */
  // find_first_key: (t: Table, matcher: function, ordered: boolean) => unknown;
  // }

  /**
   * @noSelf
   */
  export const join: (...tables: Table[]) => Table;
  /**
   * @noSelf
   */
  export const crush: (t: Table, set: Table, raw?: boolean) => Table;
  /**
   * @noSelf
   */
  export const from_sparse: (t: Table) => unknown;
  /**
   * @noSelf
   */
  export const hasitem: (t: Table, item: unknown) => unknown;

  /**
   * @noSelf
   */
  export const keys: (t: Table) => unknown;
  /**
   * @noSelf
   */
  export const keys_filter: (t: Table, ...rest: string[]) => unknown;
  /**
   * @noSelf
   */
  export const reverse: (t: Table) => unknown;
  // /**
  //  * @noSelf
  //  */
  // clone: (t: Table, deep: bool) => unknown;
  // /**
  //  * @noSelf
  //  */
  // iterate: (t: Table, filter: func, start: int) => unknown;
  /**
   * @noSelf
   */
  export const merge: (t: Table, set: Table) => unknown;
  // /**
  //  * @noSelf
  //  */
  // map: (f: function, tbl: Table) => unknown;
}
