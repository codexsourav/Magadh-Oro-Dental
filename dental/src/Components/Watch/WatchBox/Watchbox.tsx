"use client"
import React, { useState } from 'react';
import styles from './styles/watchbox.module.css'
import YouTube from 'react-youtube';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { IoCloseOutline } from "react-icons/io5";
import { IoPlayCircle } from "react-icons/io5";


const Watchbox = () => {
    const [showvideo, setShowvideo] = useState(false)
    const { width, height } = useWindowDimensions();
    const opts = {
        height: height * 0.8,
        width: width * 0.8,
        playerVars: {
            autoplay: 1,
        },
    };
    return (
        <>
            <div className={styles.watchbox} onClick={() => setShowvideo(true)}>
                <IoPlayCircle className={styles.playbtn} />
                <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="blogimg" />

                <h1>Cras accumsan nulla nec lacus ultricies placerat.</h1>
                <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.
                </p>
            </div>
            {showvideo ? <div className={styles.showPlayer}>
                <YouTube videoId="2g811Eo7K8U" opts={opts} />;
                <IoCloseOutline className={styles.closeVDO} onClick={() => setShowvideo(false)} />
            </div> : null}
        </>
    );
};

export default Watchbox;