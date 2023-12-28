"use client";
import React, { useState } from 'react';
import styles from './styles/faqboxstyles.module.css'
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

interface faqData {
    qustion: string,
    desc: string,
}



const FaqBox = ({ desc, qustion }: faqData) => {
    const [show, setShow] = useState(false)
    return (
        <div className={styles.faqbox}>
            <div className={styles.info} onClick={() => setShow(!show)}>
                <p>{qustion}</p>
                {show ? <SlArrowUp size={20} /> : <SlArrowDown size={20} />}
            </div>
            {show ? <div className={styles.content}>
                <p>
                    {desc}
                </p>
            </div> : null}
        </div>
    );
};

export default FaqBox;