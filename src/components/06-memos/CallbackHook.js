import React, { useState, useCallback } from 'react';

import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  const increment = () => {
    setCounter(counter + 1);
  }

  useCallback(() => {
    setCounter(c => c + 1);
  }, [setCounter]);

  return (
    <div>
      <h1>use Callback Hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={increment} />
    </div>
  )
}
