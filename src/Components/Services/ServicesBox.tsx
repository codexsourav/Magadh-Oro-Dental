import React from 'react';
import styles from './styles/services.module.css'
import Image from 'next/image';

interface servicesData {
    image?: string,
    title?: string,
    desc?: string,
}

const ServicesBox = ({ desc, image, title }: servicesData) => {
    return (
        <>
            <div className={styles.box}>
                <Image width={200} height={200} alt={`${image}`} src={image || '/images/teeth.png'} />
                <h1>{title || "Root Canal Treatment"}</h1>
                <p>{desc || "It is a procedure that restores damaged teeth by removing the infected pulp."}</p>
            </div>
        </>
    );
};

export default ServicesBox;