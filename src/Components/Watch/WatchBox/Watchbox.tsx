"use client"
import React, { useState } from 'react';
import styles from './styles/watchbox.module.css'
import YouTube from 'react-youtube';
import useWindowDimensions from '@/hooks/useWindowDimensions';
import { IoCloseOutline } from "react-icons/io5";
import { IoPlayCircle } from "react-icons/io5";
import Image from 'next/image';

interface watchData {
    title: string,
    desc: string,
    videoId: string,
    image: string,

}

const Watchbox = ({ desc, title, videoId, image }: watchData) => {
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
                <Image width={1200} height={1200} src={image} alt="blogimg" />

                <h1>{title}</h1>
                <p>{desc}</p>
            </div>
            {showvideo ? <div className={styles.showPlayer}>
                <YouTube videoId={videoId} opts={opts} />;
                <IoCloseOutline className={styles.closeVDO} onClick={() => setShowvideo(false)} />
            </div> : null}
        </>
    );
};

export default Watchbox;