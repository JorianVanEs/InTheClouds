import React, { useState } from 'react';
import THREE, { Scene } from 'three';

const Experience = () => {
    const [display, setDisplay] = useState();

    if(checkCompat){

    } else {
        setDisplay("WebGL Not Working")
    }

    const scene = new Scene();

    return (
        <div id="experience-window">{display}</div>
    );
};

export default Experience;

const checkCompat = () => {
    if ( WEBGL.isWebGLAvailable() ) {
        return true;
    } else {
        const warning = WEBGL.getWebGLErrorMessage();
        return false;
    };
};