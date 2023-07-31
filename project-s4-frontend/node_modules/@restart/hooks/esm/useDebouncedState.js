import { useState } from 'react';
import useDebouncedCallback from './useDebouncedCallback';

/**
 * Similar to `useState`, except the setter function is debounced by
 * the specified delay.
 *
 * ```ts
 * const [value, setValue] = useDebouncedState('test', 500)
 *
 * setValue('test2')
 * ```
 *
 * @param initialState initial state value
 * @param delay The milliseconds delay before a new value is set
 */
export default function useDebouncedState(initialState, delay) {
  const [state, setState] = useState(initialState);
  const debouncedSetState = useDebouncedCallback(setState, delay);
  return [state, debouncedSetState];
}