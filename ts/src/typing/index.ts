// /** @luaTable */
// declare class Table<K extends {} = {}, V = any> {
//   readonly length: number;
//   set(key: K, value: V | undefined): void;
//   get(key: K): V | undefined;
// }

// export function createTable<K extends {} = {}, V = any>(
//   this: void,
//   values: {
//     [key: string]: V;
//   }
// ): Table<K | string, V> {
//   const table = new Table<K | string, V>();
//   for (const [key, value] of Object.entries(values)) {
//     table.set(key, value);
//   }
//   return table;
// }
