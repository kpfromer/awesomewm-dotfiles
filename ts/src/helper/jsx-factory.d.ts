// import {Screen} from 'awful';
// import {NoSelfGearsShape} from 'gears';

declare namespace JSX {
  interface AwesomeElement<
    P = any,
    T extends string = string
    // T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>
  > {
    type: T;
    props: P;
    // key: Key | null;
  }

  // interface ElementClass {
  //   render(): any;
  // }

  export type AwesomeEmpty = null | void | boolean;

  export type AwesomeText = number | string;

  export type AwesomeChild = AwesomeElement | AwesomeText;

  export type AwesomeNode = AwesomeChild | AwesomeElement | AwesomeEmpty;

  export type AwesomeNodeArray = AwesomeNode[];

  // type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

  type PropsWithChildren<P> = P & {children?: AwesomeNodeArray};

  interface FunctionComponent<P = {}> {
    (this: void, props: PropsWithChildren<P>, context?: any): AwesomeElement<
      any,
      any
    > | null;
    // propTypes?: WeakValidationMap<P>;
    // contextTypes?: ValidationMap<any>;
    // defaultProps?: Partial<P>;
    // displayName?: string;
  }

  // type AwesomeComponent<P = {}> =

  type ElementProps<P> = P;
  type ElementWithChildren<P> = P & {children?: AwesomeNode};

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

    fragment: ElementProps<{}>;

    naughtybox: ElementProps<{
      notification: any;
      type: 'notification';
      // screen: Screen;
      // shape: NoSelfGearsShape;
    }>;
  }
}
