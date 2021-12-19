import React from 'react';
import { shallow } from 'enzyme';

import { MultipleCustomHooks } from '../../../components/03-examples/MultipleCustomHooks';
import { useFetch } from '../../../hooks/useFetch';
import { useCounter } from '../../../hooks/useCounter';

jest.mock('../../../hooks/useFetch');
jest.mock('../../../hooks/useCounter');

describe('Test in <MultipleCustomHooks />', () => {

  useCounter.mockReturnValue({ counter: 10, increment: () => {} });

  test('Should show correctly', () => {
    useFetch.mockReturnValue({ data: null, loading: true, error: null });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper).toMatchSnapshot(); 
  });

  test('Should show correct info', () => {
    useFetch.mockReturnValue({
      data: [{ data: null, loading: true, error: null }],
      loading: false,
      error: null
    });

    const wrapper = shallow(<MultipleCustomHooks />);

    expect(wrapper.find('alert').exists()).toBe(false); 
    expect(wrapper.find('.mb-10').text().trim()).toBe('Hola Mundo'); 
  });

});