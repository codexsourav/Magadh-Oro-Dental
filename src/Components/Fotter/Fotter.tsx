import React from 'react';
import styles from './styles/fotter.module.css'
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { GoClock } from "react-icons/go";
import Image from 'next/image';

const Fotter = () => {
    return (
        <>

            <div className={`${styles.fotter} container`}>
                <div className={styles.section1}>
                    <Image src="/images/logo.png" alt="mylogo" width={1200} height={1200} />
                    <p>We offer a wide range of Dental Health Services & Cosmetic Dental Treatment, maintaining the highest standard of hygiene & Sterilization. We are equipped with modern instruments & latest technology.</p>
                    <ul>
                        <li>
                            <a href="mailto:magadhorodentalpatna@gmail.com"><MdOutlineAlternateEmail />  <span>magadhorodentalpatna@gmail.com</span></a>
                        </li>
                        <li>
                            <a href="tel:+91 8292606814"><MdOutlinePhone /> <span>+91 8292606814</span></a>
                        </li>
                    </ul>

                </div>
                <div className={styles.section2}>
                    <ul>
                        <li className={styles.title}>Our Links</li>
                        <li><a href="#header">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#doctors">Our Team</a></li>
                        <li><a href="#blog">Latest Blog</a></li>
                    </ul>
                </div>
                <div className={styles.section3}>
                    <ul>
                        <li className={styles.title}>Our Branches</li>
                        <li><a href="#">Branch 1 - K-108, Hanuman Nagar Rd, Kankarbagh, Hanuman Nagar, Patna, Bihar 800020</a></li>
                        <li><a href="#">Branch 2 - K-108, Hanuman Nagar Rd, Kankarbagh, Hanuman Nagar, Patna, Bihar 800020</a></li>
                        <li className={styles.opentime}>
                            <a href="#"><GoClock /> <span>+91 8292606814</span></a>
                        </li>
                    </ul>
                </div>
            </div>
            <p className={styles.fottertitle} > Copyright © 2023 Adarsh. All rights reserved.</p>
        </>
    );
};

export default Fotter;