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
}

/**
 * @noSelf
 */
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
