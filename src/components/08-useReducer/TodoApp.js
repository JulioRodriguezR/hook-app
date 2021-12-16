import React, { useReducer, useEffect } from 'react';

import { todoReducer } from './todoReducer';
import {useForm} from '../../hooks/useForm';
import './styles.css';

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || []; 
  // return [{
  //   id: new Date().getTime(),
  //   desc: 'Learn Redux',
  //   done: false
  // }];
};

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [{description}, handleInputChange, reset] = useForm({
    description:''
  });
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleDelete = (todoId) => {
    console.log(todoId);
    
    dispatch({
      type: 'delete',
      payload: todoId 
    });
  };

  const handleToggle = (todoId) => {
    console.log(todoId);

    dispatch({
      type: 'toggle',
      payload: todoId
    });
  };

  const handleSubmit = (e) => {
    // Prevent refres
    e.preventDefault();

    if (description.trim().lenght <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    };
    const action = {
      type: 'add',
      payload: newTodo
    };

    dispatch(action);
    reset();
  };

  return (
    <div>
      <h1>Todo App ({todos.lenght})</h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <ul className="list-group list-group-flush">
            {todos?.map((todo, i) =>
              <li key={todo.id} className="list-group-item">
                <p className={`${todo.done && 'complete'}`} onClick={() => handleToggle(todo.id)}>{i + 1}. {todo.desc}</p>
                <button className="btn btn-danger ml-2" onClick={() => handleDelete(todo.id)}>Remove</button>
              </li>
            )}
          </ul>
        </div>
        <div className="col-5">
          <h4>Add TODO</h4>
          <hr />
          <form onSubmit={handleSubmit}>
            <input type="text" name="description" placeholder="Learn..." autoComplete="off" className="form-control" value={description} onChange={handleInputChange}/>
            <button className="btn btn-outline-primary mt-1 btn-block" >Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};
