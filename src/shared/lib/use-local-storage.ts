import { useCallback, useEffect, useState } from 'react';

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
  const [value, setValue] = useState<T>(() => {
    const item = window.localStorage.getItem(key);

    return item ? (JSON.parse(item) as T) : defaultValue;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const remove = useCallback(() => {
    window.localStorage.removeItem(key);
  }, [key]);

  return [value, setValue, remove] as const;
};
