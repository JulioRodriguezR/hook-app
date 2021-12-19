import React, { useState, useMemo } from 'react';

import { useCounter } from '../../hooks/useCounter';
import {heavyProccess} from '../../helpers/heavyProccess';
import '../02-useEffect/effects.css';

export const MemoHook = () => {

  const { counter, increment } = useCounter(600);
  const [show, setShow] = useState(true);
  const memoHeavyProccess = useMemo(() => heavyProccess(counter), [counter]);

  return (
    <>
      <h1>Counter: <small value={counter}></small></h1>
      <hr />
      <p>{memoHeavyProccess}</p>
      <button className="btn btn-primary" onClick={increment}>+1</button>
      <button className="btn btn-outline-primary ml-3" onClick={() => { setShow(!show) }}>
        Hide/Show {JSON.stringify(show)}
      </button>
    </>
  );

};
