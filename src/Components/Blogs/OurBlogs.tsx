import React from 'react';
import styles from './styles/blogstyle.module.css'
import Blogboxs from './BlogBox/Blogboxs';

const OurBlogs = () => {
    return (
        <div className={`${styles.ourblogs} container`}>
            <h1 className='title'>Our Blog</h1>
            <h1 className="subtitle">Latest Blogs & Updates</h1>
            <div className={styles.blogs}>
                <Blogboxs />
                <Blogboxs />
                <Blogboxs />
            </div>
            <a href="#" className={styles.actionBtn}>Read More</a>
        </div>
    );
};

export default OurBlogs;