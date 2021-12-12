import React, { useEffect, useState } from 'react'

export const Message = () => {

  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const { x, y } = coords;

  useEffect(() => {
    const mouseOver = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    }
    window.addEventListener('mouseover', mouseOver)

    return () => {
      // Cleanup: Retorno de limpieza
      window.removeEventListener('mouseover', mouseOver)
    }
  }, [])

  return (
    <div>
      <h3>Message</h3>
      <p>
        x {x} y {y}
      </p>
    </div>
  )
}
