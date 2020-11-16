/** @noSelfInFile */
/** @noResolution */

declare module 'awful' {
  import {BaseWiboxWidget} from 'wibox';
  import {GearsShape, GearsShapeFunction, Surface, Table} from 'gears';

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
  export function button<R = ClientInstance>(
    mod: string[],
    button: number,
    press: (value: R) => void,
    release?: (value: R) => void
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

    focus: ClientInstance & {
      filter: (client: ClientInstance) => ClientInstance | undefined;
    };

    // CUSTOM:
    round_corners: boolean;

    geometry: Geometry & {
      (this: any, geo?: Partial<Geometry>): Geometry;
    };
  }

  type Geometry = {
    x: number;
    y: number;
    width: number;
    height: number;
  };

  type Direction = 'up' | 'down' | 'left' | 'right';

  export type ClientStatic = {
    /**
     * Get the number of instances.
     */
    instances: (this: void) => number;
    /**
     * Get all clients into a table.
     * @param screen A screen number to filter clients on.
     * @param stacked Return clients in stacking order? (ordered from top to bottom).
     */
    get: (this: void, screen?: Screen, stacked?: boolean) => ClientInstance[];
    /**
     * Disconnect from a signal.
     */
    disconnect_signal: (this: void, name: string, callback: Function) => void;
    /**
     * Emit a signal.
     */
    emit_signal: (this: void, name: string, ...args: any[]) => void;
    /**
     * Connect to a signal.
     */
    connect_signal: (
      this: void,
      name: string,
      callback: (this: void, client: ClientInstance, ...args: any[]) => void
    ) => void;
    /**
     * Get a client by its relative index to another client. If no client is passed, the focused client will be used.
     * @param index The index. Use 1 to get the next, -1 to get the previous.
     * @param sel The client. (optional)
     * @param stacked Use stacking order? (top to bottom) (default false)
     * @returns A client, or nil if no client is available.
     */
    next: (
      this: void,
      index: number,
      sel?: ClientInstance,
      stacked?: boolean
    ) => ClientInstance | undefined;

    swap: {
      /**
       * Swap a client with another client in the given direction.
       * @param dir The direction, can be either "up", "down", "left" or "right".
       * @param client The client. (default focused)
       * @param stacked Use stacking order? (top to bottom) (default false)
       */
      bydirection: (
        this: void,
        dir: Direction,
        client?: ClientInstance,
        stacked?: boolean
      ) => void;
      /**
       * Swap a client with another client in the given direction.
       * Swaps across screens.
       * @param dir The direction, can be either "up", "down", "left" or "right".
       * @param sel The client. (optional)
       */
      global_bydirection: (
        this: void,
        dir: Direction,
        sel: ClientInstance
      ) => void;
      /**
       * Swap a client by its relative index.
       */
      byidx: (this: void, index: number, client?: ClientInstance) => void;
    };

    /**
     * Cycle through the clients to change the focus.
     * This will swap the client from one position to the next in the layout.
     * @param clockwise True to cycle clients clockwise.
     * @param screen The screen.
     * @param stacked Use stacking order? (top to bottom) (default false)
     */
    cycle: (
      this: void,
      clockwise: boolean,
      screen?: Screen,
      stacked?: boolean
    ) => void;

    /**
     * Restore (=unminimize) a random client.
     * @returns The restored client if some client was restored, otherwise nil.
     */
    restore: (this: void, screen: Screen) => ClientInstance | undefined;

    property: {
      /**
       * Set a client property to be persistent across restarts (via X properties).
       * @param prop The property name.
       * @param kind The type (used for register_xproperty). One of "string", "number" or "boolean".
       */
      persist: (this: void, prop: string, kind: string) => void;
    };

    // Layout related functions

    /**
     * Get the master window.
     * @param screen The screen. (default awful.screen.focused())
     */
    getmaster: (this: void, screen?: Screen) => Screen;
    /**
     * Set the client as master: put it at the beginning of other windows.
     * @param client he window to set as master.
     */
    setmaster: (this: void, client: ClientInstance) => Screen;
    /**
     * Set the client as slave: put it at the end of other windows.
     * @param client The window to set as slave.
     */
    setslave: (this: void, client: ClientInstance) => Screen;
    /**
     * Calculate a client’s column number, index in that column, and number of visible clients in this column.
     * @param client The client.
     */
    idx: (this: void, client: ClientInstance) => Screen;
    /**
     * Set the window factor of a client
     * @param wfact the window factor value
     * @param client The client.
     */
    setwfact: (this: void, wfact: number, client: ClientInstance) => Screen;
    /**
     * Change window factor of a client.
     * @param add Amount to increase/decrease the client’s window factor. Should be between -current_window_factor and something close to infinite. The normalisation then ensures that the sum of all factors is 1.
     * @param client The client.
     */
    incwfact: (this: void, add: number, client: ClientInstance) => Screen;

    // TODO:
    // iterate
    // .focus.history.disable_tracking
    // .focus.history.enable_tracking
    // .focus.history.is_enabled

    // See docs for setting focused client
    readonly focus: ClientInstance & {
      /**
       * Filter out window that we do not want handled by focus. This usually means that desktop, dock and splash windows are not registered and cannot get focus.
       * @param client The client.
       * @returns The same client if it’s ok, nil otherwise.
       */
      filter: (
        this: void,
        client: ClientInstance
      ) => ClientInstance | undefined;

      /**
       * Focus a client by its relative index.
       * @param index The index.
       * @param client The client.
       */
      byidx: (this: void, index: number, client?: ClientInstance) => void;

      // filter: (this: void, c: Client) => unknown;

      /**
       * Focus a client by the given direction.
       * @param dir The direction, can be either "up", "down", "left" or "right".
       * @param client The client.
       * @param stacked Use stacking order? (top to bottom) (default false)
       */
      bydirection: (
        this: void,
        dir: Direction,
        client?: ClientInstance,
        stacked?: boolean
      ) => void;

      /**
       * Focus a client by the given direction. Moves across screens.
       * @param dir The direction, can be either “up”, “down”, “left” or “right”.
       * @param client The client. (optional)
       * @param stacked Use stacking order? (top to bottom) (default false)
       */
      global_bydirection: (
        this: void,
        dir: Direction,
        client?: ClientInstance,
        stacked?: boolean
      ) => void;
    };
  };

