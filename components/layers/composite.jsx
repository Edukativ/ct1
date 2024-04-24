import React from 'react';

import FirstLayer from './first-layer/layer';
import SecondLayer from './second-layer/layer';
import ThirdLayer from './third-layer/layer';
import FourthLayer from './fourth-layer/layer';
import FifthLayer from './fifth-layer/layer';


const Composite = () => {
    return (
        <>
            <FirstLayer></FirstLayer>
            <SecondLayer></SecondLayer>
            <ThirdLayer></ThirdLayer>
            <FourthLayer></FourthLayer>
            <FifthLayer></FifthLayer>
        </>
    );
};

export default Composite;