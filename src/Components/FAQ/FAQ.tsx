import React from 'react';
import styles from './styles/faq.module.css'
import FaqBox from './faqbox/FaqBox';
import Image from 'next/image';
const FAQ = () => {
    return (
        <div className={`${styles.faq} container`}>
            <div className={styles.box}></div>
            <div className={styles.imgsec}>
                <Image src="/images/1.png" alt="help" width={1200} height={1200} />
            </div>
            <div className={styles.faqsection}>
                <h1 className='title'>FAQ</h1>
                <h2 className='subtitle'>Frequently Asked Question</h2>
                <div className={styles.faqbox}>
                    <FaqBox qustion=' Some information about the verification attempt?' desc=' Just a heads up, this code will expire in 20 minutes for security reasons. If you did not recently attempt to log in to GoDaddy, you should reset your password and get in touch with one of our GoDaddy Guides. ' />
                    <FaqBox qustion=' Some information about the verification attempt?' desc=' Just a heads up, this code will expire in 20 minutes for security reasons. If you did not recently attempt to log in to GoDaddy, you should reset your password and get in touch with one of our GoDaddy Guides. ' />
                    <FaqBox qustion=' Some information about the verification attempt?' desc=' Just a heads up, this code will expire in 20 minutes for security reasons. If you did not recently attempt to log in to GoDaddy, you should reset your password and get in touch with one of our GoDaddy Guides. ' />
                    <FaqBox qustion=' Some information about the verification attempt?' desc=' Just a heads up, this code will expire in 20 minutes for security reasons. If you did not recently attempt to log in to GoDaddy, you should reset your password and get in touch with one of our GoDaddy Guides. ' />
                    <FaqBox qustion=' Some information about the verification attempt?' desc=' Just a heads up, this code will expire in 20 minutes for security reasons. If you did not recently attempt to log in to GoDaddy, you should reset your password and get in touch with one of our GoDaddy Guides. ' />

                </div>
            </div>

        </div>
    );
};

export default FAQ;