  export const client: ClientStatic;

  // TODO:
  export type ClientInstance = ClientProps & ClientFunctions;

  // TODO: below

  interface ClientFunctions {
    // TODO: struts

    /**
     * Check if a client is visible on its screen.
     * @returns A boolean value, true if the client is visible, false otherwise.
     */
    isvisible: (this: any) => boolean;

    /**
     * Kill a client.
     * This method can be used to close (kill) a client using the X11 protocol. To use the POSIX way to kill a process, use awesome.kill.
     */
    kill: (this: any) => void;

    /**
     * Swap a client with another one in global client list.
     * @param client The to swap with.
     */
    swap: (this: any, client: ClientInstance) => void;

    /**
     * Access or set the client tags.
     * Use the first_tag field to access the first tag of a client directly.
     * @param tagsTable A table with tags to set, or nil to get the current tags.
     * @returns A table with all tags.
     */
    tags: (this: any, tagsTable?: Tag[]) => Tag[];

    /**
     * Raise a client on top of others which are on the same layer.
     */
    raise: (this: any) => void;

    /**
     * Lower a client on bottom of others which are on the same layer.
     */
    lower: (this: any) => void;

    /**
     * Stop managing a client.
     */
    unmanage: (this: any) => void;

    // TODO: partial?
    /**
     * Return or set client geometry.
     */
    geometry: (this: any, geo: Geometry) => Geometry;

    /**
     * Apply size hints to a size.
     * This method applies the client size hints. The client will be resized according to the size hints as long as size_hints_honor is true. Regardless of the status of size_hints_honor, this method will return the size with the size hints applied.
     * @param width Desired width of client
     * @param height Desired height of client
     * @returns [Actual width of client, Actual height of client]
     */
    apply_size_hints: (
      this: any,
      width: number,
      height: number
    ) => [width: number, height: number];

