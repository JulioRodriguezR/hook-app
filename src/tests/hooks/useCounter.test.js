import {renderHook, act} from '@testing-library/react-hooks';

import { useCounter } from '../../hooks/useCounter';

describe('Test in useCounter', () => {
  
  test('should return default values', () => {
    const {result} = renderHook(() => useCounter());

    expect(result.current.counter).toBe(10);
    expect(typeof result.current.increment).toBe('function');
    expect(typeof result.current.decrement).toBe('function');
    expect(typeof result.current.reset).toBe('function');
  });

  test('the counter equal to 100', () => {
    const {result} = renderHook(() => useCounter(100));
    expect(result.current.counter).toBe(100);
  });

  test('should increment counter', () => {
    const { result } = renderHook(() => useCounter(0));
    
    act(() => {
      result.current.increment();
    });

    expect(result.current.counter).toBe(1);
  });
  
}); 