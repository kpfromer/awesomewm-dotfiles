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

  // type AwesomeText = string | number;
  type AwesomeChild = AwesomeElement;
  type AwesomeNode = AwesomeChild | boolean | null | undefined;
  // type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

  type PropsWithChildren<P> = P & {children?: AwesomeNode};

  interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): AwesomeElement<
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
  export type WiboxTextBox = {
    markup: string;
    text: string;
    ellipsize: 'start' | 'middle' | 'end';
    wrap: 'word' | 'char' | 'word_char';
    valign: 'top' | 'center' | 'bottom';
    align: 'top' | 'center' | 'bottom';
    font: string;
    forced_height?: number;
    forced_width?: number;
    opacity?: number;
    visible: boolean;
  };
  export type TextBoxProps = ElementWithChildren<
    Partial<Omit<WiboxTextBox, 'markup' | 'text'>> & {markup?: boolean}
  >;

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
    h1: any;
    // div: any;
    // ...

    fragment: ElementProps<{}>;

    naughtybox: ElementProps<{
      notification: any;
      type: 'notification';
      // screen: Screen;
      // shape: NoSelfGearsShape;
    }>;

    textbox: TextBoxProps;

    margin: Partial<WiboxMargin>;

    'fixed-horizontal': ElementProps<{spacing?: number; buttons?: any}>;
    'fixed-vertical': ElementProps<{spacing?: number; buttons?: any}>;

    'align-horizontal': ElementProps<{buttons?: any}>;

    'flex-horizontal': ElementProps<{align?: string; buttons?: any}>;
  }
}
