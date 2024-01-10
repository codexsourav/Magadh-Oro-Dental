import React from 'react';
import styles from './styles/navtop.module.css'
import { PiPhoneFill } from "react-icons/pi";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
const NavTop = () => {
    return (
        <>
            <div className={styles.navtop}>
                <div className={styles.contact}>
                    <div><PiPhoneFill /> <p>+ 91 9382156026</p></div>
                    <div><MdMarkEmailUnread /><p> sourav0w@gmail.com</p></div>
                </div>
                <div className={styles.socail}>
                    <FaFacebookF />
                    <RiInstagramFill />
                    <FaXTwitter />
                    <FaYoutube />
                    <FaGoogle />
                </div>
            </div>
        </>
    );
};

export default React.memo(NavTop);

