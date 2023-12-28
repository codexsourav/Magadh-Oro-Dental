import React from 'react';
import ContactCard from './ContactView';
import styles from './styles/contactView/contactview.module.css'
import { ContactData } from '@/lib/models/contacts';

const ShowContacts = ({ contacts }: { contacts: ContactData[] }) => {

    return (
        <>
            <div className="container">
                <br />
                <br />
                <h1>Contacts List</h1>
                <br />
            </div>
            <div className={`${styles.ShowContacts} container`}>

                {
                    contacts.length == 0 ? <p>No Conatcts</p> : contacts.map((e, i) => {
                        return <ContactCard
                            name={e.name}
                            email={e.email}
                            mobile={e.phone}
                            message={e.message}
                            id={e._id}
                        />
                    })
                }

            </div>
            <br />
            <br />
        </>
    );
};

export default ShowContacts;