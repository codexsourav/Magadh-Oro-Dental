import React from 'react';
import styles from './styles/ourdoctors.module.css'
import DoctorBox from './Doctorbox/DoctorBox';
import { doctors } from '@/data/pricing';


const OurDoctors = () => {
    return (
        <div className={`${styles.ourdoctors} container`} id='doctors'>
            <h1 className="title">Our Doctor</h1>
            <h1 className="subtitle">Best Expert Dentist in Patna</h1>
            <div className={styles.doctors}>
                {
                    doctors.map((e, i) => {
                        return <DoctorBox key={"doctor-" + i} image={e.image} position={e.post} desc={e.desc} name={e.name} fblink={e.links.fb} inlink={e.links.insta} xlink={e.links.twitter} />;
                    })
                }

            </div>
        </div>
    );
};

export default OurDoctors;