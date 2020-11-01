/// <reference types="./jsx-factory" />
import * as naughty from 'naughty';
import * as wibox from 'wibox';

/** @luaTable */
declare class Table<K extends {} = {}, V = any> {
  readonly length: number;
  set(key: K, value: V | undefined): void;
  get(key: K): V | undefined;
}

function createMap(
  this: void,
  attributes: object,
  children: any[] = []
): Table {
  const map = new Table();

  for (const [key, value] of Object.entries(attributes)) {
    map.set(key, value);
  }

  for (let i = 0; i < children.length; ++i) {
    // Remember that lua is base 1 thus we need to start at index 1 for the map
    // this is because this is because "map.set(i, children[i])" is transpiled to "map[i] = children[i + 1]"
    map.set(i + 1, children[i]);
  }

  return map;
}

export function createElement(
  tagName: keyof JSX.IntrinsicElements,
  attributes: any,
  children: any[] = []
  // ...children: any[]
): any {
  if (tagName === 'naughtybox') {
    // const map = new Table();
    // Object.entries(attributes).forEach(([key, value]) => {
    //   map.set(key, value);
    // });
    // map.set('widget_template', children);
    // return naughty.layout.box(map as any);
  } else if (tagName === 'textbox') {
    // // TODO:
    // log(`${tagName}`);
    // const props = attributes as JSX.TextBoxProps;
    // if (props.markup) {
    //   return {
    //     ...attributes,
    //     markup: props.children ?? '',
    //     widget: wibox.widget.textbox,
    //   };
    // }
    // return {
    //   ...attributes,
    //   text: props.children ?? '',
    //   widget: wibox.widget.textbox,
    // };
  } else if (tagName === 'margin') {
    const map = createMap(attributes, children);
    map.set('widget', wibox.container.margin);
    return map;
  } else if (tagName === 'fixed-horizontal') {
    const map = createMap(attributes, children);
    map.set('layout', wibox.layout.fixed.horizontal);
    return map;
  } else if (tagName === 'fixed-vertical') {
    const map = createMap(attributes, children);
    map.set('layout', wibox.layout.fixed.vertical);
    return map;
  } else if (tagName === 'align-horizontal') {
    const map = createMap(attributes, children);
    map.set('layout', wibox.layout.align.horizontal);
    return map;
  } else if (tagName === 'flex-horizontal') {
    const map = createMap(attributes, children);
    map.set('layout', wibox.layout.flex.horizontal);
    return map;
  } else if (tagName === 'fragment') {
    return createMap(attributes, children);
  }

  return null;
}
