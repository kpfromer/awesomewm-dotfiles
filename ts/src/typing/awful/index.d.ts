/** @noSelfInFile */
/** @noResolution */

declare module 'awful' {
  import {GearsShapeFunction, Table} from 'gears';

  interface Util {
    shell: string;
  }

  export let util: Util;

  // TODO:
  export type RuleBody = Table;
  // TODO:
  export interface Rule {
    id?: string;
    rule_any?: RuleBody | RuleBody[];
    rule?: RuleBody | RuleBody[];
    // TODO:
    properties: Table;
  }

  interface Rules {
    // TODO:
    rules: Rule[];
  }

  export let rules: Rules;

  /**
   * https://awesomewm.org/doc/api/classes/awful.button.html
   */
  export function button(
    mod: string[],
    button: number,
    press: (client: Client) => void,
    release?: (client: Client) => void
  ): Table;

  interface ClientProps {
    /* The X window id.*/
    window: string;

    /* The client title.*/
    name: string;

    /* True if the client does not want to be in taskbar.*/
    skip_taskbar: boolean;

    /* The window type.*/
    type: string;

    /* The client class.*/
    class: string;

    /* The client instance.*/
    instance: string;

    /* The client PID, if available.*/
    pid: number;

    /* The window role, if available.*/
    role: string;

    /* The machine client is running on.*/
    machine: string;

    // /* The client name when iconified.*/
    // icon_name: Surface,

    // /* The client icon as a surface.*/
    // icon: Table,

    /* The available sizes of client icons.*/
    icon_sizes: Screen;

    /* Client screen.*/
    screen: Screen;

    /* Define if the client must be hidden, i.e.*/
    hidden: boolean;

    /* Define it the client must be iconify, i.e.*/
    minimized: boolean;

    /* The client border width.*/
    border_width: number;

    // /* The client border color.*/
    // todo: gear.color
    border_color: string;

    /* The client urgent state.*/
    urgent: boolean;

    // /* A cairo surface for the client window content.*/
    // content: Surface;

    /* The client opacity.*/
    opacity: number;

    /* The client is on top of every other windows.*/
    ontop: boolean;

    /* The client is above normal windows.*/
    above: boolean;

    /* The client is below normal windows.*/
    below: boolean;

    /* The client is fullscreen or not.*/
    fullscreen: boolean;

    /* The client is maximized (horizontally and vertically) or not.*/
    maximized: boolean;

    /* The client is maximized horizontally or not.*/
    maximized_horizontal: boolean;

    /* The client is maximized vertically or not.*/
    maximized_vertical: boolean;

    // /* The client the window is transient for.*/
    // transient_for: Client;

    // /* Window identification unique to a group of windows.*/
    // group_window: Client;

    // /* Identification unique to windows spawned by the same command.*/
    // leader_window: Client;

    // /* A table with size hints of the client.*/
    size_hints: Table;

    // /* The motif WM hints of the client.*/
    // motif_wm_hints: Table;

    /* Set the client sticky, i.e.*/
    sticky: boolean;

    /* Indicate if the client is modal.*/
    modal: boolean;

    /* True if the client can receive the input focus.*/
    focusable: boolean;

    // /* The client’s bounding shape as set by awesome as a (native) cairo surface.*/
    // shape_bounding: Surface;

    // /* The client’s clip shape as set by awesome as a (native) cairo surface.*/
    // shape_clip: Surface;

    // /* The client’s input shape as set by awesome as a (native) cairo surface.*/
    // shape_input: Surface;

    // /* The client’s bounding shape as set by the program as a (native) cairo surface.*/
    // client_shape_bounding: Surface;

    // /* The client’s clip shape as set by the program as a (native) cairo surface.*/
    // client_shape_clip: Surface;

    /* The FreeDesktop StartId.*/
    startup_id: string;

    /* If the client that this object refers to is still managed by awesome.*/
    valid: boolean;

    // /* The first tag of the client.*/
    // first_tag: Tag;

    /* If a client is marked or not.*/
    marked: boolean;

    /* Return if a client has a fixed size or not.*/
    is_fixed: boolean;

    /* Is the client immobilized */
    immobilized: boolean;

    /* The client floating state.*/
    floating: boolean;

    /* The x coordinates.*/
    x: number;

    /* The y coordinates.*/
    y: number;

    /* The width of the client.*/
    width: number;

    /* The height of the client.*/
    height: number;

    /* If the client is dockable.*/
    dockable: boolean;

