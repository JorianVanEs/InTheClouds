import React, { useRef, useState } from 'react';
import { useBox, usePlane, useSphere } from '@react-three/cannon';

const Plane = () => { 
  const [ref] = usePlane(() => ({
    position: [0,0,0],
    rotation: [-Math.PI / 2, 0, 0],
    status: "Static"
  }));

  return (
    <mesh
      ref={ref}
      receiveShadow>
      <planeBufferGeometry args={[10, 10, 3]} />
      <meshStandardMaterial color="white" />
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
      ref={ref} 
      castShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  )
}

const Sphere = () => {
  const [ref] = useSphere(() => ({
    mass: 3,
    position: [1, 3, 0]
  }));

  return (
    <mesh
      ref={ref}
      castShadow>
      <sphereGeometry args={[1, 20, 20]} />
      <meshStandardMaterial color="red" />
    </mesh>
  )
}

export { Plane, Box, Sphere };