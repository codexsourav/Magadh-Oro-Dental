import React from 'react';
import styles from './styles/blogstyle.module.css'
import Blogboxs from './BlogBox/Blogboxs';
import { BlogPost } from '@/lib/models/blogposts';

const OurBlogs = ({ blogs }: { blogs: BlogPost[] }) => {
    return (
        <div className={`${styles.ourblogs} container`} id='blog'>
            <h1 className='title'>Our Blog</h1>
            <h1 className="subtitle">Latest Blogs & Updates</h1>
            <div className={styles.blogs}>
                {
                    blogs.map((e, i) => <Blogboxs blog={e} key={e._id} />)
                }

            </div>
            <a href="#" className={styles.actionBtn}>Read More</a>
        </div>
    );
};

export default OurBlogs;