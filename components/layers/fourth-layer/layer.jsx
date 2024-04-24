import React from 'react';

import styles from './layer.module.css';
import ServiceComponent from '../../../duplicated-components/services/component';

const FourthLayer = () => {
    return (
        <div className={styles.container}>
            <ServiceComponent bgcolor={"#22356F"} desc={"Годовое ТО"}></ServiceComponent>
            <ServiceComponent bgcolor={"#0052C1"} desc={"Выравнивание колес"}></ServiceComponent>
            <ServiceComponent bgcolor={"#76B58B"} desc={"Настройка переключателей"}></ServiceComponent>
        </div>
    );
};

export default FourthLayer;