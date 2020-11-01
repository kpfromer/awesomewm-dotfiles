/**
 * @noSelf
 * @noResolution
 */
declare module 'beautiful' {
  // function log(): string;

  /**
   * https://awesomewm.org/doc/api/libraries/beautiful.html#init
   * Function that initializes the theme settings. Should be run at the beginning of the awesome configuration file (normally rc.lua).
   */
  function init(config: any): void;

  /**
   * @noSelf
   */
  interface GTK {
    /**
     * TODO: better typing
     * https://awesomewm.org/doc/api/libraries/beautiful.gtk.html
     */
    get_theme_variables: () => {[key: string]: string};
  }
  export const gtk: GTK;

  /**
   * @noSelf
   */
  interface XResources {
    apply_dpi: (dpi: number) => number;
    get_current_theme: () => {[key: string]: string};
  }
  export const xresources: XResources;

  export const border_focus: string;
  export const border_normal: string;
  export const border_width: number;
  export const border_marked: string;

  // CUSTOM types
  export const useless_gap: number;
  export const client_radius: number;

  export const awesome_icon: string;

  export const titlebar_size: number;
}
