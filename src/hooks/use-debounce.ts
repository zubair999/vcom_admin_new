import { useState, useEffect } from "react";

/**
 * useDebounce
 * A hook that debounces a given value by a set delay.
 * This is useful for when you want to debounce a value that changes rapidly, such as
 *   when the user is typing in a input field.
 * @param value The value to debounce
 * @param delay The amount of time in milliseconds to debounce the value
 * @returns The debounced value
 */

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup function to clear the timeout if value changes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}