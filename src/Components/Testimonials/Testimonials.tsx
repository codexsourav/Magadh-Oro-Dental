import TestimonialBox from './TestimonialBox/TestimonialBox';
import styles from './styles/testimonials.module.css';


function Testimonials() {
    return (
        <div className={`${styles.testimonials} container`} id='testimonials'>
            <h1 className='title'>Testimonials</h1>
            <h2 className='subtitle' >Know What Our Clients Say About</h2>
            <div className={styles.testimonialBox}>
                <TestimonialBox desc='“Got Incomplete RCT done at Raja bazar, had pain on that. Went Magadh Oro Dental, Dr.
                                    Archana Rani told that tooth require Re-RCT. It was done in 4-5 sitting because of
                                    heavy infection at tooth. Procedure was painless. Thanks doc for doing nice job.”' image='' name='Vineet Kumar' rating={5} />    

                <TestimonialBox desc='“Had pain in last molar teeth. My uncle recommend me to visit Dr. Abhishek kumar for
                                    that. He did root canal for that. Procedure was painless. Clinic was neat and clinic
                                    and hygienic atmosphere.”' image='' name='Prasant Pandey' rating={4} />

                <TestimonialBox desc='"Came to know about Magadh Oro dental through Google. Spoken Dr. Abhishek Kumar at
                                    phone, he become agree. He & his team doctors Dr. Lav Kumar did it in 3 sitting.
                                    Finally I am so happy, can eat and drink any thing. Thanks Dr. Abhishek and team.”
                                ' image='' name='Dinesh Kumar' rating={5} />

                <TestimonialBox desc='“I was facing teeth problem from last 2 month . Visited Magadh oro dental care, with
                                    the initial medication instant pain relief i got. Continued regular visit, the
                                    relieved with dental issues i had. Would recommend everyone!! One of the best
                                    practicationer in patna”' image='' name='Ashish Patel' rating={5} />

            </div>
        </div>
    )
}

export default Testimonials;