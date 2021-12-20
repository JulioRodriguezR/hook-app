import React from 'react';
import { shallow } from 'enzyme';

import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../fixtures/demoTodo';

describe('Test in <TodoListItem />', () => {

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(<TodoListItem
    todo={demoTodos[0]}
    index={0}
    handleDelete={handleDelete}
    handleToggle={handleToggle}
  />)

  test('Should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should show call handleDelete function', () => {
    wrapper.find('button').simulate('click');
    expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
  });

  test('Should show call handleToggle function', () => {
    wrapper.find('p').simulate('click');
    expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id); 
  });

  test('Should show text correctly', () => {
    expect(wrapper.find('p').isEmptyRender()).toBe(false); 
  });

});