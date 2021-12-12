import React, {useRef} from 'react'

export const FocusScreen = () => {

  // mutable Ref
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.select();
    console.log(inputRef);
  }

  return (
    <div>
     <input ref={inputRef} className="form-control" placeholder="Your name"/>
     <button className="btn btn-outline-primary mt-5" onClick={handleClick}>Focus</button>
    </div>
  )
}
