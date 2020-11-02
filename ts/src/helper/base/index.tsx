import * as jsxFactory from '../../helper/jsx-factory';
import * as awful from 'awful';
import * as wibox from 'wibox';

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
