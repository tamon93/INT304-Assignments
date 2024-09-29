import React, { useState } from 'react';

function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
            />
            <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
            />
            <button className="button" type="submit">Submit</button>
        </form>
    );
}

export default ContactPage;