import React, {useEffect} from "react";

import {useForm} from '../../hooks/useForm'

import '../../effects.css';

export const FormWithCustomHook = () => {

  const [formValues, handleInputChange] = useForm({ name: '', email: '', pw: '' });

  const { name, email, pw } = formValues;

  useEffect(() => {
    // effect
    // return () => {
    //   cleanup
    // }
  }, [email])

  return (
    <>
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
        <input
          type="password"
          name="pw"
          className="form-control"
          placeholder="Your password"
          autoComplete="off"
          value={pw}
          onChange={handleInputChange}
        />
      </div>
    </>
  )

};

