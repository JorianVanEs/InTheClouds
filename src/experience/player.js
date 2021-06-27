import React, { useEffect, useRef, useState } from 'react';
import { extend, useThree, useFrame } from '@react-three/fiber';
import { useCylinder } from '@react-three/cannon';
import { PointerLockControls as PointerControls} from '@react-three/drei';
import { Vector3 } from 'three';

extend({ PointerControls });

const keyBindsActions= (key) => {
  const keys = {
    KeyW: 'moveForward',
    KeyS: 'moveBackwards',
    KeyA: 'moveLeft',
    KeyD: 'moveRight'
  };
  return keys[key];
}

const speed = 5;

const Player = () => {
    const { camera, gl } = useThree();
    const controls = useRef();

    const [player, api] = useCylinder(() => ({
        position: [0,2.5,0],
        mass: 10
    }));

    const [movement, setMovement] = useState({
      moveForward: false,
      moveBackwards: false,
      moveLeft: false,
      moveRight: false
    });

    useEffect(() => {
      const handleKeyDown = (event) => {
        if(keyBindsActions(event.code)){
          setMovement(state => ({...state, [keyBindsActions(event.code)]: true}));
        }
      };
      const handleKeyUp = (event) => {
        if(keyBindsActions(event.code)){
          setMovement(state => ({...state, [keyBindsActions(event.code)]: false}));
        }
      };
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
      }
    })

    const velocity = useRef([0,0,0]);

    useEffect(() => {
      api.velocity.subscribe((vel) => {
          velocity.current = vel;
      })
    }, [api.velocity]);

    useFrame(() => {
      // camera.position.copy(player.current.position);  

      document.addEventListener('click', () => {
        controls.current.lock();
      });

      const direction = new Vector3();
      const xVector = new Vector3(movement.moveForward ? 1 : 0 - (movement.moveBackwards ? 1 : 0), 0, 0);
      const zVector = new Vector3(0, 0, movement.moveLeft ? 1 : 0 - (movement.moveRight ? 1 : 0));
      direction.subVectors(xVector, zVector).normalize().multiplyScalar(speed).applyEuler(camera.rotation);
      api.velocity.set(direction.x, velocity.current[1], direction.z);

      // console.log(direction);

    });
  
    return (
        <mesh 
          ref={player}>
          <cylinderBufferGeometry args={[0.5, 0.5, 1, 50]} />
          <meshStandardMaterial color="red" />
          <PointerControls ref={controls} args={[camera, gl.domElement]} />
        </mesh>
    )
}

export { Player };