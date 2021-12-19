import { renderHook, act } from '@testing-library/react-hooks';

import { useForm } from '../../hooks/useForm';

describe('Test in useForm', () => {

  const initialForm = {
    name: 'Admintest',
    email: 'email@msn.com'
  };

  test('should return default form', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toBe(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('should change form value (name propertye)', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Guesttest'
        }
      });
    });

    const [formValues] = result.current;
    expect(formValues).toStrictEqual({...initialForm, name: 'Guesttest'});
  });

  test('should reset form value', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, , reset] = result.current;

    act(() => {
      reset();
    });

    expect(formValues).toBe(initialForm);
    
  });

});