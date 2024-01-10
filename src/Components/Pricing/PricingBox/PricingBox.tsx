import React from 'react';
import styles from './styles/pricingbox.module.css'
import { IoCheckmarkCircle } from "react-icons/io5";

interface priceData {
    title?: string,
    price?: string,
    services?: Array<string>,
}

const PricingBox = ({ price, services, title }: priceData) => {
    return (
        <div className={styles.pricingbox}>
            <div className={styles.info}>
                {/* <h1>{title}</h1> */}
                <h2>{title}</h2>
                <ul>
                    {
                        services?.map((e, i) => {
                            return <li key={"service-" + i}>
                                {/* <IoCheckmarkCircle /> */}
                                <span>{e}</span>
                            </li>
                        })
                    }

                </ul>
            </div>
            <a href="#" className={styles.bookBtn}>Book Now</a>
        </div>
    );
};

export default PricingBox;