    /* If the client requests not to be decorated with a titlebar.*/
    requests_no_titlebar: boolean;

    // /* Set the client shape.*/
    shape: GearsShapeFunction;

    focus: Client & {
      filter: (client: Client) => Client | undefined;
    };

    // CUSTOM:
    round_corners: boolean;
  }

  interface ClientFunctions {
    emit_signal: (this: any, name: string, ...args: any[]) => void;
    kill: (this: any) => void;
    raise: (this: any) => void;
    swap: (this: any, client: Client) => void;
    move_to_screen: (this: any, screen?: Screen) => void;
    /**
     * Connect to a signal.
     *
     * https://awesomewm.org/doc/api/classes/client.html#client:connect_signal
     */
    connect_signal: (
      this: void,
      // this: any,
      name: string,
      cb: (client: Client) => void
    ) => void;
    geometry: (this: any, geo?: Table) => Table;
    move_to_tag: (this: any, target: Tag) => void;

    getmaster: () => Client;
  }

  interface Swap {
    bydirection: (
      this: void,
      dir: string,
      client?: Client,
      stacked?: boolean
    ) => unknown;

    global_bydirection: (this: void, dir: unknown, sel: Client) => unknown;

    byidx: (this: void, i: unknown, client?: Client) => unknown;
  }

  interface Focus {
    // history: History;

    byidx: (this: void, index: number, client?: Client) => unknown;

    filter: (this: void, c: Client) => unknown;

    bydirection: (
      this: void,
      dir: string,
      client?: Client,
      stacked?: boolean
    ) => unknown;

    global_bydirection: (
      this: void,
      dir: unknown,
      client?: Client,
      stacked?: boolean
    ) => unknown;
  }

  type Client = {
    swap: Swap;
    focus: Focus;
    /**
     * @noSelf
     */
    restore: (screen?: Screen) => Client;
  } & ClientProps &
    ClientFunctions;

  export const client: Client;

  interface MouseClientFunctions {
    resize: (this: void, client: Client, corner?: string, args?: Table) => void;
    move: (this: void, client: Client, snap?: any) => void;
  }

  type MouseClient = MouseClientFunctions;

  interface MouseProps {
    client: MouseClient;
  }
  interface MouseFunctions {}

  type Mouse = MouseProps & MouseFunctions;

  /**
   * https://awesomewm.org/doc/api/libraries/mouse.html
   */
  export const mouse: Mouse;

  /**
   * https://awesomewm.org/doc/api/libraries/awful.key.html
   */
  export function key(
    mod: string[],
    key: string,
    press: (client: Client) => void,
    release: (client: Client) => void,
    /** This is required! */
    data: Table<any>
  ): Table;

  interface ScreenProps {
    tags: Table;
    dpi: number;
  }
  interface ScreenFunctions {
    preferred: (this: void, client?: Client) => Screen;

    getbycoord: (this: void, x: number, y: number) => unknown;

    focus: (this: void, screen?: Screen) => unknown;

    focus_bydirection: (this: void, dir: unknown, screen: unknown) => unknown;

    focus_relative: (this: void, offset: number) => unknown;

    focused: (this: void, args?: {client: boolean; mouse: boolean}) => Screen;

    connect_for_each_screen: (this: void, func: {screen: Screen}) => unknown;
  }

  export type Screen = ScreenProps & ScreenFunctions;

  export const screen: Screen;

  interface PlacementProps {}

  type Drawable = any;

  /**
   * @noSelf
   */
  interface PlacementFunctions {
    centered: (drawable: Drawable, args?: Table) => Table;
    no_offscreen: (client: Client, args?: {screen: number}) => Table;
  }

  export type Placement = PlacementProps & PlacementFunctions;

  /**
   * https://awesomewm.org/doc/api/classes/client.html#
   */
  export const placement: Placement;

  interface TagProps {
    name: string;
    selected: boolean;
    activated: boolean;
    index: number;
    screen: Screen;
    master_width_factor: number;

    layout: string;
    layouts: Table<string>;

    volatile: boolean;
    gap: number;
    gap_single_client: boolean;
    master_fill_policy: string;
    master_count: number;
    icon: string;
    column_count: number;

    // custom
    icon_only: boolean;
    default_app: string;
    type: string;
  }

  interface TagFunctions {
    clients: (this: any) => Table<Client>;

