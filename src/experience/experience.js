import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, Stars } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import { Plane, Box, Sphere } from './objects.js';
import { Player } from './player.js';
import { Skybox } from './skybox.js';

const Experience = (props) => {
    return (
        <div id="experience-window">
            <Canvas shadows sRBG>
                {/* <Stars radius={200} /> */}
                <Skybox />
                <ambientLight intensity={0.1} />
                <directionalLight position={[10, 10, 10]} intensity={0.6} castShadow />
                <Physics gravity={[0, -30, 0]}>
                    <Plane />
                    <Player position={[0,5,0]} />
                    <Box  />
                    <Sphere />
                </Physics>
            </Canvas>
        </div>
    );
};

export default Experience;