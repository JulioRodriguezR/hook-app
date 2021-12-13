import React from 'react'

export const ShowIncrement = React.memo(({increment}) => {
  console.log('Entra');
  return (
    <div>
     <button onClick={() => increment()} className="btn btn-primary">+1</button> 
    </div>
  )
});
