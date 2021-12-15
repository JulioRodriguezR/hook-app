import React, { useReducer, useCallback, useState } from 'react';

import { todoReducer } from './todoReducer';
import './styles.css';

const initialState = [{
  id: new Date().getTime(),
  desc: 'Learn Redux',
  done: false
}];

export const TodoApp = () => {

  const [todos] = useReducer(todoReducer, initialState);
  console.log(todos);

  const [inputValue, setIputValue] = useState('Hello World');

  const handleInputChange = (e) => {
    setIputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim().length > 2) {
      setCategories(categories => [...categories, inputValue]);
    }
  };

  return (
    <div>
      <h1>Todo App ({todos.lenght})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos?.map((todo, i) =>
              <li key={todo.id} className="list-group-item d-flex align-items-center">
                <p className="text-center ">{i + 1}.{todo.desc}</p>
                <button className="btn btn-danger ml-2">Remove</button>
              </li>
            )}
          </ul>
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input type="text" name="description" placeholder="Learn ..." autoComplete="off" className="form-control" onChange={handleInputChange}/>
            <button className="btn btn-outline-primary mt-1 btn-block" onClick={increment}>Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};
