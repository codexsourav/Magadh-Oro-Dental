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
                <Image width={200} height={200} className={styles.bgContent} alt={`${image}`} src={image || 'https://www.herzing.edu/sites/default/files/2022-05/dental-hygienist-cleaning-teeth.jpg'} />
                {/* <h1>{title || "Root Canal Treatment"}</h1>
                <p>{desc || "It is a procedure that restores damaged teeth by removing the infected pulp."}</p>
             */}
                <div className={styles.container}>
                    <h1>{title || "Root Canal Treatment"}</h1>
                    <p>{desc || "It is a procedure that restores damaged teeth by removing the infected pulp."}</p>
                </div>
            </div>
        </>
    );
};

export default ServicesBox;