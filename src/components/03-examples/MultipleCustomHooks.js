import React from 'react';

import { useFetch } from '../../hooks/useFetch';
import { useCouter } from '../../hooks/useCouter';

export const MultipleCustomHooks = () => {

  const { counter, increment } = useCouter(1);

  const { data, loading } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Custom Hooks</h1>
      <hr />
      {
        loading
          ?
          (
            <div className="alert alert-info text-center">
              Loading...
            </div>
          )
          :
          (
            <blockquote className="blockquote text-center">
              <div className="border border-2 rounded-0">

                <p className="mb-10">{quote}</p>
                <footer className="blockquote-footer">{author}</footer>

              </div>
              <button className="btn text-center" onClick={increment}>+1</button>
            </blockquote>
          )
      }
    </div>
  )
}
