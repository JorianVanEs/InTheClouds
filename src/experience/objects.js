import React, { useRef, useState } from 'react';
import { Physics, useBox, usePlane, useSphere } from '@react-three/cannon';

const Plane = () => { 
  const [ref] = usePlane(() => ({
    position: [0,2,0],
    rotation: [-Math.PI / 2.04, 0, 0]
  }));

  return (
    <mesh
      ref={ref}
      receiveShadow>
      <planeBufferGeometry attach="geometry" args={[10, 10]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  )
}

const Box = () => {
  const [ref] = useBox(() => ({
    mass : 3,
    position: [-2, 5, 0]
  }));

  return (
    <mesh
      ref={ref} 
      castShadow
      receiveShadow>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="blue" />
    </mesh>
  )
}

const Sphere = () => {
  const [ref] = useSphere(() => ({
    mass: 3,
    position: [3, 5, 0]
  }));

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow>
      <sphereGeometry attach="geometry" args={[1, 20, 20]} />
      <meshStandardMaterial attach="material" color="red" />
    </mesh>
  )
}

export { Plane, Box, Sphere };