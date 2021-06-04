import React, { useRef, useState } from 'react';
import { useCylinder } from '@react-three/cannon';

const Player = () => { 
    const [ref] = useCylinder(() => ({
        mass: 1,
        position: [0,3,0],
        status: "Dynamic"
    }));
  
    return (
      <mesh
        ref={ref}>
        <cylinderBufferGeometry args={[0.5, 0.5, 1]} />
        <meshStandardMaterial color="white" />
      </mesh>
    )
}

export { Player };