import * as awful from 'awful';
import {Table} from 'gears';

export type ButtonEvents<V> = {
  onLeftClick?: (this: void, value: V) => void;
  onMiddleClick?: (this: void, value: V) => void;
  onRightClick?: (this: void, value: V) => void;
  onScrollUp?: (this: void, value: V) => void;
  onScrollDown?: (this: void, value: V) => void;
};

// function convertButtonEventToAwesomeButton<V>(handler: (value: V) => void): Table {}

/**
 * Helper for creating Awful buttons array.
 *
 * https://awesomewm.org/apidoc/input_handling/awful.button.html
 * @param events events
 */
export function convertButtonEventsToAwesomeButtons<V>(
  this: void,
  events: ButtonEvents<V>
): Table[] {
  const buttons: Table[] = [];

  if (events.onLeftClick) {
    buttons.push(awful.button<V>([], 1, events.onLeftClick));
  }

  if (events.onMiddleClick) {
    buttons.push(awful.button<V>([], 2, events.onMiddleClick));
  }

  if (events.onRightClick) {
    buttons.push(awful.button<V>([], 3, events.onRightClick));
  }

  if (events.onScrollUp) {
    buttons.push(awful.button<V>([], 4, events.onScrollUp));
  }

  if (events.onScrollDown) {
    buttons.push(awful.button<V>([], 5, events.onScrollDown));
  }

  return buttons;
}
