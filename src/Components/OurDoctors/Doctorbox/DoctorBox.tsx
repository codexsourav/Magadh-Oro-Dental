import React from 'react';
import { MdFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";
import styles from './styles/doctorbox.module.css'

interface doctordata {
    image: string,
    name: string,
    position: string,
    desc: string,
    fblink: string,
    inlink: string,
    xlink: string,
}

const DoctorBox = ({ desc, fblink, image, inlink, name, position, xlink }: doctordata) => {
    return (

        <div className={styles.box}>
            <div className={styles.info}>
                <img src={image} alt="doctor1" />
                <div className={styles.userInfo}>
                    <h3>{name}</h3>
                    <p>{position}</p>
                </div>
            </div>
            <p className={styles.desc}>
                {desc}
            </p>
            <div className={styles.link}>
                <a href={fblink}><MdFacebook /></a>
                <a href={inlink}><RiInstagramFill /></a>
                <a href={xlink} ><BsTwitterX /></a>
            </div>
        </div>

    );
};

export default DoctorBox;