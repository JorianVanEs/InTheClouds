import React, { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { PositionalAudio } from '@react-three/drei';
import {Physics, useBox, usePlane, useSphere } from '@react-three/cannon';

import AlongTheRoad from './alongtheroad.mp3';

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

  const audio = useRef();

  const optionsAudio = {
    url: AlongTheRoad,
    distance: 0.8,
    autoplay: false,
    loop: false
  };

  useEffect(() => {
    audio.current.stop();
  });

  return (
    <mesh
      ref={ref}
      onPointerOver={() => audio.current.play()}
      onPointerOut={() => audio.current.pause()}
      castShadow
      receiveShadow>
      <boxGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="grey" />
      <PositionalAudio ref={audio} {...optionsAudio} />
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