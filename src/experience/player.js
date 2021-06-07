import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useCylinder } from '@react-three/cannon';
import { PerspectiveCamera } from '@react-three/drei';

const Player = (props) => {
    const playerOptions = {
      fov: 70,
      position: [0, 3, 0],
      rotation: [0, Math.PI / 2, 0],
      makeDefault: true
    }

    const player = useRef();

    const [ref] = useCylinder(() => ({
        mass: 2,
        position: [0,0,0],
        status: "Dynamic"
    }));

    useFrame((_, delta) => {
      console.log("Hey, I'm executing every frame!");
    });
  
    return (
      <PerspectiveCamera
        {...playerOptions}
        ref={player}>
        <mesh
          ref={ref}>
          <cylinderBufferGeometry args={[0.5, 0.5, 1, 50]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </PerspectiveCamera>
    )
}

export { Player };