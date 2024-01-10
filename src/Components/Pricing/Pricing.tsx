import React from 'react';
import styles from './styles/pricing.module.css'
import PricingBox from './PricingBox/PricingBox';
import { pricing } from '@/data/pricing';

const Pricing = () => {
    return (
        <div className={`${styles.pricing} container`} id='pricing'>
            <h1 className='title'>Pricing</h1>
            <h1 className='subtitle'>We offer Affordable Prices</h1>
            <div className={styles.ourPrices}>
                {pricing.map((e, i) => {
                    return <PricingBox key={"pricing-" + i} price='200.00' services={e.data} title={e.title} />;
                })}
                {/* <PricingBox price='200.00' services={["Fix dental  Implants - ₹15200", "Osstem dental Implant - ₹25200", "Crown for Implant - PFM - ₹7000", "Nobel Biocare dental Implant - ₹40200", "Crown for Implant - Full Ceramic - ₹15000", "Implant Supported Fixed Teeth (with 10 Implants) - ₹450000 (Full Mouth)"]} title='Dental Implants' /> */}
                {/* <PricingBox price='200.00' services={["Osstem dental Implant - ₹25200"]} title='test' />
                <PricingBox price='200.00' services={["Osstem dental Implant"]} title='test' />
                <PricingBox price='200.00' services={["Osstem dental Implant"]} title='test' />
                <PricingBox price='200.00' services={["Osstem dental Implant"]} title='test' />
                <PricingBox price='200.00' services={["Osstem dental Implant"]} title='test' /> */}
            </div>
        </div>
    );
};

export default Pricing;