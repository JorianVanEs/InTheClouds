import React, { useRef, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, Stars, useEdgeSplit } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

import { Plane, Wall, Box, FootBall, Star } from './objects.js';
import { Player } from './player.js';
import { Skybox } from './skybox.js';
import { Instructions, Questions, Reticle } from './text.js';
import { Clouds } from './clouds.js';

const Experience = (props) => {
    return (
        <div className="experience-window">
            <Canvas shadows sRBG>
                {/* <Stars radius={50} /> */}
                <Skybox />
                <ambientLight intensity={0.1} />
                <directionalLight position={[10, 15, 10]} intensity={0.6} castShadow />
                <fog attach='fog' args={["white", 0.1, 20]} />
                <Physics gravity={[0, -30, 0]}>
                    <Plane />   
                    {/* <Wall position={[0, 5.5, 10]} /> */}
                    {/* <Wall position={[0, 5.5, -10]} /> */}
                    {/* <Wall rotation={[0, -Math.PI / 2, 0]} position={[-10, 5.5, 0]} /> */}
                    {/* <Wall rotation={[0, -Math.PI / 2, 0]} position={[10, 5.5, 0]} /> */}
                    <Player position={[0,5,0]} />
                    {/* <Instructions position={[-12,10,-20]} /> */}
                    {/* <Questions position={[-4.5, 5, -10]} /> */}
                    <Reticle position={[-5, 6, -10.2]} />
                    {/* <Box  /> */}
                    <FootBall />
                    {/* <Star position={[0, 50, -50]} /> */}
                    <Clouds />
                </Physics>
            </Canvas>
        </div>
    );
};

export default Experience;