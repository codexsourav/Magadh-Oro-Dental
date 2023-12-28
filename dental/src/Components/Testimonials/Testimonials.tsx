import TestimonialBox from './TestimonialBox/TestimonialBox';
import styles from './styles/testimonials.module.css';


function Testimonials() {
    return (
        <div className={`${styles.testimonials} container`} id='testimonials'>
            <h1 className='title'>Testimonials</h1>
            <h2 className='subtitle' >Know What Our Clients Say About</h2>
            <div className={styles.testimonialBox}>
                <TestimonialBox />
                <TestimonialBox />
                <TestimonialBox />
                <TestimonialBox />
            </div>
        </div>
    )
}

export default Testimonials;