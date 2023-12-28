import React from 'react';
import styles from './styles/mapstyle.module.css'

const Maps = () => {
    return (
        <div className={`${styles.maps} container`}>
            <h1 className="title">Our Branches</h1>
            <h1 className="subtitle">Visit Our Branches in Patna</h1>
            <div className={styles.ourBranches}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7196.892784402015!2d85.15116444109276!3d25.590078917691564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed596061ef8629%3A0x481f8bc3cf2c55ad!2sMagadh%20Oro%20Dental!5e0!3m2!1sen!2sin!4v1703677185932!5m2!1sen!2sin" />
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7197.390621271111!2d85.14676097770995!3d25.581801799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59f68075f749%3A0x91bdc66bcd24bc31!2sMagadh%20Oro%20Dental%20-%20Implant%20%26%20Orthodontic%20Clinic!5e0!3m2!1sen!2sin!4v1703677200405!5m2!1sen!2sin" />
            </div>
        </div>
    );
};

export default Maps;