import React from 'react';

import styles from './layer.module.css';

const SecondLayer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.right_side}>
                <div className={styles.content_wrapper}>
                    <h3 className={styles.title}>Что мы предлагаем</h3>
                    <span className={styles.content}>
                        В нашей мастерской можно выполнить <br></br>
                        комплексное техническое обслуживание <br></br>
                        велосипеда, ремонт и настройку всех его узлов, <br></br>
                        шиномонтажные работы. Вовремя проведенное <br></br>
                        ТО велосипеда помогает избежать многих <br></br>
                        проблем и дорогого ремонта.  Все работы <br></br>
                        выполняем качественно и с душой. <br></br>
                    </span>
                </div>
            </div>
            <img src="../src/assets/bike1.png" alt="" />
        </div>
    );
};

export default SecondLayer;