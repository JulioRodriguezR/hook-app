import React from 'react';
import { shallow } from 'enzyme';

import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../fixtures/demoTodo';

describe('Test in <TodoList />', () => {

  const handleDelete = jest.fn();
  const handleToggle = jest.fn();

  const wrapper = shallow(
    <TodoList
      todos={demoTodos}
      handleDelete={handleDelete}
      handleToggle={handleToggle}
    />
  );

  test('Should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should 2 items TodoList', () => {
    expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
  }); 

});