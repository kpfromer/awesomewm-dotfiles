/**
 * @noSelf
 * @noResolution
 */
declare module 'gears' {
  import { ScreenInstance } from 'awful';

  export type GearsShapeFunction = (
    this: void,
    cairoContent: any,
    width: number,
    height: number,
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
    rectangle: (this: void, cr: any, width: number, height: number) => void;

    /**
     * Add a rounded rectangle to the current path. Note: If the radius is bigger than either half side, it will be reduced.
     *
     * https://awesomewm.org/doc/api/libraries/gears.shape.html#module.rounded_rect
     */
    rounded_rect: (this: void, cr: any, width: number, height: number, radius?: number) => void;

    /**
     * A rounded rect with only some of the corners rounded.
     *
     * @param cr A cairo context
     * @param width number The shape width
     * @param height number The shape height
     * @param tl boolean If the top left corner is rounded
     * @param tr boolean If the top right corner is rounded
     * @param br boolean If the bottom right corner is rounded
     * @param bl boolean If the bottom left corner is rounded
     * @param rad number The corner radius
     *
     * https://awesomewm.org/doc/api/libraries/gears.shape.html#module.partially_rounded_rect
     */
    partially_rounded_rect: (
      this: void,
      cr: any,
      width: number,
      height: number,
      tl?: boolean,
      tr?: boolean,
      br?: boolean,
      bl?: boolean,
      rad?: number,
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

  export type Table<V = any> = { [key: string]: V };

  /**
   * @noSelf
   * https://awesomewm.org/doc/api/libraries/gears.table.html
   */
  interface NoSelfGearsTable {
    join: (...tables: Table[]) => Table[];
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
    /**
     * @param timeout Timeout in seconds (e.g. 1.5).
     * @param autostart Automatically start the timer. (default false)
     * @param call_now Call the callback at timer creation. (default false)
     * @param callback Callback function to connect to the "timeout" signal. (default nil)
     * @param single_shot Run only once then stop. (default false)
     */
    (args: {
      timeout: number;
      autostart?: boolean;
      call_now?: boolean;
      callback?: () => void;
      single_shot?: boolean;
    }): Timer;

    start_new: (this: void, timeout: number, callback: () => void) => Timer;

    weak_start_new: (this: void, timeout: number, callback: () => void) => Timer;

    // 'delayed_call': (this: void, callback: function,...: unknown) => unknown;
  };

  interface Surface {
    load_uncached: (this: void, surface: string) => undefined | string;
  }

  export const surface: Surface;

  interface Wallpaper {
    /**
     * https://awesomewm.org/apidoc/utility_libraries/gears.wallpaper.html#maximized
     */
    maximized: (
      surf: string,
      s?: ScreenInstance,
      ignore_aspect?: boolean,
      offset?: { x: number; y: number },
    ) => void;
  }

  export const wallpaper: Wallpaper;
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
  import { Table } from 'gears';

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
