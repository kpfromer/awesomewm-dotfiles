// /** @noSelfInFile */
/** @noResolution */

declare module 'wibox' {
  import {GearsShape} from 'gears';

  interface Widget {
    // TODO: ARGS
    (this: void, args: any): unknown;
    /**
     * @noSelf
     */
    textbox: (args: unknown) => unknown;
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
