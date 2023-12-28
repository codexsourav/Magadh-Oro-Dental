import React from 'react';
import styles from './styles/services.module.css'

interface servicesData {
    image?: string,
    title?: string,
    desc?: string,
}

const ServicesBox = ({ desc, image, title }: servicesData) => {
    return (
        <>
            <div className={styles.box}>
                <img src={image || '/images/teeth.png'} />
                <h1>{title || "Root Canal Treatment"}</h1>
                <p>{desc || "It is a procedure that restores damaged teeth by removing the infected pulp."}</p>
            </div>
        </>
    );
};

export default ServicesBox;