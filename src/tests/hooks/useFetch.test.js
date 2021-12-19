import { renderHook } from '@testing-library/react-hooks';

import { useFetch } from '../../hooks/useFetch';

describe('Test in useFetch', () => {

  test('should return default form', () => {
    const { result } = renderHook(() => useFetch(''));
    const {data, loading, error} = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  test('good info, loading false, error false', async() => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/api/users?page=2'));
    await waitForNextUpdate();

    const {data, loading, error} = result.current;

    expect(data.data.length > 0).toBe(true);
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  test('return error', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqreasds.in/api/users?page=2'));
    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toBe('Error loading');
  });

});