/** @noSelfInFile */
/** @noResolution */

declare module 'awful' {
  import { GearsShape, GearsShapeFunction, Surface, Table } from 'gears';
  import { BaseWiboxWidget } from 'wibox';

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

  // Awesome
  type AwesomeFields = {
    /**
     * The AwesomeWM version.
     */
    version: string;
    /**
     * The AwesomeWM release name.
     */
    release: string;
    /**
     * The AwesomeWM API level.
     * By default, this matches the major version (first component of the version).
     *
     * API levels are used to allow newer version of AwesomeWM to alter the behavior and subset deprecated APIs. Using an older API level than the current major version allows to use legacy rc.lua with little porting. However, they wont be able to use all the new features. Attempting to use a newer feature along with an older API level is not and will not be supported, even if it almost works. Keeping up to date with the newer API levels is highly recommended.
     *
     * Going the other direction, setting an higher API level allows to take advantage of experimental feature. It will also be much harsher when it comes to deprecation. Setting the API level value beyond current+3 will treat using APIs currently pending deprecation as fatal errors. All new code submitted to the upstream AwesomeWM codebase is forbidden to use deprecated APIs. Testing your patches with mode and the default config is recommended before submitting a patch.
     *
     * You can use the -l command line option or api-level modeline key to set the API level for your rc.lua. This setting is global and read only, individual modules cannot set their own API level.
     */
    api_level: string;
    /**
     * The configuration file which has been loaded.
     */
    conffile: string;
    /**
     * True if we are still in startup, false otherwise.
     */
    startup: boolean;
    /**
     *
     */
    startup_errors: boolean;
    /**
     * True if a composite manager is running.
     */
    composite_manager_running: boolean;
    /**
     * Table mapping between signal numbers and signal identifiers.
     */
    unix_signal: Table<any>;
    /**
     * The hostname of the computer on which we are running.
     */
    hostname: string;
    /**
     * The path where themes were installed to.
     */
    themes_path: string;
    /**
     * The path where icons were installed to.
     */
    icon_path: string;
  };

  type Cursor =
    | 'num_glyphs'
    | 'cursor'
    | 'arrow'
    | 'based_arrow_down'
    | 'based_arrow_up'
    | 'boat'
    | 'bogosity'
    | 'bottom_left_corner'
    | 'bottom_right_corner'
    | 'bottom_side'
    | 'bottom_tee'
    | 'box_spiral'
    | 'center_ptr'
    | 'circle'
    | 'clock'
    | 'coffee_mug'
    | 'cross'
    | 'cross_reverse'
    | 'crosshair'
    | 'diamond_cross'
    | 'dot'
    | 'dotbox'
    | 'double_arrow'
    | 'draft_large'
    | 'draft_small'
    | 'draped_box'
    | 'exchange'
    | 'fleur'
    | 'gobbler'
    | 'gumby'
    | 'hand'
    | 'hand'
    | 'heart'
    | 'icon'
    | 'iron_cross'
    | 'left_ptr'
    | 'left_side'
    | 'left_tee'
    | 'leftbutton'
    | 'll_angle'
    | 'lr_angle'
    | 'man'
    | 'middlebutton'
    | 'mouse'
    | 'pencil'
    | 'pirate'
    | 'plus'
    | 'question_arrow'
    | 'right_ptr'
    | 'right_side'
    | 'right_tee'
    | 'rightbutton'
    | 'rtl_logo'
    | 'sailboat'
    | 'sb_down_arrow'
    | 'sb_h_double_arrow'
    | 'sb_left_arrow'
    | 'sb_right_arrow'
    | 'sb_up_arrow'
    | 'sb_v_double_arrow'
    | 'shuttle'
    | 'sizing'
    | 'spider'
    | 'spraycan'
    | 'star'
    | 'target'
    | 'tcross'
    | 'top_left_arrow'
    | 'top_left_corner'
    | 'top_right_corner'
    | 'top_side'
    | 'top_tee'
    | 'trek'
    | 'ul_angle'
    | 'umbrella'
    | 'ur_angle'
    | 'watch'
    | 'xterm';

