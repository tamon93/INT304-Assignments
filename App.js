import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';
import ContactPage from './components/ContactPage';
import HomePage from './components/HomePage';
import './App.css';

function App() {
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  return (
    <Router>
      <div className="App">
        <h1>Employee Management</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/employees" element={<EmployeeList employees={employees} />} />
          <Route path="/add" element={<EmployeeForm addEmployee={addEmployee} />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;