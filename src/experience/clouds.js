import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, PlaneBufferGeometry, MeshLambertMaterial, Mesh } from 'three';

import Smoke from './textures/smoke.png';

const Clouds = () => { 
    const mesh = useRef();

    const texture = useLoader(TextureLoader, Smoke);

    const clouds = [];

    for(let i = 0; i < 1000; i++){

      const createCloud = (key) => {
        const cld = useRef();

        useFrame(({clock}) => {
          const a = clock.getElapsedTime();
          cld.current.rotation.z = a * 0.1;
        });

        return (
          <mesh
          ref={cld}
          position={[(Math.random() * 100 - 50), 5.3, (Math.random() * 100 - 50)]}
          rotation={[-Math.PI / 2, 0, 0]}
          key={key}
          receiveShadow>
          <planeBufferGeometry attach="geometry" args={[6, 6]} />
          <meshStandardMaterial map={texture} transparent depthWrite={false} />
        </mesh>
        )
      }

      clouds.push(createCloud(i));
    }
  
    return clouds;
}
export { Clouds };