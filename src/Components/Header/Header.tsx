import React from 'react';
import styles from './styles/header.module.css'

const Header = () => {
    return (
        <>
            <div className={`${styles.header} container`}>
                <div className={styles.content}>
                    <p className={styles.subtitle}>welcome To Magadh Oro Dental - Implant & Orthodontic Clinic</p>

                    <h3 className={styles.title} >Best Dental Clinic in Patna</h3>

                    <p className={styles.desc}> We offer a wide range of Dental Health Services & Cosmetic Dental Treatment, maintaining the highest standard of hygiene & Sterilization. We are equipped with modern instruments & lates technology.</p>
                    <a href="#" className={styles.bookBtn}>Book Now</a>
                    <p className={styles.callBtn}>
                        Call Now: +91 9135086087, 8292606814
                    </p>
                </div>
                <div className={styles.sideImage}>
                    <img src='/images/2.png' width="100%" />
                </div>

            </div>
        </>
    );
};

export default Header;