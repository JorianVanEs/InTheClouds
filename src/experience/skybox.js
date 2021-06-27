import { useThree } from '@react-three/fiber';
import { CubeTextureLoader } from 'three';

import ImgOne from './skybox/corona_ft.png';
import ImgTwo from './skybox/corona_bk.png';
import ImgThree from './skybox/corona_up.png';
import ImgFour from './skybox/corona_dn.png';
import ImgFive from './skybox/corona_rt.png';
import ImgSix from './skybox/corona_lf.png';

const Skybox = () => {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    const texture = loader.load([
        ImgOne,
        ImgTwo,
        ImgThree,
        ImgFour,
        ImgFive,
        ImgSix
      ]);
    scene.background = texture;
    return null;
};

export { Skybox };