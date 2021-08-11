export type StorageType = "sessionStorage" | "localStorage";

export interface StorageItem {
  [x: string]: string;
}

export type UserType<T> = T;
