import React, { useState } from 'react';

function EmployeeForm({ addEmployee }) {
    // Local state for form inputs
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // Handle form submission
    const handleAddEmployee = (e) => {
        e.preventDefault(); // Prevent page refresh

        // Create a new employee object
        const newEmployee = {
            employeeId: Math.floor(Math.random() * 10000), // Generate random ID
            name,
            email,
            phone,
        };

        // Add the new employee via the parent component's function
        addEmployee(newEmployee);

        // Clear form inputs after submission
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
            <button type="submit">Add Employee</button>
        </form>
    );
}

export default EmployeeForm;