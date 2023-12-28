import React from 'react';
import styles from './styles/ourdoctors.module.css'
import DoctorBox from './Doctorbox/DoctorBox';


const OurDoctors = () => {
    return (
        <div className={`${styles.ourdoctors} container`}>
            <h1 className="title">Our Doctor</h1>
            <h1 className="subtitle">Best Expert Dentist in Patna</h1>
            <div className={styles.doctors}>
                <DoctorBox image='https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg' position='position name' desc='Just a heads up, this code will expire in 20 minutes for security reasons. If you did not recently attempt to log in to GoDaddy,' name='sourav' fblink='#' inlink='#' xlink='#' />
                <DoctorBox image='https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg' position='position name' desc='Just a heads up, this code will expire in 20 minutes for security reasons. If you did not recently attempt to log in to GoDaddy,' name='sourav' fblink='#' inlink='#' xlink='#' />
                <DoctorBox image='https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg' position='position name' desc='Just a heads up, this code will expire in 20 minutes for security reasons. If you did not recently attempt to log in to GoDaddy,' name='sourav' fblink='#' inlink='#' xlink='#' />
                <DoctorBox image='https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg' position='position name' desc='Just a heads up, this code will expire in 20 minutes for security reasons. If you did not recently attempt to log in to GoDaddy,' name='sourav' fblink='#' inlink='#' xlink='#' />
                <DoctorBox image='https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg' position='position name' desc='Just a heads up, this code will expire in 20 minutes for security reasons. If you did not recently attempt to log in to GoDaddy,' name='sourav' fblink='#' inlink='#' xlink='#' />
                <DoctorBox image='https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg' position='position name' desc='Just a heads up, this code will expire in 20 minutes for security reasons. If you did not recently attempt to log in to GoDaddy,' name='sourav' fblink='#' inlink='#' xlink='#' />


            </div>
        </div>
    );
};

export default OurDoctors;