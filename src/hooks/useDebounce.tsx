import { useEffect, useState } from 'react';

/**
 * Повертає значення із затримкою в `delay` мс після останньої зміни `value`.
 * Корисно для пошуку/фільтрів, щоб не запускати запит/фільтрацію при кожному натисканні клавіші.
 */
export const useDebounce = <T,>(value: T, delay: number): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};
