import Image from 'next/image';
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
                        <ServicesBox desc='We provide painless single sitting root canal treatment, re-treatment of failed RCT by endodontist .' image='' title='Root Canal Treatment' />
                        <ServicesBox desc='It is a specialized in surgical procedures involving the mouth, jaw, face, and neck.' image='' title='Oral & Maxillofacial surgery' />
                        <ServicesBox desc='It specialized in providing oral care for infants, children and adolescents.' image='' title='Child Dentistry' />
                        <ServicesBox desc='It aims to diagnose gum diseases, preserving the health of the gums.' image='' title='Gums Treatment' />
                    </div>
                    <div className={styles.avatar}>
                        <Image width={1200} height={1200} alt='ServidesImageBox' src='/images/3.png' />
                    </div>
                    <div className={styles.servicesBox}>
                        <ServicesBox desc='It enhance the appearance of teeth and smiles through various treatments.' image='' title='Cosmetic Dentistry' />
                        <ServicesBox desc='Crown & Bridges repairs the damaged teeth, restoring aesthetics to the smile.' image='' title='Prosthetic Dentisry' />
                        <ServicesBox desc='We offer Traditional metal braces, Ceramic Braces & latest invisible aligners' />
                        <ServicesBox desc='Dental implants are artificial tooth roots that provide a strong foundation for fixed or removable replacement teeth.' image='' title='Dental Implants' />

                    </div>

                </div>
            </div>
        </>
    );
};

export default Services;