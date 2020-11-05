import * as jsxFactory from '../helper/jsx-factory';
import * as wibox from 'wibox';
import * as beautiful from 'beautiful';
import {Background} from '../helper/base';

function createClickable(this: void, children: any) {
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

  return container;
}

export const Clickable: JSX.FunctionComponent = ({children}) => {
  return <base widget={createClickable}>{children}</base>;
};
