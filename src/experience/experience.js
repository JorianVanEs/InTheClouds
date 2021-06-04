import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

import Floor from './floor.js';

const Experience = (props) => {
    return (
        <div id="experience-window">
            <Canvas>
                <OrbitControls />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Floor />
            </Canvas>
        </div>
    );
};

export default Experience;