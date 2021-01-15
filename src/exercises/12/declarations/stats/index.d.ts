declare module 'stats' {
  type Comparator<T> = (a: T, b: T) => number;

  type GetIndex<T> = (input: T[], comparator: Comparator<T>) => number;

  type El<T> = T | null;

  export function getMaxIndex<T>(input: T[], comparator: Comparator<T>): number;

  export function getMaxElement<T>(
    input: T[],
    comparator: Comparator<T>
  ): El<T>;

  export function getMinIndex<T>(input: T[], comparator: Comparator<T>): number;
}
