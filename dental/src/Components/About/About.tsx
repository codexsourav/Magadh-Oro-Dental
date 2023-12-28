import React from 'react';
import styles from './styles/about.module.css'

const About = () => {
    return (
        <div className={`${styles.about} container`}>
            <div className={styles.imageSec}>
                <img src='/images/4.png' />
            </div>
            <div className={styles.contentSec}>
                <h1 className='title' >About Us</h1>
                <h1 className='subtitle'>We Care For Your Dental Health</h1>
                <p>We offer a wide range of Dental Health Services & Cosmetic Dental Treatment, maintaining the highes We offer a wide range of Dental Health Services & Cosmetic Dental Treatment, maintaining the highest standard of hygiene & Sterilization. We are equipped with modern instruments & lates technology.t standard of hygiene & Sterilization. We are equipped with modern instruments & lates technology.</p>
                <a href="#" className={styles.actionBtn}>Book Now</a>
            </div>
        </div>
    );
};

export default About;