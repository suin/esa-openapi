type Primitive = string | number | boolean | undefined | null | symbol | bigint;

export type DeepWritable<T> = T extends Primitive
  ? T
  : T extends ReadonlyArray<infer U>
  ? DeepWritableArray<U>
  : DeepWritableObject<T>;

interface DeepWritableArray<T> extends Array<DeepWritable<T>> {}

type DeepWritableObject<T> = {
  -readonly [P in keyof T]: DeepWritable<T[P]>;
};

export function writable<T>(v: T): DeepWritable<T> {
  return v as DeepWritable<T>;
}
