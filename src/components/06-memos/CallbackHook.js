import React, { useState, useCallback } from 'react';

import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  /**
   * 1. Cuando mandamos una funcion a un componente hijo
   * 2. Cuando existe un usEffect, para que no se dispare cada vez que se renderice 
   */

  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter(counter + 1);
  // }

  const increment = useCallback((num) => {
    setCounter(c => c + num);
  }, [setCounter]);

  return (
    <div>
      <h1>use Callback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  )
}
