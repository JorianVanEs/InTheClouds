import React from 'react';
import { useFrame } from '@react-three/fiber';
import {Physics, useBox, usePlane, useSphere } from '@react-three/cannon';

const Plane = () => { 
  const [ref] = usePlane(() => ({
    position: [0,2,0],
    rotation: [-Math.PI / 2, 0, 0]
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

  const audio = new Audio();
  audio.src = 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3';

  return (
    <mesh
      ref={ref}
      onPointerOver={() => audio.play()}
      onPointerOut={() => audio.pause()}
      castShadow
      receiveShadow>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="grey" />
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
      <meshStandardMaterial attach="material" color="grey" />
    </mesh>
  )
}

export { Plane, Box, Sphere };