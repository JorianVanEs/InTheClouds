import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import { Plane, Box, Sphere } from './objects.js';

const Experience = (props) => {
    return (
        <div id="experience-window">
            <Canvas>
                <OrbitControls />
                <Stars radius={200} />
                <ambientLight />
                <pointLight position={[5, 10, 10]} />
                <Physics>
                    <Box />
                    <Sphere />
                    <Plane />
                </Physics>
            </Canvas>
        </div>
    );
};

export default Experience;