  type RootStatic = {
    // fake_input
    /**
     * Set the root cursor The possible values are:
     */
    cursor: (this: void, cursorName: Cursor) => void;
    // drawins
    /**
     * Get the wallpaper as a cairo surface or set it as a cairo pattern.
     */
    wallpaper: (this: void, pattern: string) => string;
    // size
    // size_mm
    /**
     * Get the attached tags.
     */
    tags: (this: void) => TagInstance[];
  };

  type RootFields = {
    keys: KeyInstance<any>[];
    buttons: ButtonInstance<any>[];
  };

  export type Root = RootStatic & RootFields;

  export type AwesomeStatic = AwesomeFields & {
    /**
     * Register a new xproperty.
     * @param name The name of the X11 property.
     * @param type One of “string”, “number” or “boolean”.
     */
    register_xproperty: (this: void, name: string, type: 'string' | 'number' | 'boolean') => void;
    /**
     * Quit awesome.
     * @param code The exit code to use when exiting. (default 0)
     */
    quit: (this: void, code?: number) => void;
    /**
     * Execute another application, probably a window manager, to replace awesome.
     * @param command The command line to execute.
     */
    exec: (this: void, command: string) => void;
    /**
     * Restart awesome.
     */
    restart: (this: void) => void;
    /**
     * Send a signal to a process.
     * @param pid Process identifier. 0 and negative values have special meaning. See man 3 kill.
     * @param signal Signal number. See [awesome.unix_signal](https://awesomewm.org/apidoc/core_components/awesome.html#unix_signal) for a list of signals.
     * @returns True if the signal was successfully sent, else false
     */
    kill: (this: void, pid: number, signal: number) => boolean;

    // sync

    // load_image
    // TODO: rest
  };

  type Geometry = {
    x: number;
    y: number;
    width: number;
    height: number;
  };

  type Direction = 'up' | 'down' | 'left' | 'right';

  // Client
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
    icon_sizes: ScreenInstance;

    /* Client screen.*/
    screen: ScreenInstance;

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
    tags: (this: any, tagsTable?: TagInstance[]) => TagInstance[];

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
    apply_size_hints: (this: any, width: number, height: number) => [width: number, height: number];

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
    relative_move: (this: any, x: number, y: number, w: number, h: number) => void;

    /**
     * Move a client to a tag.
     * @param target The tag to move the client to.
     */
    move_to_tag: (this: any, target: TagInstance) => void;

