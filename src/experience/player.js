import React, { useRef, useState } from 'react';
import { extend, useThree, useFrame } from '@react-three/fiber';
import { useCylinder } from '@react-three/cannon';
import { PerspectiveCamera, PointerLockControls as PointerControls} from '@react-three/drei';

extend({ PointerControls })

const Player = (props) => {
    const { camera, gl } = useThree();
    const controls = useRef();

    const [player] = useCylinder(() => ({
        mass: 0,
        position: [0,3,0],
        status: "Dynamic"
    }));

    useFrame(() => {
      camera.position.copy(player.current.position);  

      document.addEventListener('click', () => {
        controls.current.lock();
      })
    });
  
    return (
      <>
        <PointerControls ref={controls} args={[camera, gl.domElement]} />
        <mesh
          ref={player}>
          {/* <cylinderBufferGeometry args={[0.5, 0.5, 1, 50]} />
          <meshStandardMaterial color="red" /> */}
        </mesh>
      </>
    )
}

export { Player };