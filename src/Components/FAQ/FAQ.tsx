import React from 'react';
import styles from './styles/faq.module.css'
import FaqBox from './faqbox/FaqBox';
import Image from 'next/image';
import { faqData } from '@/data/pricing';
const FAQ = () => {
    return (
        <div className={`${styles.faq} container`} id='faq'>
            <div className={styles.imgsec}>
                <Image src="/images/1.png" alt="help" width={1200} height={1200} />
            </div>
            <div className={styles.faqsection}>
                <h1 className='title'>FAQ</h1>
                <h2 className='subtitle'>Frequently Asked Question</h2>
                <div className={styles.faqbox}>
                    {
                        faqData.map((e, i) => {

                            return <FaqBox qustion={e.qus} desc={e.ans} key={"faq-" + i} />
                        })
                    }

                </div>
            </div>

        </div>
    );
};

export default FAQ;