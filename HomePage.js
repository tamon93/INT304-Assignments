import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div>
            <h1>Welcome to the Employee Management System</h1>
            <p>Manage employees efficiently and seamlessly.</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/employees">View Employee List</Link>
                    </li>
                    <li>
                        <Link to="/add">Add Employee</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default HomePage;