    /**
     * Toggle a tag on a client.
     * @param target The tag to move the client to.
     */
    toggle_tag: (this: any, target: TagInstance) => void;
    /**
     * Move a client to a screen. Default is next screen, cycling.
     * @param screen The screen, default to current + 1. (default c.screen.index+1)
     */
    move_to_screen: (this: any, screen?: ScreenInstance) => void;
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
      },
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
      func: (client: ClientInstance, ...args: any[]) => void,
    ) => void;
    /**
     * Connect to a signal weakly.
     * This allows the callback function to be garbage collected and automatically disconnects the signal when that happens.
     * **Warning:** Only use this function if you really, really, really know what you are doing.
     * @param name The name of the signal.
     * @param func The callback to call when the signal is emitted.
     */
    weak_connect_signal: (this: any, name: string, func: (...args: unknown[]) => unknown) => void;
  }

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
    get: (this: void, screen?: ScreenInstance, stacked?: boolean) => ClientInstance[];
    /**
     * Disconnect from a signal.
     */
    disconnect_signal: (
      this: void,
      name: string,
      callback: (...args: unknown[]) => unknown,
    ) => void;
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
      callback: (this: void, client: ClientInstance, ...args: any[]) => void,
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
      stacked?: boolean,
    ) => ClientInstance | undefined;

    swap: {
      /**
       * Swap a client with another client in the given direction.
       * @param dir The direction, can be either "up", "down", "left" or "right".
       * @param client The client. (default focused)
       * @param stacked Use stacking order? (top to bottom) (default false)
       */
      bydirection: (this: void, dir: Direction, client?: ClientInstance, stacked?: boolean) => void;
      /**
       * Swap a client with another client in the given direction.
       * Swaps across screens.
       * @param dir The direction, can be either "up", "down", "left" or "right".
       * @param sel The client. (optional)
       */
      global_bydirection: (this: void, dir: Direction, sel: ClientInstance) => void;
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
    cycle: (this: void, clockwise: boolean, screen?: ScreenInstance, stacked?: boolean) => void;

    /**
     * Restore (=unminimize) a random client.
     * @returns The restored client if some client was restored, otherwise nil.
     */
    restore: (this: void, screen: ScreenInstance) => ClientInstance | undefined;

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
    getmaster: (this: void, screen?: ScreenInstance) => ScreenInstance;
    /**
     * Set the client as master: put it at the beginning of other windows.
     * @param client he window to set as master.
     */
    setmaster: (this: void, client: ClientInstance) => ScreenInstance;
    /**
     * Set the client as slave: put it at the end of other windows.
     * @param client The window to set as slave.
     */
    setslave: (this: void, client: ClientInstance) => ScreenInstance;
    /**
     * Calculate a client’s column number, index in that column, and number of visible clients in this column.
     * @param client The client.
     */
    idx: (this: void, client: ClientInstance) => ScreenInstance;
    /**
     * Set the window factor of a client
     * @param wfact the window factor value
     * @param client The client.
     */
    setwfact: (this: void, wfact: number, client: ClientInstance) => ScreenInstance;
    /**
     * Change window factor of a client.
     * @param add Amount to increase/decrease the client’s window factor. Should be between -current_window_factor and something close to infinite. The normalisation then ensures that the sum of all factors is 1.
     * @param client The client.
     */
    incwfact: (this: void, add: number, client: ClientInstance) => ScreenInstance;

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
      filter: (this: void, client: ClientInstance) => ClientInstance | undefined;

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
      bydirection: (this: void, dir: Direction, client?: ClientInstance, stacked?: boolean) => void;

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
        stacked?: boolean,
      ) => void;
    };
  };

  export type ClientInstance = ClientProps & ClientFunctions;
  export const client: ClientStatic;

  // Screen
  export type ScreenStatic = {
    /**
     * Get the number of instances.
     * @returns The number of screen objects alive.
     */
    instances: (this: void) => number;
    screen: (this: void) => LuaIterable<ScreenInstance>;
    /**
     * Get the number of screens.
     * @returns The screen count, at least 1.
     */
    count: (this: void) => number;
    /**
     * Disconnect from a signal.
     */
    disconnect_signal: (
      this: void,
      name: string,
      callback: (...args: unknown[]) => unknown,
    ) => void;
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
      callback: (this: void, screen: ScreenInstance, ...args: any[]) => void,
    ) => void;
    /**
     * Return the screen index corresponding to the given (pixel) coordinates.
     * The number returned can be used as an index into the global screen table/object.
     * @returns The screen index
     */
    getbycoord: (this: void, x: number, y: number) => number;
    /**
     * Move the focus to a screen in a specific direction.
     * This moves the mouse pointer to the last known position on the new screen, or keeps its position relative to the current focused screen.
     * @param dir The direction.
     */
    focus_bydirection: (this: void, dir: Direction, screen: ScreenInstance) => void;
    /**
     * Move the focus to a screen relative to the current one, This moves the mouse pointer to the last known position on the new screen, or keeps its position relative to the current focused screen.
     * @param offset Value to add to the current focused screen index. 1 to focus the next one, -1 to focus the previous one.
     */
    focus_relative: (this: void, offset: number) => void;
    /**
     * Get the preferred screen in the context of a client.
     * This is exactly the same as awful.screen.focused except that it avoids clients being moved when Awesome is restarted. This is used in the default rc.lua to ensure clients get assigned to the focused screen by default.
     * @returns The preferred screen.
     */
    preferred: (this: void, client: ClientInstance) => ScreenInstance;
    /**
     * Get the focused screen.
     * It is possible to set awful.screen.default_focused_args to override the default settings.
     * @returns The focused screen object, or nil in case no screen is present currently.
     */
    focused: (
      this: void,
      args?: { client?: boolean; mouse?: boolean },
    ) => ScreenInstance | undefined;
    // get_bounding_geometry
    /**
     * Call a function for each existing and created-in-the-future screen.
     */
    connect_for_each_screen: (
      this: void,
      func: (this: void, screen: ScreenInstance) => void,
    ) => void;
    /**
     * Undo the effect of connect_for_each_screen.
     * @param func The function that should no longer be called.
     */
    disconnect_for_each_screen: (this: void, func: (...args: unknown[]) => unknown) => void;
    // set_auto_dpi_enabled

    // Static Fields
    primary: ScreenInstance;
  };

  type ScreenProps = {
    /**
     * The screen coordinates.
     */
    geometry: Geometry;
    /**
     * The internal screen number.
     * - The indices are a continuous sequence from 1 to `screen.count()`.
     * - It is **NOT** related to the actual screen position relative to each other.
     * - 1 is **NOT** necessarily the primary screen.
     * - When screens are added and removed indices **CAN** change.
     */
    index: number;
    // workarea
    // tiling_area
    // padding
    // outputs
    /**
     * The list of visible clients for the screen.
     * Minimized and unmanaged clients are not included in this list as they are technically not on the screen.
     * The clients on tags that are currently not visible are not part of this list.
     * Clients are returned using the stacking order (from top to bottom). See get_clients if you want them in the order used in the tasklist by default.
     */
    clients: ClientInstance[];
    /**
     * Get the list of clients assigned to the screen but not currently visible.
     * This includes minimized clients and clients on hidden tags.
     */
    hidden_clients: ClientInstance[];
    /**
     * All clients assigned to the screen.
     */
    all_clients: ClientInstance[];
    /**
     * Tiled clients for the screen.
     * Same as clients, but excluding:
     * - fullscreen clients
     * - maximized clients
     * - floating clients
     */
    tiled_clients: ClientInstance[];
    /**
     * A list of all tags on the screen.
     * This property is read only, use `tag.screen`, `awful.tag.add`, `awful.tag.new` or `t:delete()` to alter this list.
     */
    tags: TagInstance[];
    /**
     * A list of all selected tags on the screen.
     */
    selected_tags: TagInstance[];
    /**
     * The first selected tag.
     */
    selected_tag: TagInstance;
    /**
     * The number of pixels per inch of the screen.
     * The default DPI comes from the X11 server. In most case, it will be 96. If autodpi is set to true on the screen, it will use the least dense dpi from the screen outputs. Most of the time, screens only have a single output, however it will have two (or more) when “clone mode” is used (eg, when a screen is duplicated on a projector).
     */
    dpi: number;
    /**
     * The lowest density DPI from all of the (physical) outputs.
     */
    minimum_dpi: number;
    /**
     * The highest density DPI from all of the (physical) outputs.
     */
    maximum_dpi: number;
    /**
     * The preferred DPI from all of the (physical) outputs.
     * This is computed by normalizing all output to fill the area, then picking the lowest of the resulting virtual DPIs.
     */
    preferred_dpi: number;
  };

  type ScreenFunctions = {
    // TODO:
    /**
     * Swap a screen with another one in global screen list.
     * @param screen A screen to swap with.
     */
    swap: (this: any, screen: ScreenInstance) => void;
    /**
     * Get the square distance between a screen and a point.
     * @returns The squared distance of the screen to the provided point.
     */
    get_square_distance: (this: any, x: number, y: number) => number;
    /**
     * Get the next screen in a specific direction.
     * This gets the next screen relative to this one in the specified direction.
     * @param self Screen.
     * @param dir The direction, can be either “up”, “down”, “left” or “right”.
     */
    get_next_in_direction: (this: any, self: ScreenInstance, dir: Direction) => void;
    /**
     * Get the list of visible clients for the screen.
     * This is used by screen.clients internally (with stacked=true).
     * @param stacked Use stacking order? (top to bottom) (default true)
     */
    get_clients: (this: any, stacked?: boolean) => ClientInstance[];
    /**
     * Get all clients assigned to the screen.
     * This is used by all_clients internally (with stacked=true).
     * @param stacked Use stacking order? (top to bottom) (default true)
     */
    get_all_clients: (this: any, stacked?: boolean) => ClientInstance[];
    /**
     * Get tiled clients for the screen.
     * This is used by tiles_clients internally (with stacked=true).
     * @param stacked Use stacking order? (top to bottom) (default true)
     */
    get_tiled_clients: (this: any, stacked?: boolean) => ClientInstance[];
    /**
     * Split the screen into multiple screens.
     * This is useful to turn ultrawide monitors into something more useful without fancy client layouts.
     *
     * TODO: use!!!
     *
     * @param ratios The different ratios to split into. If none is provided, it is split in half. (optional)
     * @param mode Either “vertical” or “horizontal”. If none is specified, it will split along the longest axis. (optional)
     */
    split: (this: any, ratios?: number[], mode?: 'vertical' | 'horizontal') => void;

    /**
     * Emit a signal.
     */
    emit_signal: (this: any, name: string, ...args: any[]) => void;
    /**
     * Connect to a signal.
     */
    connect_signal: (
      this: any,
      name: string,
      callback: (this: void, screen: ScreenInstance, ...args: any[]) => void,
    ) => void;
    // weak_connect_signal
  };

  type ScreenInstance = ScreenProps & ScreenFunctions;

  export const screen: ScreenStatic;

  type TagStatic = {
    /**
     * Add a tag.
     * This function allow to create tags from a set of properties:
     */
    add: (this: void, name: string, props: Partial<TagProps>) => TagInstance;

    /**
     * Get the number of instances.
     * @returns The number of tag objects alive.
     */
    instances: (this: void) => number;
    /**
     * Disconnect from a signal.
     */
    disconnect_signal: (
      this: void,
      name: string,
      callback: (...args: unknown[]) => unknown,
    ) => void;
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
      callback: (this: void, tag: TagInstance, ...args: any[]) => void,
    ) => void;

    /**
     * Create a set of tags and attach it to a screen.
     * @param names The tag name, in a table
     * @param screen The tag screen (defaults to screen 1). (default 1)
     * @param layout The layout or layout table to set for this tags by default.
     * @returns A table with all created tags.
     */
    new: (
      this: void,
      names: string[],
      screen: number | ScreenInstance,
      layout: LayoutThingy[],
    ) => TagInstance[];

    /**
     * Find a suitable fallback tag.
     * @param screen The screen to look for a tag on. [awful.screen.focused()]
     * @param invalids A table of tags we consider unacceptable. [selectedlist(scr)]
     */
    find_fallback: (this: void, screen: ScreenInstance, invalids: TagInstance[]) => void;

    // history

    /**
     * Find a tag by name.
     * @param screen The screen of the tag.
     * @param tag The name of the tag.
     * @returns The tag found, or `nil`
     */
    find_by_name: (this: void, screen: ScreenInstance, name: string) => TagInstance | undefined;

    // incmwfact
    // incgap
    // togglemfpol
    // incnmaster
    // incncol
    /**
     * View no tag. Aka Deselect all tags.
     * @param screen The screen.
     */
    viewnone: (this: void, screen?: ScreenInstance | number) => void;
    /**
     *
     * Select a tag relative to the currently selected one.
     * Note that this doesn’t work well with multiple selection.
     * @param index The relative index to see.
     */
    viewidx: (this: void, index: number, screen?: ScreenInstance) => void;
    /**
     * View next tag. This is the same as `tag.viewidx(1)`.
     * Note that this doesn’t work well with multiple selection.
     */
    viewnext: (this: void, screen?: ScreenInstance) => void;
    /**
     * View previous tag. This is the same a as `tag.viewidx(-1)`.
     * Note that this doesn’t work well with multiple selection.
     */
    viewprev: (this: void, screen?: ScreenInstance) => void;
    /**
     * View only a set of tags.
     * If `maximum` is set, there will be a limit on the number of new tag being selected. The tags already selected do not count. To do nothing if one or more of the tags are already selected, set `maximum` to zero.
     * @param screen The screen of the tags. (optional)
     * @param maximum The maximum number of tags to select. (default #tags)
     */
    viewmore: (this: void, screen?: ScreenInstance, maximum?: number) => void;
    /**
     * Toggle selection of a tag
     * @param tag Tag to be toggled
     */
    viewtoggle: (this: void, tag: TagInstance) => void;
    /**
     * Add a signal to all attached tags and all tags that will be attached in the future. When a tag is detached from the screen, its signal is removed.
     * @param screen The screen concerned, or all if nil.
     * @param signal The signal name. (optional)
     */
    attached_connect_signal: (
      this: void,
      screen: ScreenInstance,
      signal?: string,
      callback?: (tag: TagInstance) => void,
    ) => void;
  };

  type TagProps = {
    /**
     * Tag name.
     */
    name: string;
    /**
     * True if the tag is selected to be viewed.
     */
    selected: boolean;
    /**
     * True if the tag is active and can be used.
     */
    activated: boolean;
    /**
     * The tag index.
     */
    index: number;
    /**
     * The tag screen.
     */
    screen: ScreenInstance;
    // master_width_factor
    /**
     * The tag client layout.
     *
     * This property holds the layout. A layout can be either stateless or stateful. Stateless layouts are used by default by Awesome. They tile clients without any other overhead. They take an ordered list of clients and place them on the screen. Stateful layouts create an object instance for each tags and can store variables and metadata. Because of this, they are able to change over time and be serialized (saved).
     *
     * Both types of layouts have valid usage scenarios.
     */
    layout: (...args: unknown[]) => unknown | LayoutThingy;
    /**
     * The (proposed) list of available layouts for this tag.
     *
     * This property allows to define a subset (or superset) of layouts available in the “rotation table”. In the default configuration file, Mod4+Space and Mod4+Shift+Space are used to switch between tags. The awful.widget.layoutlist also uses this as its default layout filter.
     *
     * By default, it will be the same as awful.layout.layouts unless there the a layout not present is used. If that’s the case they will be added at the front of the list.
     */
    layouts: LayoutThingy[];
    /**
     * Define if the tag must be deleted when the last client is untagged.
     * This is useful to create “throw-away” tags for operation like 50/50 (Windows “Aero Snap) side-by-side views. This keybinding code for this is:
     */
    volatile: boolean;
    /**
     * The gap (spacing, also called useless_gap) between clients.
     *
     * This property allow to waste space on the screen in the name of style, unicorns and readability.
     */
    gap: number;
    /**
     * Enable gaps for a single client.
     */
    gap_single_client: boolean;
    /**
     * Set size fill policy for the master client(s).
     */
    master_fill_policy: 'expand' | 'master_width_factor';
    /**
     * Set the number of master windows.
     */
    master_count: number;
    /**
     * Set the tag icon.
     */
    icon: string; //| Surface;
    /**
     * Set the number of columns.
     */
    column_count: number;
  };

  type TagFunctions = {
    /**
     * Get or set the clients attached to this tag.
     * @param clientsTable None or a table of clients to set as being tagged with this tag. (default nil)
     * @returns A table with the clients attached to this tags.
     */
    clients: (this: any, clientsTable?: ClientInstance[]) => ClientInstance[];

    /**
     * Swap 2 tags.
     * @param tag2 The second tag.
     */
    swap: (this: any, tag2: TagInstance) => void;

    /**
     * Remove all tagged clients.
     */
    clear: (
      this: any,
      args?: {
        fallback_tag: TagInstance;
        allow_untagged?: boolean;
      },
    ) => void;

    /**
     * Delete a tag.
     * @returns Returns true if the tag is successfully deleted. If there are no clients exclusively on this tag then delete it. Any stickied clients are assigned to the optional ‘fallback_tag’. If after deleting the tag there is no selected tag, try and restore from history or select the first tag on the screen.
     */
    delete: (
      this: any,
      args: {
        fallback_tag?: TagInstance;
        allow_untagged?: boolean;
      },
    ) => boolean;

    /**
     * View only a tag. (one tag that is.)
     */
    view_only: (this: any) => void;

    /**
     * Emit a signal.
     */
    emit_signal: (this: any, name: string, ...args: any[]) => void;
    /**
     * Connect to a signal.
     */
    connect_signal: (
      this: any,
      name: string,
      callback: (this: void, tag: TagInstance, ...args: any[]) => void,
    ) => void;
    // weak_connect_signal
  };

  type TagInstance = TagProps & TagFunctions;

  export const tag: TagStatic;

  // See awful.button documentation
  export type Modifier =
    | 'Any'
    | 'Mod1'
    | 'Mod2'
    | 'Mod3'
    | 'Mod4'
    | 'Mod5'
    | 'Shift'
    | 'Lock'
    | 'Control';

  type ButtonProps<R> = {
    /**
     * The table of modifier keys.
     * A modifier, such as `Control` are a predetermined set of keys that can be used to implement keybindings. Note that this list is fix and cannot be extended using random key names, code or characters.
     * Please note that Awesome ignores the status of “Lock” and “Mod2” (Num Lock).
     * https://awesomewm.org/apidoc/input_handling/awful.button.html#modifiers
     */
    modifiers: Modifier[];
    /**
     * The mouse button identifier.
     */
    button: number;
    /**
     * The button description.
     */
    description: string;
    /**
     * The button name.
     */
    name: string;
    /**
     * The button group.
     */
    group: string;
    /**
     * The callback when this button is pressed.
     */
    on_press: (this: void, value: R) => void;
    /**
     * The callback when this button is released.
     */
    on_release: (this: void, value: R) => void;
  };

  type ButtonFunctions = {
    /**
     * Execute this mousebinding.
     */
    trigger: (this: void) => void;
  };

  export type ButtonInstance<R> = ButtonProps<R> & ButtonFunctions;

  /**
   * Create a new button to use as binding.
   * https://awesomewm.org/doc/api/classes/awful.button.html
   * @param mod A list of modifier keys. Valid modifiers are: Any, Mod1, Mod2, Mod3, Mod4, Mod5, Shift, Lock and Control`. This argument is (mandatory).
   * @param button The mouse button (it is recommended to use the awful.button.names constants.
   * @param press Callback for when the button is pressed.
   * @param release Callback for when the button is released.
   */
  export function button<R = ClientInstance>(
    mod: Modifier[],
    button: number,
    press: (this: void, value: R) => void,
    release?: (this: void, value: R) => void,
  ): ButtonInstance<R>;
  /**
   * Create a new button to use as binding.
   * https://awesomewm.org/doc/api/classes/awful.button.html
   */
  export function button<R = ClientInstance>(args: {
    modifiers: Modifier[];
    button: number;
    on_press: (this: void, value: R) => void;
    on_release: (this: void, value: R) => void;
  }): ButtonInstance<R>;

  export type KeyInstance<R> = {
    /**
     * The keyboard key used to trigger this keybinding.
     * It can be the key symbol, such as `space`, the character, such as ` ` or the keycode such as `#65`.
     */
    key: string;
    /**
     * A group of keys.
     * - numrow: The row above the letters in the US PC-105/PC-104 keyboards and its derivative. This is usually the number 1-9 followed by 0.
     * - arrows: The Left/Right/Top/Bottom keys usually located right of the spacebar.
     * - fkeys: The keys F1 through F12 located at the topmost row of any keyboard, plus F13 through F35 on specialist keyboards.
     * - numpad: The number keys on the keypad to the right of the letters and the arrow keys. Not present in every keyboard.
     */
    keygroup: 'numrow' | 'arrows' | 'fkeys' | 'numpad';
    /**
     * The table of modifier keys.
     * A modifier, such as `Control` are a predetermined set of keys that can be used to implement keybindings. Note that this list is fix and cannot be extended using random key names, code or characters.
     * Please note that Awesome ignores the status of “Lock” and “Mod2” (Num Lock).
     * https://awesomewm.org/apidoc/input_handling/awful.button.html#modifiers
     */
    modifiers: Modifier[];
    /**
     * The button description.
     */
    description: string;
    /**
     * The button name.
     */
    name: string;
    /**
     * The button group.
     */
    group: string;
    /**
     * The callback when this button is pressed.
     */
    on_press: (this: void, value: R) => void;
    /**
     * The callback when this button is released.
     */
    on_release: (this: void, value: R) => void;
  };

  /**
   * Create a new key binding (alternate constructor).
   * https://awesomewm.org/doc/api/libraries/awful.key.html
   *
   * @param mod A list of modifier keys. Valid modifiers are: Any, Mod1, Mod2, Mod3, Mod4, Mod5, Shift, Lock and Control.
   * @param key The key to trigger an event. It can be the character itself of #+keycode.
   * @param press Callback for when the key is pressed.
   * @param release Callback for when the key is released. (optional)
   * @param data  User data for key, for example {description=“select next tag”, group=“tag”}. (optional)
   */
  export function key<R = ClientInstance>(
    mod: Modifier[],
    key: string,
    press: (client: ClientInstance) => void,
    release?: (client: ClientInstance) => void,
    /** This is required! */
    data?: Table,
  ): KeyInstance<R>[];

  /**
   * Create a new key binding.
   * https://awesomewm.org/doc/api/libraries/awful.key.html
   */
  export function key<R = ClientInstance>(args: {
    modifiers: Modifier[];
    key: string;
    on_press: (client: ClientInstance) => void;
    on_release?: (client: ClientInstance) => void;
  }): KeyInstance<R>[];

  // TODO: below
  // eslint-disable-next-line @typescript-eslint/ban-types
  type LayoutThingy = {};
  // TODO: NEXT MOUSE

  interface MouseClientFunctions {
    resize: (this: void, client: ClientInstance, corner?: string, args?: Table) => void;
    move: (this: void, client: ClientInstance, snap?: any) => void;
  }

  type MouseClient = MouseClientFunctions;

  interface MouseProps {
    client: MouseClient;
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface MouseFunctions {}

  type Mouse = MouseProps & MouseFunctions;

  /**
   * https://awesomewm.org/doc/api/libraries/mouse.html
   */
  export const mouse: Mouse;

  // eslint-disable-next-line @typescript-eslint/no-empty-interface
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
    no_offscreen: (client: ClientInstance, args?: { screen: number }) => Table;
    bottom_right: (this: void, client: ClientInstance, args?: PlacementArgs) => Table;
  }

  export type Placement = PlacementProps & PlacementFunctions;

  /**
   * https://awesomewm.org/doc/api/classes/client.html#
   */
  export const placement: Placement;

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
    inc: (this: void, relativeIndex: number, screen?: ScreenInstance, layouts?: unknown) => void;
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
      callback: (stdout: string, stderr: string, exitReason: string, exitCode: number) => void,
    ) => void;

    easy_async: (
      this: void,
      cmd: string | Table,
      callback: (stdout: string, stderr: string, exitreason: string, exitcode: number) => void,
    ) => string | number;
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
    button: (c: ClientInstance, name: string, selector: unknown, action: unknown) => unknown;
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
      }>,
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
      label: (object?: any) => { text: string; bg: string; bg_image: string; icon: string },
      data: Table,
      objects: Table,
      args?: Table,
    ) => void;
  };

  interface TagListWidgetProps {
    screen: ScreenInstance;
    filter: (this: void, tag: TagInstance) => void;
    buttons: Table[];
    base_widget?: Widget;
    update_function?: WidgetCommon['list_update'];
    widget_template?: any;
  }
  interface TagListWidget {
    (args: TagListWidgetProps): unknown;
    // (args: Table, filter: (tag: Tag) => void, buttons: Table<Button>): unknown;
    filter: {
      noempty: (this: void, tag: TagInstance) => void;
      selected: (this: void, tag: TagInstance) => void;
      all: (this: void, tag: TagInstance) => void;
    };
  }

  interface TaskListWidgetProps {
    screen: ScreenInstance;
    filter: (this: void, tag: ClientInstance, screen: ScreenInstance) => void;
    buttons: Table;
    base_widget?: Widget;
    update_function?: WidgetCommon['list_update'];
    widget_template?: any;
  }
  interface TaskListWidget {
    (args: TaskListWidgetProps): unknown;
    // (args: Table, filter: (tag: Tag) => void, buttons: Table<Button>): unknown;
    filter: {
      allscreen: (this: void, client: ClientInstance, screen: ScreenInstance) => void;
      alltags: (this: void, client: ClientInstance, screen: ScreenInstance) => void;
      currenttags: (this: void, client: ClientInstance, screen: ScreenInstance) => void;
      minimizedcurrenttags: (this: void, client: ClientInstance, screen: ScreenInstance) => void;
      focused: (this: void, client: ClientInstance, screen: ScreenInstance) => void;
    };
  }

  export interface CalendarPopupWidget {
    call_calendar: (this: any, offset: number, position: string, screen: ScreenInstance) => unknown;

    attach: (
      this: any,
      widget: Widget,
      position: string,
      args: {
        on_hover: boolean;
        on_pressed: boolean;
      },
    ) => unknown;
  }

  interface CalendarPopup {
    month: (
      this: void,
      args: {
        screen: ScreenInstance;
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
      },
    ) => unknown;

    year: (
      this: void,
      args: {
        position: string;
        screen: ScreenInstance;
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
      },
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
        exitcode: number,
      ) => void,
      baseWidget?: any,
    ) => Widget;

    taglist: TagListWidget;
    tasklist: TaskListWidget;
    calendar_popup: CalendarPopup;
    layoutbox: (this: void, screen: ScreenInstance) => void;
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
  import { ClientInstance, ScreenInstance } from 'awful';
  interface Widget {
    show_help: (this: void, client?: ClientInstance, screen?: ScreenInstance) => void;
  }

  export const widget: Widget;
}
