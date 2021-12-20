import { todoReducer } from '../../../components/08-useReducer/todoReducer';
import { demoTodos } from '../fixtures/demoTodo';

describe('Test in todoReducer', () => {

  test('Should return default value', () => {
    const state = todoReducer(demoTodos, {});
    console.log(state);

    expect(state).toEqual(demoTodos);
  });

  test('Should add TODO', () => {
    const newTodo = {
      id: 3,
      todo: 'Todo 3',
      done: false
    };
    const action = {
      type: 'add',
      payload: newTodo
    }

    const state = todoReducer(demoTodos, action);
    console.log(state);

    expect(state.length).toBe(3);
    expect(state).toEqual([...demoTodos, newTodo]);
  });

  test('Should delete TODO', () => {
    const todoToDelete = {
      id: 3,
      todo: 'Todo 3',
      done: false
    };
    const action = {
      type: 'delete',
      payload: todoToDelete
    }

    const state = todoReducer(demoTodos, action);
    console.log(state);

    expect(state.length).toBe(2);
  });

  test('Should toggle TODO', () => {
    const action = {
      type: 'toggle',
      payload: 1 
    }

    const state = todoReducer(demoTodos, action);
    console.log(state);

    expect(state[0].done).toBe(true);
    expect(state[1]).toBe(demoTodos[1]);

  });

});