    /**
     * Get the client’s n-th icon.
     * @param index The index in the list of icons to get.
     * @returns A lightuserdata for a cairo surface. This reference must be destroyed!
     */
    get_icon: (this: any, index: number) => Surface;

    // TODO: append_keybinding
    // TODO: remove_keybinding
    // TODO: append_mousebinding
    // TODO: remove_mousebinding

    /**
     * Move/resize a client relative to current coordinates.
     * @param x The relative x coordinate. (default c.x)
     * @param y The relative y coordinate. (default c.y)
     * @param w The relative width. (default c.width)
     * @param h The relative height. (default c.height)
     */
    relative_move: (
      this: any,
      x: number,
      y: number,
      w: number,
      h: number
    ) => void;

    /**
     * Move a client to a tag.
     * @param target The tag to move the client to.
     */
    move_to_tag: (this: any, target: Tag) => void;

    /**
     * Toggle a tag on a client.
     * @param target The tag to move the client to.
     */
    toggle_tag: (this: any, target: Tag) => void;
    /**
     * Move a client to a screen. Default is next screen, cycling.
     * @param screen The screen, default to current + 1. (default c.screen.index+1)
     */
    move_to_screen: (this: any, screen?: Screen) => void;
    /**
     * Tag a client with the set of current tags.
     */
    to_selected_tags: (this: any) => void;
    // TODO: get_transient_for_matching;
    // TODO: is_transient_for;
    /**
     * Activate (focus) a client.
     * This method is the correct way to focus a client. While client.focus = my_client works and is commonly used in older code, it has some drawbacks. The most obvious one is that it bypasses the activate filters. It also doesn’t handle minimized clients well and requires a lot of boilerplate code to make work properly.
     */
    activate: (
      this: any,
      args: {
        context?: string;
        raise?: boolean;
        force?: boolean;
        switch_to_tags?: boolean;
        switch_to_tag?: boolean;
        action?: boolean;
        toggle_minimization?: boolean;
      }
    ) => void;
    // TODO: grant;
    // TODO: deny;
    /**
     * Emit a signal.
     * @param name The name of the signal.
     * @param args Extra arguments for the callback functions. Each connected function receives the object as first argument and then any extra arguments that are given to emit_signal().
     */
    emit_signal: (this: any, name: string, ...args: any[]) => void;
    /**
     * Connect to a signal.
     * @param name The name of the signal.
     * @param func The callback to call when the signal is emitted.
     */
    connect_signal: (
      this: any,
      name: string,
      func: (client: ClientInstance, ...args: any[]) => void
    ) => void;
    /**
     * Connect to a signal weakly.
     * This allows the callback function to be garbage collected and automatically disconnects the signal when that happens.
     * **Warning:** Only use this function if you really, really, really know what you are doing.
     * @param name The name of the signal.
     * @param func The callback to call when the signal is emitted.
     */
    weak_connect_signal: (this: any, name: string, func: Function) => void;
  }

  // type Client = {
  //   /**
  //    * @noSelf
  //    */
  //   restore: (screen?: Screen) => ClientInstance;
  // } & ClientProps &
  //   ClientFunctions;

  interface MouseClientFunctions {
    resize: (
      this: void,
      client: ClientInstance,
      corner?: string,
      args?: Table
    ) => void;
    move: (this: void, client: ClientInstance, snap?: any) => void;
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
    press: (client: ClientInstance) => void,
    release: (client: ClientInstance) => void,
    /** This is required! */
    data: Table<any>
  ): Table;

  interface ScreenProps {
    selected_tag: Tag;

    tags: Table;
    dpi: number;

    geometry: {
      x: number;
      y: number;
      width: number;
      height: number;
    };
  }
  interface ScreenFunctions {
    preferred: (this: void, client?: ClientInstance) => Screen;

    getbycoord: (this: void, x: number, y: number) => unknown;

    focus: (this: void, screen?: Screen) => unknown;

    focus_bydirection: (this: void, dir: unknown, screen: unknown) => unknown;

    focus_relative: (this: void, offset: number) => unknown;

    focused: (this: void, args?: {client: boolean; mouse: boolean}) => Screen;

