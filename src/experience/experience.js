import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

import { Plane, Box, Sphere } from './objects.js';

const Experience = (props) => {
    return (
        <div id="experience-window">
            <Canvas>
                <OrbitControls />
                <Stars radius={200} />
                <ambientLight />
                <pointLight position={[5, 10, 10]} />
                <Box />
                <Sphere />
                <Plane />
            </Canvas>
        </div>
    );
};

export default Experience;