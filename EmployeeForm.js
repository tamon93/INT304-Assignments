import React, { useState } from 'react';

function EmployeeForm({ addEmployee }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleAddEmployee = (e) => {
        e.preventDefault();
        const newEmployee = {
            employeeId: Math.floor(Math.random() * 10000),
            name,
            email,
            phone,
        };
        addEmployee(newEmployee);
        setName('');
        setEmail('');
        setPhone('');
    };

    return (
        <form onSubmit={handleAddEmployee}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                required
            />
            <button className="button" type="submit">Add Employee</button>
        </form>
    );
}

export default EmployeeForm;