    connect_for_each_screen: (
      this: void,
      func: (this: void, screen: Screen) => void
    ) => unknown;
  }

  export type Screen = ScreenProps & ScreenFunctions;

  export const screen: Screen;

  interface PlacementProps {}

  type Drawable = any;

  interface PlacementArgs {
    margins?:
      | number
      | {
          left?: number;
          right?: number;
          top?: number;
          bottom?: number;
        };
  }

  /**
   * @noSelf
   */
  interface PlacementFunctions {
    centered: (drawable: Drawable, args?: Table) => Table;
    no_offscreen: (client: ClientInstance, args?: {screen: number}) => Table;
    bottom_right: (
      this: void,
      client: ClientInstance,
      args?: PlacementArgs
    ) => Table;
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
    clients: (this: any) => Table<ClientInstance>;

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

    /**
     * View only a tag.
     *
     * https://awesomewm.org/apidoc/core_components/tag.html#view_only
     */
    view_only: (this: any) => void;

    // there are two, one static one per instance TODO:
    connect_signal: (this: any, name: string, func: Function) => void;
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
    titlewidget: (c: ClientInstance) => unknown;
    /**
     * @noSelf
     */
    iconwidget: (c: ClientInstance) => unknown;
    /**
     * @noSelf
     */
    button: (
      c: ClientInstance,
      name: string,
      selector: unknown,
      action: unknown
    ) => unknown;
    /**
     * @noSelf
     */
    floatingbutton: (c: ClientInstance) => unknown;
    /**
     * @noSelf
     */
    maximizedbutton: (c: ClientInstance) => unknown;
    /**
     * @noSelf
     */
    minimizebutton: (c: ClientInstance) => unknown;
    /**
     * @noSelf
     */
    closebutton: (c: ClientInstance) => unknown;
    /**
     * @noSelf
     */
    ontopbutton: (c: ClientInstance) => unknown;
    /**
     * @noSelf
     */
    stickybutton: (c: ClientInstance) => unknown;
  }

  export interface Titlebar {
    // widget: Widget;
    setup: (this: any, args: unknown) => unknown;
    show: (this: any, client: ClientInstance, position?: string) => unknown;
    hide: (this: any, client: ClientInstance, position?: string) => unknown;
    toggle: (this: any, client: ClientInstance, position?: string) => unknown;
  }

