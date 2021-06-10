import { StorageType, StorageItem } from "./type.ts";
function deserialize(val: any): string | undefined {
  if (typeof val !== "string") {
    return undefined;
  }
  try {
    return JSON.parse(val);
  } catch (e) {
    return val || undefined;
  }
}

function serialize(val) {
  return JSON.stringify(val);
}

export const getItem = (type: StorageType, key: string): string | undefined => {
  if (type === "localStorage") {
    return deserialize(localStorage.getItem(key));
  } else {
    return deserialize(sessionStorage.getItem(key));
  }
};

export const setItem = (type: StorageType, key: string, value: any): void => {
  if (!value) {
    removeItem(type, key);
    return;
  }
  if (type === "localStorage") {
    localStorage.setItem(key, serialize(value));
  } else {
    sessionStorage.setItem(key, serialize(value));
  }
};

export const hasItem = (type: StorageType, key: string): boolean => {
  return getItem(type, key) !== undefined;
};

export const removeItem = (type: StorageType, key: string): void => {
  if (type === "localStorage") {
    localStorage.removeItem(key);
  } else {
    sessionStorage.removeItem(key);
  }
};

export const clear = (type: StorageType): void => {
  if (type === "localStorage") {
    localStorage.clear();
  } else {
    sessionStorage.clear();
  }
};

export const getStorageLength = (type: StorageType): number => {
  if (type === "localStorage") {
    return localStorage.length;
  } else {
    return sessionStorage.length;
  }
};

export const getStorageKey = (
  type: StorageType,
  index: number
): string | null => {
  if (type === "localStorage") {
    return localStorage.key(index);
  } else {
    return sessionStorage.key(index);
  }
};

export const getStorageKeyValue = (type: StorageType): StorageItem => {
  const res = {};
  const len = getStorageLength(type);
  for (let i = 0; i < len; i++) {
    const key = getStorageKey(type, i);
    if (key) {
      const value = getItem(type, key);
      res[key] = value;
    }
  }
  return res;
};

interface Storage {
  getItem: (type: StorageType, key: string) => string | undefined;
  setItem: (type: StorageType, key: string, value: string | null) => void;
  removeItem: (type: StorageType, key: string) => void;
  clear: (type: StorageType) => void;
  getStorageLength: (type: StorageType) => number;
  getStorageKey: (type: StorageType, index: number) => string | null;
  hasItem: (type: StorageType, key: string) => boolean;
  getStorageKeyValue: (type: StorageType) => StorageItem;
}
const storage: Storage = {
  getItem,
  setItem,
  removeItem,
  clear,
  getStorageKey,
  getStorageLength,
  hasItem,
  getStorageKeyValue,
};

export default storage;
