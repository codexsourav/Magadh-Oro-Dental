import React from 'react';
import styles from './styles/watch.module.css'
import Watchbox from './WatchBox/Watchbox';

const Watch = () => {
    return (
        <div className={`${styles.watch} container`}>
            <h1 className='title'>WATCh</h1>
            <h1 className='subtitle'>Our Experts Work</h1>
            <div className={styles.watchBoxes}>
                <Watchbox />
                <Watchbox />
                <Watchbox />
            </div>
            <a href="#" className={styles.actionBtn}>Watch More</a>
        </div>
    );
};

export default Watch;