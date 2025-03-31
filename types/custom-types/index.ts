export type MyPartial<T extends object> = {
  [P in keyof T]?: T[P];
};

export type MyRequired<T extends object> = {
  [P in keyof T]-?: T[P];
};

export type MyReadonly<T extends object> = {
  readonly [P in keyof T]: T[P];
};

export type MyPick<T extends object, K extends keyof T> = {
  [P in K]: T[P];
};

export type MyOmit<T extends object, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P];
};

export type MyRecord<K extends string | number | symbol, T> = {
  [P in K]: T;
};
