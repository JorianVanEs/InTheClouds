import React, { useRef, useEffect } from 'react';
import { useLoader } from '@react-three/fiber';
import { PositionalAudio } from '@react-three/drei';
import { useBox, usePlane, useSphere } from '@react-three/cannon';
import { TextureLoader, RepeatWrapping, PlaneBufferGeometry, MeshLambertMaterial, Mesh } from 'three';

import AlongTheRoad from './alongtheroad.mp3';
import Tiles from './textures/tiles.jpg';
import Ball from './textures/ball.jpg';
import Brick from './textures/brick.jpg';

const Plane = () => { 
  const [ref] = usePlane(() => ({
    type: 'Static',
    position: [0,5,0],
    rotation: [-Math.PI / 2, 0, 0]
  }));

  const texture = useLoader(TextureLoader, Tiles);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(10, 10);

  return (
    <mesh
      ref={ref}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshStandardMaterial attach="material" map={texture} toneMapped={false} />
    </mesh>
  )
}

const Wall = (props) => {
  const dimentions = [20, 1, 0.3];
  const [ref] = useBox(() => ({
    mass: 10,
    type: 'Static',
    args: dimentions,
    ...props
  }));

  const texture = useLoader(TextureLoader, Brick);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(14, 1);

  return (
    <mesh
      ref={ref}>
      <boxGeometry attach="geometry" args={dimentions} />
      <meshStandardMaterial attach="material" map={texture} toneMapped={false}  />
    </mesh>
  )
}

const Box = () => {
  const [ref] = useBox(() => ({
    mass: 10,
    position: [-5, 10, 0]
  }));

  const audio = useRef();

  const optionsAudio = {
    url: AlongTheRoad,
    autoplay: false,
    loop: false,
    position: [0,0,0]
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
      <boxGeometry attach="geometry" position={[0,0,0]} args={[2, 2, 2]} />
      <meshStandardMaterial attach="material" color="grey" />
      <PositionalAudio ref={audio} {...optionsAudio} />
    </mesh>
  )
}

const FootBall = () => {
  const [ref] = useSphere(() => ({
    mass: 30,
    position: [5, 15, 0],
    type: 'Dynamic'
  }));

  const texture = useLoader(TextureLoader, Ball);
  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(2, 2);

  return (
    <mesh
      ref={ref}
      castShadow
      receiveShadow>
      <sphereGeometry attach="geometry" args={[1, 64, 64]} />
      <meshStandardMaterial attach="material" map={texture} toneMapped={false} />
    </mesh>
  )
}

const Star = (props) => {
  const [ref] = useSphere(() => ({
    ...props
  }));

  const audio = useRef();

  const optionsAudio = {
    url: AlongTheRoad,
    autoplay: false,
    loop: false,
    position: [0,0,0],
    distance: 0.8
  };

  useEffect(() => {
    audio.current.stop();
  });

  return (
    <mesh
    ref={ref}
    onPointerOver={() => audio.current.play()}
    onPointerOut={() => audio.current.pause()}>
      <sphereGeometry attach="geometry" args={[1, 64, 64]} />
      <meshStandardMaterial attach="material" color="yellow" />
      <PositionalAudio ref={audio} {...optionsAudio} />
    </mesh>
  );
};

export { Plane, Wall, Box, FootBall, Star };