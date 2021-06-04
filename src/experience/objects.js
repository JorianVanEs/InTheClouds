import React, { useRef, useState } from 'react';

const Plane = (props) => {
    return (
      <mesh
        {...props}
        position={[0,0,0]}
        rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry args={[10, 10, 10]} />
        <meshStandardMaterial color="red" />
      </mesh>
    )
}

const Box = (props) => {
  return (
    <mesh
      {...props}
      position={[0, 0.5 ,0]}
      rotation={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="grey" />
    </mesh>
  )
}

const Sphere = (props) => {
  return (
    <mesh
      {...props}
      position={[1, 0.25, 1]}
      rotation={[0, 0, 0]}>
      <sphereGeometry args={[0.25, 20, 20]} />
      <meshStandardMaterial color="grey" />
    </mesh>
  )
}

export { Plane, Box, Sphere };