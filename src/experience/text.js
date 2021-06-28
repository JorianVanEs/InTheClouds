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

export { Instructions };