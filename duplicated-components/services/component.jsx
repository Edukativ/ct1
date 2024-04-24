import React from 'react';

import styles from './component.module.css'

const ServiceComponent = (props) => {
    return (
        <div style={{ backgroundColor: props.bgcolor }} className={styles.rectangle}>
            <div className={styles.wrapper}>
                <div className={styles.delimiter}></div>
                <div className={styles.desc}>{props.desc}</div>
            </div>
        </div>
    );
};

export default ServiceComponent;