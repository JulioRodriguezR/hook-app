import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
  console.log('Increment');
  return (
    <div>
     <button onClick={() => increment(5)} className="btn btn-primary">+1</button> 
    </div>
  )
});
