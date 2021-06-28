import React, { useRef } from 'react';
import { FontLoader } from 'three';

import BebasNeue from './bebasNeue.typeface.json';

const Instructions = (props) => {
    const font = new FontLoader().parse(BebasNeue);

    const textOptions = {
        font,
        size: 2,
        height: 0.3
    };

    const text = 'Look for the stars above!';
      

    return (
        <mesh {...props}>
            <textGeometry args={[text, textOptions]}/>
            <meshStandardMaterial attach="material" color="white" />
        </mesh>
    )
}

const Questions = (props) => {
    const font = new FontLoader().parse(BebasNeue);

    const textOptions = {
        font,
        size: 0.3,
        height: 0.3
    };

    const text = 'Druk op [ESC] en vervolgens op Feedback op feedback te geven.';
      

    return (
        <mesh {...props}>
            <textGeometry args={[text, textOptions]}/>
            <meshStandardMaterial attach="material" color="red" />
        </mesh>
    )
}

const Reticle = (props) => {
    const font = new FontLoader().parse(BebasNeue);

    const textOptions = {
        font,
        size: 0.6,
        height: 0.1
    };

    const text = 'Klik op de witte punt om te starten';
      

    return (
        <mesh {...props}>
            <textGeometry args={[text, textOptions]}/>
            <meshStandardMaterial attach="material" color="orange" />
        </mesh>
    )
}


export { Instructions, Questions, Reticle };