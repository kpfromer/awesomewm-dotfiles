/// <reference types="./jsx-factory" />

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

  for (const i of forRange(0, children.length)) {
    // Remember that lua is base 1 thus we need to start at index 1 for the map
    // this is because this is because "map.set(i, children[i])" is transpiled to "map[i] = children[i + 1]"
    map.set(i + 1, children[i]);
  }

  return map;
}

export function createElement(
  tagName: keyof JSX.IntrinsicElements | JSX.FunctionComponent,
  attributes: any,
  ...children: any[]
): any {
  if (tagName === 'base') {
    // Code based from React.createElement
    // https://github.com/facebook/react/blob/master/packages/react/src/ReactElement.js#L526
    if (children.length === 1) {
      return createMap(attributes, children[0]);
    }
    return createMap(attributes, children);
  } else if (tagName === 'naughtybox') {
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
  } else if (tagName === 'fragment') {
    return createMap(attributes, children);
  } else if (tagName !== null) {
    return tagName({...attributes, children});
  }

  return null;
}
