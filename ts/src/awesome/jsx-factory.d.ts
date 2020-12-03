declare namespace JSX {
  type Table = Record<string, unknown>;
  // TODO: remove duplicate
  type BaseWiboxWidget = {
    connect_signal: (
      this: any,
      name: string,
      callback: (this: void, ...args: any[]) => void,
    ) => void;

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
  };

  type AwesomeElement = BaseWiboxWidget;

  // interface ElementClass {
  //   render(): any;
  // }

  export type AwesomeEmpty = null | void | boolean;

  export type AwesomeText = number | string;

  export type AwesomeChild = AwesomeElement | AwesomeText;

  export type AwesomeNode = AwesomeChild | AwesomeElement | AwesomeEmpty;

  export type AwesomeNodeArray = AwesomeNode[];

  // type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

  type PropsWithChildren<P> = P & { children?: AwesomeNodeArray | AwesomeNode };

  interface FunctionComponent<
    P = Record<string, unknown>,
    R extends AwesomeElement = AwesomeElement
  > {
    (this: void, props: PropsWithChildren<P>, context?: any): R;
  }

  // type AwesomeComponent<P = {}> =

  type ElementProps<P> = P;
  type ElementWithChildren<P> = P & { children?: AwesomeNode };

  // Elements

  export type WiboxMargin = {
    /**
     * The widget to be wrapped the the margins.
     */
    // widget: widget;
    /**
     * Set all the margins to val.
     */
    margins: number;
    /**
     * Set the margins color to create a border.
     */
    color: string;
    /**
     * Set the left margin that this layout adds to its widget.
     */
    left: number;
    /**
     * Set the right margin that this layout adds to its widget.
     */
    right: number;
    /**
     * Set the top margin that this layout adds to its widget.
     */
    top: number;
    /**
     * Set the bottom margin that this layout adds to its widget.
     */
    bottom: number;
    /**
     * Force a widget height.
     */
    forced_height: number | undefined;
    /**
     * Force a widget width.
     */
    forced_width: number | undefined;
    /**
     * The widget opacity (transparency).
     */
    opacity: number;
    /**
     * The widget visibility.
     */
    visible: boolean;
  };
  // export type WiboxMarginProps = ElementWithChildren<
  //   Partial<Omit<WiboxTextBox, 'markup' | 'text'>> & {markup?: boolean}
  // >;

  interface IntrinsicElements {
    base: ElementProps<any>;

    fragment: ElementProps<Record<string, unknown>>;
  }
}