    add: (this: void, name: string, props: Partial<TagProps>) => Tag;
    /**
     * Add a signal to all attached tags and all tags that will be attached in the future. When a tag is detached from the screen, its signal is removed.
     * @param screen The screen concerned, or all if nil.
     */
    attached_connect_signal: (
      this: void,
      screen: Screen | null,
      signal?: string,
      callback?: (screen: Screen) => void
    ) => void;

    find_fallback: (this: void, screen: unknown, invalids: unknown) => unknown;

    incmwfact: (this: void, add: unknown, t: unknown) => unknown;

    incgap: (this: void, add: unknown, t: unknown) => unknown;

    togglemfpol: (this: void, t: Tag) => unknown;

    incnmaster: (
      this: void,
      add: unknown,
      t: unknown,
      sensible: boolean
    ) => unknown;

    incncol: (
      this: void,
      add: unknown,
      t: unknown,
      sensible: boolean
    ) => unknown;

    viewnone: (this: void, screen?: Screen | number) => unknown;

    viewidx: (this: void, i: unknown, screen: unknown) => unknown;

    viewnext: (this: void, screen?: Screen) => unknown;

    viewprev: (this: void, screen?: Screen) => unknown;

    viewmore: (
      this: void,
      tags: unknown,
      screen: unknown,
      maximum: number
    ) => unknown;

    viewtoggle: (this: void, t: Tag) => unknown;
  }

  type Tag = TagProps & TagFunctions;

  export const tag: Tag;

  export interface ClientLayouts<T = string> {
    corner: {
      nw: T;
      ne: T;
      sw: T;
      se: T;
    };
    magnifier: T;
    max:
      | string
      | {
          fullscreen: T;
        };
    spiral: {
      dwindle: T;
      name: T;
    };
    tile: {
      left: T;
      right: T;
      bottom: T;
      top: T;
    };
    floating: T;
  }

  interface LayoutFunctions {
    append_default_layouts: (this: void, layouts: string[]) => void;
    inc: (
      this: void,
      relativeIndex: number,
      screen?: Screen,
      layouts?: unknown
    ) => void;
  }

  type Layout = LayoutFunctions & {
    suit: ClientLayouts;
  };

  export const layout: Layout;

  interface SpawnFunctions {
    (this: void, command: string, rules?: boolean, callback?: () => void): void;
    /**
     * Call spawn.easy_async with a shell. This calls cmd with $SHELL -c (via awful.util.shell).
     *
     * https://awesomewm.org/doc/api/libraries/awful.spawn.html#easy_async_with_shell
     */
    easy_async_with_shell: (
      this: void,
      command: string,
      callback: (
        stdout: string,
        stderr: string,
        exitReason: string,
        exitCode: number
      ) => void
    ) => void;
  }

  type Spawn = SpawnFunctions;

  export const spawn: Spawn;

  /**
   * @noSelf
   */
  interface Widget {
    /**
     * @noSelf
     */
    titlewidget: (c: Client) => unknown;
    /**
     * @noSelf
     */
    iconwidget: (c: Client) => unknown;
    /**
     * @noSelf
     */
    button: (
      c: Client,
      name: string,
      selector: unknown,
      action: unknown
    ) => unknown;
    /**
     * @noSelf
     */
    floatingbutton: (c: Client) => unknown;
    /**
     * @noSelf
     */
    maximizedbutton: (c: Client) => unknown;
    /**
     * @noSelf
     */
    minimizebutton: (c: Client) => unknown;
    /**
     * @noSelf
     */
    closebutton: (c: Client) => unknown;
    /**
     * @noSelf
     */
    ontopbutton: (c: Client) => unknown;
    /**
     * @noSelf
     */
    stickybutton: (c: Client) => unknown;
  }

  export interface Titlebar {
    // widget: Widget;
    setup: (this: any, args: unknown) => unknown;
    show: (this: any, client: Client, position?: string) => unknown;
    hide: (this: any, client: Client, position?: string) => unknown;
    toggle: (this: any, client: Client, position?: string) => unknown;
  }

  /**
   * @noSelf
   */
  export const titlebar: {
    (
      c: Client,
      args: Partial<{
        size: number;
        position: string;
        bg_normal: string;
        bg_focus: string;
        bgimage_normal: string;
        bgimage_focus: string;
        fg_normal: string;
        fg_focus: string;
        font: string;
        bg: string;
      }>
    ): Titlebar;
    widget: Widget;
  };
}

/** @noResolution */
declare module 'awful.hotkeys_popup' {
  import {Client, Screen} from 'awful';
  interface Widget {
    show_help: (this: void, client?: Client, screen?: Screen) => void;
  }

  export const widget: Widget;
}
