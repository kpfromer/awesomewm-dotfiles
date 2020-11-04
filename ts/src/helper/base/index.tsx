import * as jsxFactory from '../../helper/jsx-factory';
import * as awful from 'awful';
import * as wibox from 'wibox';
import * as naughty from 'naughty';

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

// TODO: full default font from theme
export const Text: JSX.FunctionComponent<
  Partial<Omit<WiboxTextBox, 'markup' | 'text'>> & {markup?: boolean}
> = ({markup = false, children = '', ...rest}) => {
  if (markup) {
    return (
      <base
        {...rest}
        markup={((children as unknown) as string[]).join('')}
        widget={wibox.widget.textbox}
      />
    );
    // return {
    //   ...rest,
    //   markup: children,
    //   widget: wibox.widget.textbox,
    // } as any;
  }
  return (
    <base
      {...rest}
      text={((children as unknown) as string[]).join('')}
      widget={wibox.widget.textbox}
    />
  );
  // return {
  //   ...rest,
  //   text: ((children as unknown) as string[]).join(''),
  //   widget: wibox.widget.textbox,
  // } as any;
};

export const Margin: JSX.FunctionComponent<{margins: number}> = ({
  children,
  ...rest
}) => {
  return (
    <base {...rest} widget={wibox.container.margin}>
      {children}
    </base>
  );
};

export const Layout: JSX.FunctionComponent<{
  fixed?: boolean;
  flex?: boolean;
  align?: boolean;
  vertical?: boolean;
  horizontal?: boolean;

  buttons?: any;
  spacing?: any;

  expand?: 'inside' | 'outside' | 'none';

  /*
   * Set the layout's fill_space property. If this property is true, the last widget will get all the space that is left. If this is false, the last widget won't be handled specially and there can be space left unused.
   */
  fill_space?: boolean;
}> = ({
  fixed = false,
  flex = false,
  align = false,
  vertical = false,
  horizontal = false,
  children,
  ...rest
}) => {
  let layout: any | undefined;

  if (fixed) {
    if (horizontal) {
      layout = wibox.layout.fixed.horizontal;
    } else if (vertical) {
      layout = wibox.layout.fixed.vertical;
    }
  } else if (flex) {
    if (horizontal) {
      layout = wibox.layout.flex.horizontal;
    } else if (vertical) {
      layout = wibox.layout.flex.vertical;
    }
  } else if (align) {
    if (horizontal) {
      layout = wibox.layout.align.horizontal;
    } else if (vertical) {
      layout = wibox.layout.align.vertical;
    }
  }

  if (layout === undefined) {
    return <base {...rest}>{children}</base>;
  }

  return (
    <base {...rest} layout={layout}>
      {children}
    </base>
  );
};

// Titlebar stuff

type TitlebarProps = {client: awful.Client};

export const ClientIcon: JSX.FunctionComponent<TitlebarProps> = ({client}) => {
  return awful.titlebar.widget.iconwidget(client) as any;
};

export const OnTopButton: JSX.FunctionComponent<TitlebarProps> = ({client}) => {
  return awful.titlebar.widget.ontopbutton(client) as any;
};

export const FloatingButton: JSX.FunctionComponent<TitlebarProps> = ({
  client,
}) => {
  return awful.titlebar.widget.floatingbutton(client) as any;
};

export const MinimizeButton: JSX.FunctionComponent<TitlebarProps> = ({
  client,
}) => {
  return awful.titlebar.widget.minimizebutton(client) as any;
};

export const MaximizedButton: JSX.FunctionComponent<TitlebarProps> = ({
  client,
}) => {
  return awful.titlebar.widget.maximizedbutton(client) as any;
};

export const CloseButton: JSX.FunctionComponent<TitlebarProps> = ({client}) => {
  return awful.titlebar.widget.closebutton(client) as any;
};

// Naughty

type BaseNaughty = {};

// TODO: align
export const NaughtyIcon: JSX.FunctionComponent<
  BaseNaughty & {
    align?: string;
    resize_strategy?: 'scale' | 'center' | 'resize';
  }
> = ({children, ...rest}) => {
  return <base {...rest} widget={naughty.widget.icon} />;
};

export const NaughtyTitle: JSX.FunctionComponent<
  BaseNaughty & {
    align?: string;
  }
> = ({children, ...rest}) => {
  return <base {...rest} widget={naughty.widget.title} />;
};

export const NaughtyMessage: JSX.FunctionComponent<
  BaseNaughty & {
    align?: string;
  }
> = ({children, ...rest}) => {
  return <base {...rest} widget={naughty.widget.message} />;
};

// Wibox Container

type BaseWibox = {id?: string};

export const Background: JSX.FunctionComponent<
  BaseWibox & {
    shape?: unknown;
    bg?: string;
  }
> = ({bg, children, ...rest}) => {
  return (
    <base {...rest} bg={bg} widget={wibox.container.background}>
      {children}
    </base>
  );
};
export const Constraint: JSX.FunctionComponent<
  BaseWibox & {
    /**
     * How to constraint the size.
     */
    strategy?: 'min' | 'max' | 'exact';
    /**
     * The maximum width of the widget. nil for no limit.
     */
    width?: number;
    /**
     * The maximum height of the widget. nil for no limit.
     */
    height?: number;
  }
> = ({children, ...rest}) => {
  return (
    <base {...rest} widget={wibox.container.constraint}>
      {children}
    </base>
  );
};
