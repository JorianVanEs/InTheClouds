import React, { useRef, useState } from 'react';
import { useBox, usePlane } from '@react-three/cannon';

const Plane = () => { 
  const [ref] = usePlane(() => ({
    position: [0,0,0],
    rotation: [-Math.PI / 2, 0, 0]
  }));

  return (
    <mesh
      ref={ref}>
      <planeBufferGeometry args={[10, 10, 10]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}

const Box = () => {
  const [ref] = useBox(() => ({
    mass : 1,
    position: [0, 4, 0]
  }));

  return (
    <mesh
      ref={ref}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="grey" />
    </mesh>
  )
}

const Sphere = (props) => {
  return (
    <mesh
      {...props}
      position={[1, 0.25, 1]}
      rotation={[0, 0, 0]}>
      <sphereGeometry args={[0.25, 20, 20]} />
      <meshStandardMaterial color="grey" />
    </mesh>
  )
}

export { Plane, Box, Sphere };