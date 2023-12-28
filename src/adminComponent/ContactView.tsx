import React, { useState } from 'react';
import styles from './styles/contactView/contactview.module.css'; // Import the CSS module
import MakeApiRequest from '@/helper/makeApiRequest';

interface ContactData {
    name: string;
    email: string;
    mobile: string;
    message: string;
    id: string;
}

const ContactCard: React.FC<ContactData> = ({ name, email, mobile, message, id }) => {
    const [deleteData, setDelete] = useState<boolean>(false);
    const deleteConatct = async () => {
        setDelete(true);
        const makeapi = new MakeApiRequest("/api/contact/" + id, "", "DELETE");
        await makeapi.send();
    };
    return (
        <div className={styles['contact-card']}>

            <h3>Contact Information</h3>
            <div>
                <strong>Name:</strong> {name}
            </div>
            <div>
                <strong>Email:</strong> {email}
            </div>
            <div>
                <strong>Mobile:</strong> {mobile}
            </div>
            <div>
                <strong>Message:</strong> {message}
            </div>
            <br />
            {deleteData ? null : <>
                <a href={"mailto:" + email} className="mybtn" style={{ marginRight: "15px" }}>Send Mail</a>
                <button className="mybtn danger" onClick={deleteConatct}>Delete</button>
            </>}

        </div>
    );
};

export default ContactCard;
