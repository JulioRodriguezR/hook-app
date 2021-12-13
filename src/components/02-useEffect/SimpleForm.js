import React, { useEffect, useState } from "react";

import './effects.css';
import { Message } from "./Message";

export const SimpleForm = () => {

  const [formState, setFormState] = useState({ name: '', email: '' });

  const { name, email } = formState;

  useEffect(() => {
  }, []);

  useEffect(() => {
  }, [formState]);

  useEffect(() => {
  }, [email]);

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    });
  };

  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Your name"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          className="form-control"
          placeholder="example@email.com"
          autoComplete="off"
          value={email}
          onChange={handleInputChange}
        />

        {
          (name) && <Message />
        }

      </div>
    </>
  )

};
