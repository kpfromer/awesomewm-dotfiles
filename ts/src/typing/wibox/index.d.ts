// /** @noSelfInFile */
/** @noResolution */

declare module 'wibox' {
  import {GearsShape, Table} from 'gears';

  interface WiboxWidget {
    connect_signal: (this: any, name: string, callback: () => void) => void;

    bg: string;

    /**
     * Get or set the children elements.
     */
    children: Table;
    /**
     * Get all direct and indirect children widgets.
     * This will scan all containers recursively to find widgets
     * Warning: This method it prone to stack overflow id the widget, or any of its
     * children, contain (directly or indirectly) itself.
     */
    all_children: Table;
    /**
     * Force a widget height.
     */
    forced_height?: number;
    /**
     * Force a widget width.
     */
    forced_width?: number;
    /**
     * The widget opacity (transparency).
     */
    opacity: number;
    visible: boolean;
    buttons: Table;
  }

  export interface ImageWidgetProps {
    /**
     * The image rendered by the imagebox.
     *
     * It can can be any of the following:
     *
     * A string : Interpreted as the path to an image file,
     * A cairo image surface : Directly used as is,
     * An rsvg handle object : Directly used as is,
     *  nil : Unset the image.
     */
    image?: string;
    /**
     * Set a clip shape for this imagebox. A clip shape define an area where the content is displayed and one where it is trimmed.
     *
     * clip_shape function or gears.shape A gears.shape compatible shape function.
     */
    clip_shape?: GearsShape;
    /**
     * Should the image be resized to fit into the available space?
     */
    resize?: boolean;
  }

  export type ImageWidget = ImageWidgetProps & WiboxWidget;

  interface SystrayWidgetProps {
    reverse?: boolean;
  }

  export type SystrayWidget = SystrayWidgetProps & WiboxWidget;

  interface TextClockWidgetProps {
    /**
     * The time format. (default " %a %b %d)
     */
    format?: string;
    /**
     * How often to update the time (in seconds). (default 60)
     */
    refresh?: number;
    /**
     * The timezone to use, e.g. “Z” for UTC, “±hh:mm” or “Europe/Amsterdam”. See https://developer.gnome.org/glib/stable/glib-GTimeZone.html#g-time-zone-new. (default local timezone)
     */
    timezone?: string;
  }

  export type TextClockWidget = TextClockWidgetProps & WiboxWidget;

  interface Widget {
    // TODO: ARGS
    (this: void, args: any): WiboxWidget;
    /**
     * @noSelf
     */
    textbox: (args: unknown) => unknown;

    imagebox: (this: void) => ImageWidget;

    systray: (this: void, args: SystrayWidgetProps) => SystrayWidget;

    textclock: (this: void) => TextClockWidget;
  }

  interface Wibox {
    widget: Widget;
  }

  export const widget: Widget;

  interface Container {
    /**
     * @noSelf
     */
    margin: (args: JSX.WiboxMargin) => unknown;

    background: (
      this: void,
      widget: Widget,
      bg: string,
      shape: GearsShape | (() => GearsShape)
    ) => unknown;

    constraint: (
      this: void,
      widget: Widget,
      strategy: 'min' | 'max' | 'exact',
      width?: number,
      height?: number
    ) => unknown;

    place: (this: void) => unknown;
  }

  export const container: Container;

  interface Fixed {
    /**
     * @noSelf
     */
    horizontal: (...widgets: any[]) => unknown;
    /**
     * @noSelf
     */
    vertical: (...widgets: any[]) => unknown;
    // 'add': (...: unknown) => unknown;
    // 'remove': (index: number) => unknown;
    // 'remove_widgets': (widget: unknown) => unknown;
    // 'replace_widget': (widget: unknown,widget2: unknown,recursive: boolean) => unknown;
    // 'insert': (index: number,widget: unknown) => unknown;
    // 'set': (index: number,widget2: unknown) => unknown;
    // 'swap': (index1: number,index2: number) => unknown;
    // 'swap_widgets': (widget1: unknown,widget2: unknown,recursive: boolean) => unknown;
    // 'reset': (layout: unknown) => unknown;
    // 'setup': (args: unknown) => unknown;
    // 'buttons': (_buttons: unknown) => unknown;
    // 'emit_signal_recursive': (signal_name: string,...: unknown) => unknown;
    // 'emit_signal': (name: string,...: unknown) => unknown;
    // 'connect_signal': (name: string,func: function) => unknown;
    // 'weak_connect_signal': (name: string,func: function) => unknown;
  }

  interface Align {
    horizontal: (...widgets: any[]) => unknown;
    vertical: (...widgets: any[]) => unknown;
    // 'set': (index: number,widget2: unknown) => unknown;
    // 'replace_widget': (widget: unknown,widget2: unknown,recursive: boolean) => unknown;
    // 'swap': (index1: number,index2: number) => unknown;
    // 'swap_widgets': (widget1: unknown,widget2: unknown,recursive: boolean) => unknown;
    // 'reset': (layout: unknown) => unknown;
    // 'setup': (args: unknown) => unknown;
    // 'buttons': (_buttons: unknown) => unknown;
    // 'emit_signal_recursive': (signal_name: string,...: unknown) => unknown;
    // 'emit_signal': (name: string,...: unknown) => unknown;
    // 'connect_signal': (name: string,func: function) => unknown;
    // 'weak_connect_signal': (name: string,func: function) => unknown;
  }

  interface Flex {
    /**
     * @noSelf
     */
    horizontal: (...widgets: any[]) => unknown;
    /**
     * @noSelf
     */
    vertical: (...widgets: any[]) => unknown;
    // 'set': (index: number,widget2: unknown) => unknown;
    // 'replace_widget': (widget: unknown,widget2: unknown,recursive: boolean) => unknown;
    // 'swap': (index1: number,index2: number) => unknown;
    // 'swap_widgets': (widget1: unknown,widget2: unknown,recursive: boolean) => unknown;
    // 'reset': (layout: unknown) => unknown;
    // 'set_children': (children: table) => unknown;
    // 'add': (layout: unknown,...: widget) => unknown;
    // 'remove': (The: index) => unknown;
    // 'remove_widgets': (widget: unknown) => unknown;
    // 'insert': (index: number,widget: unknown) => unknown;
    // 'setup': (args: unknown) => unknown;
    // 'buttons': (_buttons: unknown) => unknown;
    // 'emit_signal_recursive': (signal_name: string,...: unknown) => unknown;
    // 'emit_signal': (name: string,...: unknown) => unknown;
    // 'connect_signal': (name: string,func: function) => unknown;
    // 'weak_connect_signal': (name: string,func: function) => unknown;
  }

  interface Layout {
    fixed: Fixed;
    align: Align;
    flex: Flex;
  }

  export const layout: Layout;
}
