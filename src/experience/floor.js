import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

function Floor(props) {
    const mesh = useRef()

    return (
      <mesh
        {...props}
        ref={mesh}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="grey" />
      </mesh>
    )
}

export default Floor;