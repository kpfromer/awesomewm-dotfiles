import * as jsxFactory from '../helper/jsx-factory';
import * as wibox from 'wibox';
import * as awful from 'awful';
import * as beautiful from 'beautiful';
import {Background} from '../helper/components/base';
import {Table} from 'gears';

export type ButtonPressHandler = (this: void, button: number) => void;

function createClickable(this: void, onButtonPress?: ButtonPressHandler) {
  const container = wibox.widget(<Background />);

  let oldCursor: string | undefined = undefined;
  // TODO: typing
  let oldWibox: any = undefined;

  container.connect_signal('mouse::enter', () => {
    container.bg = beautiful.groups_bg;
    const currentWibox: any = mouse.current_wibox;
    if (currentWibox) {
      oldCursor = currentWibox.cursor;
      oldWibox = currentWibox;
      currentWibox.cursor = 'hand1';
    }
  });

  container.connect_signal('mouse::leave', () => {
    container.bg = beautiful.leave_event;
    if (oldWibox) {
      oldWibox.cursor = oldCursor;
      oldWibox = undefined;
    }
  });

  container.connect_signal('button::press', () => {
    container.bg = beautiful.press_event;
  });

  container.connect_signal('button::release', () => {
    container.bg = beautiful.release_event;
  });

  if (onButtonPress) {
    container.connect_signal(
      'button::press',
      (self: unknown, lx: number, ly: number, button: number) => {
        onButtonPress(button);
      }
    );
  }

  return container;
}

export const Clickable: JSX.FunctionComponent<{
  onButtonPress?: ButtonPressHandler;
  buttons?: Table;
  // TODO: extract to instrinc props?
  create_callback?: (
    this: void,
    self: {
      connect_signal: (this: any, name: string, callback: Function) => void;
      get_children_by_id: <T = wibox.WiboxWidget>(this: any, id: string) => T[];
    },
    // TODO:
    item: any,
    index: number,
    objects: any
  ) => void;
  update_callback?: (
    this: void,
    self: {
      connect_signal: (this: any, name: string, callback: Function) => void;
      get_children_by_id: <T = wibox.WiboxWidget>(this: any, id: string) => T[];
    },
    // TODO:
    item: any,
    index: number,
    objects: any
  ) => void;
}> = ({onButtonPress, children, ...rest}) => {
  return (
    <base {...rest} widget={() => createClickable(onButtonPress)}>
      {children}
    </base>
  );
};
