import React from 'react';
import styles from './styles/about.module.css'
import Image from 'next/image';

const About = () => {
    return (
        <div className={`${styles.about} container`} id='about'>
            <div className={styles.imageSec}>
                <Image width={1200} height={1200} alt="aboutImage" src='/images/about.jpeg' />
            </div>
            <div className={styles.contentSec}>
                <h1 className='title' >About Us</h1>
                <h1 className='subtitle'>We Care For Your Dental Health</h1>
                <p> We have best team of specialized dentist - oral Maxillofacial surgen, Periodontist, Prosthodontist, Pediatric dentist, Cosmetic Dentist, Implantologist & Endodontist under one roof.</p>
                <a href="#" className={styles.actionBtn}>Book Now</a>
            </div>
        </div>
    );
};

export default About;