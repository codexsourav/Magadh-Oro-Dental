import React from 'react';
import styles from './styles/pricing.module.css'
import PricingBox from './PricingBox/PricingBox';

const Pricing = () => {
    return (
        <div className={`${styles.pricing} container`}>
            <h1 className='title'>Pricing</h1>
            <h1 className='subtitle'>We offer Affordable Prices</h1>
            <div className={styles.ourPrices}>
                <PricingBox price='200.00' services={["subervice 1", "subservice 2"]} title='test' />
                <PricingBox price='200.00' services={["subervice 1", "subservice 2"]} title='test' />
                <PricingBox price='200.00' services={["subervice 1", "subservice 2"]} title='test' />
                <PricingBox price='200.00' services={["subervice 1", "subservice 2"]} title='test' />
                <PricingBox price='200.00' services={["subervice 1", "subservice 2"]} title='test' />
                <PricingBox price='200.00' services={["subervice 1", "subservice 2"]} title='test' />
            </div>
        </div>
    );
};

export default Pricing;