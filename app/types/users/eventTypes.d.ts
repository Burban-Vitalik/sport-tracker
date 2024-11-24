export type EventType<T extends string> = `${T}Event`;
export type Getter<T extends string> = `get${Capitalize<T>}`;
