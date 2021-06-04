import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import { Plane, Box, Sphere } from './objects.js';

const Experience = (props) => {
    return (
        <div id="experience-window">
            <Canvas camera={{position: [-5, 10, 5], fov: 70}} shadowMap>
                <OrbitControls />
                <Stars radius={200} />
                <ambientLight intensity={0.1} />
                <directionalLight position={[0, 10, 0]} intensity={0.6} castShadow />
                <Physics>
                    <Box  />
                    <Sphere />
                    <Plane />
                </Physics>
            </Canvas>
        </div>
    );
};

export default Experience;