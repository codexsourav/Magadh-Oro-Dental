import ServicesBox from './ServicesBox';
import styles from './styles/services.module.css'

const Services = () => {
    return (
        <>
            <div className={`${styles.services} container`}>
                <h1 className="title">Our Services</h1>
                <h1 className="subtitle">What We Provide</h1>
                <div className={styles.servicesContent}>
                    <div className={styles.servicesBox}>
                        <ServicesBox />
                        <ServicesBox />
                        <ServicesBox />
                        <ServicesBox />

                    </div>
                    <div className={styles.avatar}>
                        <img src='/images/3.png' />
                    </div>
                    <div className={styles.servicesBox}>
                        <ServicesBox />
                        <ServicesBox />
                        <ServicesBox />
                        <ServicesBox />

                    </div>

                </div>
            </div>
        </>
    );
};

export default Services;