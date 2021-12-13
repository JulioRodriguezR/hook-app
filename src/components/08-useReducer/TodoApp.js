import React, {useReducer} from 'react';

import { todoReducer } from './todoReducer';
import './styles.css';

const initialState = {
  id: new Date().getTime(),
  desc: 'Learn Redux',
  done: false
};

export const TodoApp = () => {

  const [state] = useReducer(todoReducer, initialState);
  console.log(state);

  return (
    <div>
      <h1>Todo App</h1>
      <hr />

      <ul>
        <li>Hello</li>
        <li>World</li>
      </ul>
    </div>
  )
}
