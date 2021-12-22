import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from '@testing-library/react-hooks';

import { demoTodos } from '../fixtures/demoTodo';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';

describe('Test in <TodoApp />', () => {

  const wrapper = shallow(<TodoApp />);

  Storage.prototype.setItem = jest.fn(() => { });

  test('Should show correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Should add TODO', () => {
    // Diferencia en cuanto la renderización del componente
    const wrapper = mount(<TodoApp />);
    act(() => {
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
      wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
    });

    expect(wrapper.find('h1').text().trim()).toBe('Todo App (2)');
  });


  test('Should remove TODO', () => {
    wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
    wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
    expect(wrapper.find('h1').text().trim()).toBe('Todo App (0)');
  });

});