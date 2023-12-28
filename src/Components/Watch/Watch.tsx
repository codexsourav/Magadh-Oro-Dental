import React from 'react';
import styles from './styles/watch.module.css'
import Watchbox from './WatchBox/Watchbox';
import { YouTubeVideo } from '@/helper/getYoutubeVideos';
interface watchData { data: Array<YouTubeVideo>, ChannelId: string }

const Watch = ({ data, ChannelId }: watchData) => {
    return (
        <div className={`${styles.watch} container`}>
            <h1 className='title'>WATCh</h1>
            <h1 className='subtitle'>Our Experts Work</h1>
            <div className={styles.watchBoxes}>

                {
                    data.map((e: YouTubeVideo, i) => <Watchbox key={"video-" + i} image={e.snippet.thumbnails.medium.url} title={e.snippet.title} desc={e.snippet.description} videoId={e.id.videoId} />)
                }

            </div>
            <a href={`https://www.youtube.com/channel/${ChannelId}`} target='_blank' className={styles.actionBtn}>Watch More</a>
        </div>
    );
};

export default Watch;