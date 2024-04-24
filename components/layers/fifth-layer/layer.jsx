import React from 'react';

import styles from './layer.module.css';

const FifthLayer = () => {
    return (
        <div className={styles.container}>
            <img src="../src/assets/bike2.png" alt="" />
            <div className={styles.right_side}>
                Прокат велосипедов <br /><br />
                У нас вы можете взять на прокат <br />
                хорошо обслуженные и настроенные <br />
                велосипеды. Как раз мы находимся в <br />
                прекрасном парке!
            </div>
        </div>
    );
};

export default FifthLayer;