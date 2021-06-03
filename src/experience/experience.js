import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber'

import Floor from './floor.js';

const Experience = (props) => {
    return (
        <div id="experience-window">
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Floor />
            </Canvas>
        </div>
    );
};

export default Experience;