"use client"

import React, { useState } from 'react';
import styles from './Styles/navbar.module.css'
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

import Image from 'next/image';
const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <>
            <div className={`${styles.navbar} container`}>
                <img alt='logo' src="/images/logo.png" width={200} height={200} style={{ display: "none" }} />

                <div className={`${styles.menu} ${showMenu ? styles.menuActive : null}`}>
                    <img alt='logo' src="/images/logo.png" width={200} height={200} />

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

                {!showMenu ? <CiMenuFries size={25} className={styles.menuBtn} style={{ display: "none" }} onClick={() => setShowMenu(true)} />
                    : <IoCloseOutline size={25} className={styles.menuBtn} style={{ display: "none" }} onClick={() => setShowMenu(false)} />}
            </div>
        </>
    );
};

export default Navbar;