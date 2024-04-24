import React from 'react';
import Header from '../../header/header';

import styles from './layer.module.css';

const FirstLayer = () => {
    return (
        <div className={styles.container}>
            <Header></Header>
            <div className={styles.content_wrapper}>
                <div className={styles.left_side}>
                    <h1 className={styles.title}>Веломастерская “Велозар”</h1>
                    <div className={styles.content_desc_wrapper}>
                        <span className={styles.content}>
                            Мы, мастера веломастерской «Велозар», как раз <br></br>
                            те самые счастливые люди, которые смогли <br></br>
                            превратить свое увлечение и хобби в профессию.<br></br>
                            Мы сами любим кататься и хотим чтобы Ваш <br></br>
                            двухколесный друг приносил Вам только радость <br></br>
                            и удовольствие от езды.<br></br>
                        </span>
                    </div>
                </div>
                <div className={styles.right_side}>
                    <img src="../src/assets/din.png" alt="dino" srcset="" />
                </div>
            </div>
        </div>
    );
};

export default FirstLayer;