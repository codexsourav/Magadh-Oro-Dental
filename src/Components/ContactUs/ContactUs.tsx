"use client"

import styles from './styles/contactus.module.css';
import { useState } from 'react';
import { mailTypes } from '@/helper/nodemailer';
import MakeApiRequest from '@/helper/makeApiRequest';
import { toast } from 'react-toastify';
import { validateEmail } from '@/helper/emailValidate';


function ContactUs() {
    const [loading, setLoading] = useState<boolean>(false);
    const [contactForm, setContactForm] = useState<mailTypes>({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handelForm = (e: HTMLInputElement | HTMLTextAreaElement) => {
        setContactForm({ ...contactForm, [e.name]: e.value });
    }

    const sendForm = async () => {

        if (contactForm.name.length == 0 || contactForm.phone.length == 0 || contactForm.email.length == 0 || contactForm.message.length == 0) {
            toast.info("Please Fill All Content");
        } else if (contactForm.phone.length != 10) {
            toast.info("Enter Valid Mobile");
        } else if (!validateEmail(contactForm.email)) {
            toast.info("Enter Valid Email ID");
        } else {

            setLoading(true);
            const makeApiRequest = new MakeApiRequest("/api/", contactForm, "POST");
            try {
                const response = await makeApiRequest.send();
                setLoading(false);
                if (response.success == true) {
                    toast.success("Email Send Successfully");
                    setContactForm({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                    });
                }
            } catch (error) {
                toast.error("Email Send Field! Error");
                setLoading(false);
            }

        }
    }

    return (
        <div className={`${styles.contactUs} container`} id='contactus'>
            <h1 className='title'>CONTACT US</h1>
            <h2 className="subtitle">Connect With Our Doctors</h2>
            <div className={styles.contactBox}>
                <div className={styles.imgSec}>
                    <img src="/images/5.png" alt='contact us' width={2000} height={2000} />
                </div>
                <div className={styles.form}>
                    <div className={styles.formsec}>

                        <input name='name' value={contactForm.name} placeholder='Name' type='text' onChange={(e) => handelForm(e.target)} />
                    </div>
                    <div className={styles.formsec}>

                        <input name='email' value={contactForm.email} placeholder='Email' type='email' onChange={(e) => handelForm(e.target)} />
                    </div>
                    <div className={styles.formsec}>

                        <input name='phone' value={contactForm.phone} placeholder='Mobile Number' type='number' onChange={(e) => handelForm(e.target)} />
                    </div>
                    <div className={styles.formsec}>

                        <textarea name='message' value={contactForm.message} placeholder='Your Message' onChange={(e) => handelForm(e.target)} />
                    </div>
                    <button className={styles.actionBtn} onClick={loading ? undefined : sendForm} >{loading ? "Sending.." : "Send Email"}</button>
                </div>
            </div>

        </div>
    )
}
export default ContactUs