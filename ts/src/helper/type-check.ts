export const isString = function (this: void, value: unknown): value is string {
  return type(value) === 'string';
};
