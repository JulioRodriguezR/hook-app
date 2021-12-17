import React from 'react';

import { useForm } from '../../hooks/useForm'; 
import './styles.css';

export const TodoAdd = ({ handleAddTodo }) => {

  const [{ description }, handleInputChange, reset] = useForm({ description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (description.trim().lenght <= 1) return;

    const newTodo = { id: new Date().getTime(), desc: description, done: false };
    handleAddTodo(newTodo);
    reset();
  };

  return (
    <>
      <h4>Add TODO</h4>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" name="description" placeholder="Learn..." autoComplete="off" className="form-control" value={description} onChange={handleInputChange}/>
        <button className="btn btn-outline-primary mt-1 btn-block" >Add</button>
      </form>
    </>
  )
}
