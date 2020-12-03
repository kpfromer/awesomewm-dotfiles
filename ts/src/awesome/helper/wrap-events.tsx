import { ButtonEvents, convertButtonEventsToAwesomeButtons } from 'awesome/components/types';
import Awesome from 'awesome/jsx';
import { Table } from 'gears';

export function wrapEvents<BUTTONEVENT, T extends { buttons?: Table[] }>(
  this: void,
  Component: JSX.FunctionComponent<T>,
): JSX.FunctionComponent<T & ButtonEvents<BUTTONEVENT>> {
  return ({
    onLeftClick,
    onMiddleClick,
    onRightClick,
    onScrollUp,
    onScrollDown,
    children,
    buttons = [],
    ...rest
  }) => {
    return (
      <Component
        {...(rest as T)}
        buttons={[
          ...convertButtonEventsToAwesomeButtons({
            onLeftClick,
            onMiddleClick,
            onRightClick,
            onScrollUp,
            onScrollDown,
          }),
          ...buttons,
        ]}
      >
        {children}
      </Component>
    );
  };
}
