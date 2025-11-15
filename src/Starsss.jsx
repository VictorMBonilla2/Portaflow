import React, { useEffect, useRef } from 'react'
import Starback from 'starback';

export default function Starssss() {
 const canvasRef = useRef(null);

  useEffect(() => {
    const starback = new Starback(canvasRef.current, {
      type: 'dot',
      quantity: 100,
      direction: 260,
      starSize:[0,1],
      backgroundColor: ['#0e1118'],
      randomOpacity: true,
  })

    return () => starback;
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-screen"
    />
  );
}
