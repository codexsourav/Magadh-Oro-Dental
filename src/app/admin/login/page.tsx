'use client'
import React, { ChangeEvent, useState } from 'react';
import styles from './styles.module.css'; // Import the CSS module
import MakeApiRequest from '@/helper/makeApiRequest';
import { loginFormDataType, loginFormResponseType } from '@/app/api/admin/login/route';
import { setStorage } from '@/helper/storage';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'

type FormState = {
    username: string;
    password: string;
};


const LoginForm: React.FC = () => {
    const router = useRouter()
    const [formData, setFormData] = useState<FormState>({
        username: '',
        password: '',
    });

    const [formErrors, setFormErrors] = useState<FormState>({
        username: '',
        password: '',
    });

    const [loading, setLoading] = useState(false);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setFormErrors({ ...formErrors, [id]: '' }); // Clear error on input change
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Basic validation example (you can customize as needed)
        const errors: FormState = { username: '', password: '' };

        if (!formData.username) {
            errors.username = 'Username is required';
        }

        if (!formData.password) {
            errors.password = 'Password is required';
        }

        // Display errors and prevent form submission if errors exist
        if (errors.username || errors.password) {
            setFormErrors(errors);
        } else {
            setLoading(true);
            try {
                const loginData: loginFormDataType = { email: formData.username, pass: formData.password };
                const loginApi = new MakeApiRequest("/api/admin/login", loginData, "POST");

                const data: loginFormResponseType = await loginApi.send();
                setLoading(false);
                if (data.success == true) {
                    setStorage("authdental", data);
                    router.push('/admin');
                } else {
                    Swal.fire({
                        title: "Login Field",
                        text: data.error,
                        icon: "error"
                    });
                }
            } catch (error) {
                setLoading(false);
                console.log(error);

                Swal.fire({
                    title: "Login Field",
                    text: "Check Your Username Or Password",
                    icon: "error"
                });
            }

        }
    };

    return (
        <div className={styles.login} style={{ backgroundImage: "url('/images/bg.jpg')" }}>
            <form onSubmit={handleSubmit} className={styles['form-container']}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        className={styles['input']}
                    />
                    {formErrors.username && <p className={styles['error-msg']}>{formErrors.username}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className={styles['input']}
                    />
                    {formErrors.password && <p className={styles['error-msg']}>{formErrors.password}</p>}
                </div>
                <button type="submit" className={styles['submit-button']}>
                    {loading ? "Checking..." : "Login"}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
