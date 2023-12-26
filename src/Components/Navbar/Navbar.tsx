import React from 'react';
import styles from './Styles/navbar.module.css'
import Image from 'next/image';
const Navbar = () => {
    return (
        <>
            <div className={`${styles.navbar} container`}>
                <Image alt='logo' src="/images/logo.png" width={200} height={200} />
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About US</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                    <li>
                        <a href="#">Pricing</a>
                    </li>
                    <li>
                        <a href="#">Contact Us</a>
                    </li>
                </ul>
                <a href="#" className={styles.navbarBtn}>Book Now</a>
            </div>
        </>
    );
};

export default Navbar;