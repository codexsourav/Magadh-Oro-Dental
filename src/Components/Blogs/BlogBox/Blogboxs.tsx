import React from 'react';
import styles from './styles/blogbox.module.css'
import Image from 'next/image';
import { BlogPost } from '@/lib/models/blogposts';

const Blogboxs = ({ blog }: { blog: BlogPost }) => {
    return (
        <div className={styles.blogbox}>
            <Image width={1200} height={1200} src={blog.image} alt="blogimg" />
            <h1>{blog.title}</h1>
            <p>{blog.desc}</p>
        </div>
    );
};

export default Blogboxs;