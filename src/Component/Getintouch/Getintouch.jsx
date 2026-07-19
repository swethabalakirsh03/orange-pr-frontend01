import React, { useState } from 'react';
import styles from './GetInTouch.module.scss';
import contactImg from '../../assets/Concept_pr/git_img.svg';
import InputField from '../utils/Inputfield';

const GetInTouch = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        comments: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className={styles.wrapper}>
            <div className={styles.wrapper_inner}>
                <div
                    className={styles.imageSide}
                    style={{ backgroundImage: `url(${contactImg})` }}
                />
                <div className={styles.greySide} />

                <form className={styles.card} onSubmit={handleSubmit}>
                    <h2 className={styles.heading}>Get in touch</h2>

                    <div className={styles.row}>
                        <InputField
                            label="First Name"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Last Name"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className={styles.row}>
                        <InputField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <InputField
                            label="Phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>

                    <InputField
                        as="textarea"
                        label="Enter your comments here any?"
                        name="comments"
                        value={formData.comments}
                        onChange={handleChange}
                        fullWidth
                    />

                    <button type="submit" className={styles.submitBtn}>
                        Submit
                    </button>
                </form>

            </div>
        </section>
    );
};

export default GetInTouch;