  /**
   * @noSelf
   */
  export const titlebar: {
    (
      c: ClientInstance,
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

  interface Wibar {
    connect_signal(this: any, name: string, callback: () => void): void;
    struts(this: any, args: Table): void;
    setup(this: any, body: unknown): void;
  }

  export const wibar: (this: void, args: Table) => Wibar;

  type WidgetCommon = {
    /**
     * Common method to create buttons.
     */
    create_buttons: (this: any, buttons: Table, object: Table) => Table;
    /**
     * Common update method.
     * @param widget The widget.
     * @param buttons Buttons.
     * @param label Function to generate label parameters from an object. The function gets passed an object from objects, and has to return text, bg, bg_image, icon.
     * @param data Current data/cache, indexed by objects.
     * @param objects Objects to be displayed / updated.
     */
    list_update: (
      this: any,
      widget: Widget,
      buttons: Table,
      label: (
        object?: any
      ) => {text: string; bg: string; bg_image: string; icon: string},
      data: Table,
      objects: Table,
      args?: Table
    ) => void;
  };

  interface TagListWidgetProps {
    screen: Screen;
    filter: (this: void, tag: Tag) => void;
    buttons: Table[];
    base_widget?: Widget;
    update_function?: WidgetCommon['list_update'];
    widget_template?: any;
  }
  interface TagListWidget {
    (args: TagListWidgetProps): unknown;
    // (args: Table, filter: (tag: Tag) => void, buttons: Table<Button>): unknown;
    filter: {
      noempty: (this: void, tag: Tag) => void;
      selected: (this: void, tag: Tag) => void;
      all: (this: void, tag: Tag) => void;
    };
  }

  interface TaskListWidgetProps {
    screen: Screen;
    filter: (this: void, tag: ClientInstance, screen: Screen) => void;
    buttons: Table;
    base_widget?: Widget;
    update_function?: WidgetCommon['list_update'];
    widget_template?: any;
  }
  interface TaskListWidget {
    (args: TaskListWidgetProps): unknown;
    // (args: Table, filter: (tag: Tag) => void, buttons: Table<Button>): unknown;
    filter: {
      allscreen: (this: void, client: ClientInstance, screen: Screen) => void;
      alltags: (this: void, client: ClientInstance, screen: Screen) => void;
      currenttags: (this: void, client: ClientInstance, screen: Screen) => void;
      minimizedcurrenttags: (
        this: void,
        client: ClientInstance,
        screen: Screen
      ) => void;
      focused: (this: void, client: ClientInstance, screen: Screen) => void;
    };
  }

  export interface CalendarPopupWidget {
    call_calendar: (
      this: any,
      offset: number,
      position: string,
      screen: Screen
    ) => unknown;

    attach: (
      this: any,
      widget: Widget,
      position: string,
      args: {
        on_hover: boolean;
        on_pressed: boolean;
      }
    ) => unknown;
  }

  interface CalendarPopup {
    month: (
      this: void,
      args: {
        screen: Screen;
        font: string;
        bg?: string;
        opacity?: number;
        position?: string;
        spacing?: number;
        margin?: number;
        week_numbers?: boolean;
        start_sunday?: boolean;
        long_weekdays?: boolean;
        style_month?: Table;
        style_header?: Table;
        style_weekday?: Table;
        style_weeknumber?: Table;
        style_normal?: Table;
        style_focus?: Table;
      }
    ) => unknown;

    year: (
      this: void,
      args: {
        position: string;
        screen: Screen;
        opacity: number;
        bg: string;
        font: string;
        spacing: number;
        margin: number;
        week_numbers: boolean;
        start_sunday: boolean;
        long_weekdays: boolean;
        style_year: Table;
        style_month: Table;
        style_yearheader: Table;
        style_header: Table;
        style_weekday: Table;
        style_weeknumber: Table;
        style_normal: Table;
        style_focus: Table;
      }
    ) => unknown;
  }

  interface AwfulWidget {
    // TODO: better typing
    /**
     * Create a textbox that shows the output of a command and updates it at a given time interval.
     *
     * https://awesomewm.org/apidoc/widgets/awful.widget.watch.html#awful.widget.watch
     *
     * @returns The widget used by this watch.
     */
    watch: (
      this: void,
      command: string,
      timeout?: number,
      callback?: (
        widget: any,
        stdout: string,
        stderr: string,
        exitreason: string,
        exitcode: number
      ) => void,
      baseWidget?: any
    ) => Widget;

    taglist: TagListWidget;
    tasklist: TaskListWidget;
    calendar_popup: CalendarPopup;
    layoutbox: (this: void, screen: Screen) => void;
  }

  export const widget: AwfulWidget;

  interface Tooltip {
    timer_function?: (this: void) => string;
    timeout?: number;
    objects?: BaseWiboxWidget[];
    mode?: string;
    delay_show?: number;
    margin_leftright?: number;
    margin_topbottom?: number;
    shape?: GearsShape;
    bg?: string;
    fg?: string;
    border_color?: string;
    border_width?: number;
    align?: string;
    font?: string;
    opacity?: number;
    /**
     * https://awesomewm.org/doc/api/classes/awful.tooltip.html#awful.tooltip.preferred_positions
     */
    preferred_positions?: ('top' | 'right' | 'left' | 'bottom')[];
    /**
     * https://awesomewm.org/doc/api/classes/awful.tooltip.html#awful.tooltip.preferred_alignments
     */
    preferred_alignments?: ('front' | 'middle' | 'back')[];
  }

  // TODO: return type
  export const tooltip: (this: void, args: Tooltip) => any;
}

/** @noResolution */
declare module 'awful.hotkeys_popup' {
  import {ClientInstance, Screen} from 'awful';
  interface Widget {
    show_help: (this: void, client?: ClientInstance, screen?: Screen) => void;
  }

  export const widget: Widget;
}
