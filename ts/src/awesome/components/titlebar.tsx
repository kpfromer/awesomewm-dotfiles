import Awesome from 'awesome/jsx';
import * as awful from 'awful';

// Titlebar stuff

type TitlebarProps = {client: awful.ClientInstance};

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
