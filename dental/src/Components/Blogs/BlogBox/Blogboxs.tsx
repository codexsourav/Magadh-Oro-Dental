import React from 'react';
import styles from './styles/blogbox.module.css'

const Blogboxs = () => {
    return (
        <div className={styles.blogbox}>
            <img src="https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg" alt="blogimg" />
            <h1>Cras accumsan nulla nec lacus ultricies placerat.</h1>
            <p>Curabitur sagittis libero tincidunt tempor finibus. Mauris at dignissim ligula, nec tristique orci.
            </p>
        </div>
    );
};

export default Blogboxs;