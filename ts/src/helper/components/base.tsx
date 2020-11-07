import * as jsxFactory from '../jsx-factory';
import * as wibox from 'wibox';

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
  Partial<Omit<WiboxTextBox, 'markup' | 'text'>> & {
    markup?: boolean;
    id?: string;
  }
> = ({markup = false, children = '', ...rest}) => {
  if (markup) {
    return (
      <base
        {...rest}
        markup={((children as unknown) as string[]).join('')}
        widget={wibox.widget.textbox}
      />
    );
  }
  return (
    <base
      {...rest}
      text={((children as unknown) as string[]).join('')}
      widget={wibox.widget.textbox}
    />
  );
};

export const Image: JSX.FunctionComponent<wibox.ImageWidgetProps> = props => {
  return wibox.widget(
    <base {...props} widget={wibox.widget.imagebox} />
  ) as any;
};

export const Margin: JSX.FunctionComponent<{
  margins?: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
}> = ({children, ...rest}) => {
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

export * from './naughty';
export * from './titlebar';
export * from './wibox';
