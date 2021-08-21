import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, PlaneBufferGeometry, MeshLambertMaterial, Mesh } from 'three';

import Smoke from './textures/smoke.png';

const Clouds = () => { 
    const mesh = useRef();

    // let loader = new TextureLoader();
    // loader.load(Smoke, texture => {
    // cloudGeometry = new PlaneBufferGeometry(1,1);
    //   material.current.map(texture);
    // })

    const texture = useLoader(TextureLoader, Smoke);

    const clouds = [];

    for(let i = 0; i < 10; i++){
      let rotation = 0;

      useFrame(() => {
        rotation = -Math.PI / (2 + 1);
      });

      const cloud = (
        <mesh
          ref={mesh}
          position={[(Math.random() * 20 - 10), 5.3, (Math.random() * 20 - 10)]}
          rotation={[-Math.PI / 2, 0, rotation]}
          receiveShadow>
          <planeBufferGeometry attach="geometry" args={[3, 3]} />
          <meshStandardMaterial map={texture} transparent opacity={0.9} depthWrite={false} />
        </mesh>
      );

      const createCloud = (key) => {
        const cld = useRef();

        useFrame(() => {
          cld.current.rotation.z = -Math.PI / (2 + 1);
        });

        return (
          <mesh
          ref={cld}
          position={[(Math.random() * 20 - 10), 5.3, (Math.random() * 20 - 10)]}
          rotation={[-Math.PI / 2, 0, rotation]}
          key={key}
          receiveShadow>
          <planeBufferGeometry attach="geometry" args={[3, 3]} />
          <meshStandardMaterial map={texture} transparent opacity={0.9} depthWrite={false} />
        </mesh>
        )
      }

      clouds.push(createCloud(i));
    }
  
    return clouds;
}
export { Clouds };