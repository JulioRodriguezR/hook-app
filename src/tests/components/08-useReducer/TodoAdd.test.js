import React from 'react';
import { shallow } from 'enzyme';

import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';

describe('Test in <TodoAdd />', () => {

  const handleAddTodo = jest.fn();

  const wrapper = shallow(
    <TodoAdd
      handleAddTodo={handleAddTodo}
    />
  );

  test('Should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Don't should call handleAddTodo", () => {
    const formSubmit = wrapper.find('form').prop('onSubmit');
    console.log(formSubmit);

    expect(handleAddTodo).toHaveBeenCalledTimes(0);
  });


  test("Should call handleAddTodo", () => {
    const value = 'Learn Reactjs';
    wrapper.find('input').simulate('change', {
      target: {
        value,
        name: 'description'
      }
    });

    const formSubmit = wrapper.find('form').prop('onSubmit');
    formSubmit({ preventDefault() { } });
    expect(handleAddTodo).toHaveBeenCalledTimes(1);

    expect(handleAddTodo).toHaveBeenCalledWith({
      id: expect.any(Number),
      desc: value,
      done: false
    });
  });

});