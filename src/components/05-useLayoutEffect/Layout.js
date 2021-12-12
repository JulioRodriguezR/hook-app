import React, { useState, useRef, useLayoutEffect } from 'react'

import { useFetch } from '../../hooks/useFetch';
import './layout.css';

export const Layout = () => {

  const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);
  const { quote } = !!data && data[0];

  const pTag = useRef();
  const [boxSize, setBoxSize] = useState({});

  useLayoutEffect(() => {
    // Mediciones luego se haya renderizado el html
    setBoxSize(pTag.current.getBoundingClientRect());
  }, [quote])

  return (
    <div>
      <h1>Layout Effect</h1>
      <hr />

      <blockquote className="blockquote text-right">

        <p ref={pTag} className="mb-0">{quote}</p>

      </blockquote>

      <pre>{JSON.stringify(boxSize, null)}</pre>

    </div>
  )
}
