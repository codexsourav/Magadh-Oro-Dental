"use client"
import Image from 'next/image';
import styles from './styles/bestimonialbox.module.css';
import React, { useState } from 'react';
import Rating from 'react-rating';
interface testimonialData {
    image?: string,
    name?: string,
    desc?: string,
    rating?: number,
}


function TestimonialBox({ desc, image, rating = 5, name }: testimonialData) {

    return (
        <div className={styles.testimonialBox}>
            <div className={styles.userBox}>
                <div className={styles.imageWrapper}>
                    <img alt='test1' src={image || "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"} width={120} height={120} />
                </div>
                <div className={styles.info}>
                    <h4>{name || "User Name"}</h4>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<span>☆</span>}
                        fullSymbol={<span>★</span>}
                    />
                </div>
            </div>
            <p>{desc || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt repellendus earum, doloribus vel deserunt quam repudiandae accusamus odit iure id consequuntur ex neque necessitatibus consectetur mollitia. Natus, nemo architecto!"}</p>
        </div>
    );
}

export default TestimonialBox;
