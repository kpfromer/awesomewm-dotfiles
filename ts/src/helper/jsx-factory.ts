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
  children: JSX.AwesomeNode[] = []
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

/**
 * Lua version to check if table is array.
 * @param value value in question.
 */
export function isArray<T>(value: any): value is T[] {
  if (type(value) !== 'table') return false;
  let i = 0;
  const table = value as Table;
  for (const key of Object.keys(table)) {
    if (table.get(i + 1) === undefined) return false;
    i++;
  }
  return true;
}

// Heavily based on the React Core code
// https://github.com/facebook/react/blob/454c2211c09bfa2fd5475c25665f3bbeb6882841/packages/react/src/ReactChildren.js#L73
function mapIntoArray<T>(
  this: void,
  children: JSX.AwesomeNode | JSX.AwesomeNode[],
  array: T[],
  func: (node: JSX.AwesomeNode) => T
): number {
  let invokeCallback = false;

  if (children === null) {
    invokeCallback = true;
  } else {
    switch (type(children)) {
      case 'string':
      case 'number':
        invokeCallback = true;
        break;
    }
  }

  if (invokeCallback) {
    const child = children;
    const mappedChild = func(child as number | string);

    if (isArray<JSX.AwesomeNode>(mappedChild)) {
      mapIntoArray(mappedChild, array, func);
    } else {
      array.push(mappedChild);
    }

    return 1;
  }

  let subTreeCount = 0;

  if (isArray<JSX.AwesomeNode>(children)) {
    for (const i of forRange(0, children.length)) {
      subTreeCount += mapIntoArray(children[i], array, func);
    }
  } else {
    // todo: get iterator
    // if (children !== undefined) {
    // }
  }

  return subTreeCount;
}

function mapChildren(
  this: void,
  children: JSX.AwesomeNode[] | null,
  func: (node: JSX.AwesomeNode, index: number) => JSX.AwesomeNode
): JSX.AwesomeNode[] | null {
  if (children === null) {
    return children;
  }
  const result: JSX.AwesomeNode[] = [];
  let count = 0;

  mapIntoArray(children, result, child => func(child, count++));

  return result;
}

/**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 *
 * See https://reactjs.org/docs/react-api.html#reactchildrentoarray
 */
function toArray(children: JSX.AwesomeNode[]): JSX.AwesomeNode[] {
  return mapChildren(children, child => child) ?? [];
}

export function nodeToString(
  this: void,
  node: JSX.AwesomeNode,
  level = 0
): string {
  if (node === undefined) {
    return 'undefined';
  }
  let tabs = '';
  for (const i of forRange(0, level)) {
    tabs += '  ';
  }

  switch (type(node)) {
    case 'string':
      return `${node as string}`;
    case 'number':
      return `${(node as number).toString()}`;
    case 'boolean':
      return `${(node as boolean) ? 'true' : 'false'}`;
    case 'table': {
      const table = (node as any) as Table;

      const body = Object.entries(table)
        .map(
          ([key, value]) => `${tabs}  ${key}: ${nodeToString(value, level + 2)}`
        )
        .join(',\n');

      return `${tabs}{\n${body}\n${tabs}}`;
    }
    default:
      return 'undefined';
  }
}

/**
 * Flattens an array one level. IE [[[1]], [2], 3] => [[1], 2, 3]
 * @param children Children to the createElement.
 */
export function flattenOneLevel(
  this: void,
  children: JSX.AwesomeNode[]
): JSX.AwesomeNode[] {
  const result: JSX.AwesomeNode[] = [];
  for (const i of forRange(0, children.length)) {
    const item = children[i];
    // log('f');
    // log(isArray(item) ? 'true' : 'false');
    if (isArray<JSX.AwesomeNode>(item)) {
      for (const j of forRange(0, item.length)) {
        result.push(item[j]);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

export function createElement(
  tagName: keyof JSX.IntrinsicElements | JSX.FunctionComponent,
  attributes: any,
  ...children: JSX.AwesomeNode[]
): any {
  if (tagName === 'base') {
    // Code based from React.createElement
    // https://github.com/facebook/react/blob/master/packages/react/src/ReactElement.js#L526
    // if (children.length === 1) {
    //   return createMap(attributes, children[0] as any);
    // }
    // return createMap(attributes, children);
    return createMap(attributes, flattenOneLevel(children));
  } else if (tagName === 'fragment') {
    return createMap({}, children);
  } else if (tagName !== null) {
    // Code based from React.createElement
    // https://github.com/facebook/react/blob/master/packages/react/src/ReactElement.js#L526
    // if (children.length === 1) {
    //   return tagName({...attributes, children: children[0]});
    // }
    return tagName({...attributes, children: flattenOneLevel(children)});
  }

  return null;
}
