import React, { useRef, useEffect } from 'react';
import { PositionalAudio } from '@react-three/drei';
import { useBox, usePlane, useSphere } from '@react-three/cannon';

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
    position: [-5, 5, 0]
  }));

  const audio = useRef();

  const optionsAudio = {
    url: AlongTheRoad,
    autoplay: false,
    loop: false
  };

  useEffect(() => {
    audio.current.stop();
  });

  return (
    <group>
      <mesh
        ref={ref}
        onPointerOver={() => audio.current.play()}
        onPointerOut={() => audio.current.pause()}
        castShadow
        receiveShadow>
        <boxGeometry attach="geometry" />
        <meshStandardMaterial attach="material" color="grey" />
      </mesh>
      <PositionalAudio ref={audio} {...optionsAudio} />
    </group>
  )
}

const Sphere = () => {
  const [ref] = useSphere(() => ({
    mass: 10,
    position: [3, 10, 0]
  }));

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow>
      <sphereGeometry attach="geometry" args={[0.6, 20, 20]} />
      <meshStandardMaterial attach="material" color="grey" />
    </mesh>
  )
}

export { Plane, Box, Sphere };