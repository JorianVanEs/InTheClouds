import React, { useEffect, useRef, useState } from 'react';
import { extend, useThree, useFrame } from '@react-three/fiber';
import { useSphere } from '@react-three/cannon';
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

const Player = (props) => {
    const { camera, gl } = useThree();
    const controls = useRef();

    const [player, api] = useSphere(() => ({
        mass: 100,
        ...props
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

    const velocity = useRef([0,1,0]);

    useEffect(() => {
      api.velocity.subscribe((vel) => {
          velocity.current = vel;
      })
    }, [api.velocity]);

    useFrame(() => {
      camera.position.copy(player.current.position);   

      document.addEventListener('click', () => {
        controls.current.lock();
      });

      const direction = new Vector3();
      const xVector = new Vector3(movement.moveRight ? 1 : 0 - (movement.moveLeft ? 1 : 0), 0, 0);
      const zVector = new Vector3(0, 0, movement.moveForward ? 1 : 0 - (movement.moveBackwards ? 1 : 0));
      direction.subVectors(xVector, zVector).normalize().multiplyScalar(speed).applyEuler(camera.rotation);
      api.velocity.set(direction.x, velocity.current[1], direction.z);

    });
  
    return (
        <mesh
          ref={player}>
          <sphereBufferGeometry args={[1, 1, 1, 100]} />
          <meshStandardMaterial color="red" />
          <PointerControls ref={controls} args={[camera, gl.domElement]} />
        </mesh>
    )
}

export { Player };