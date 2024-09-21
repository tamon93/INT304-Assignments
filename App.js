import React, { useState, useEffect } from 'react';
import EmployeeForm from './components/EmployeeForm';
import EmployeeList from './components/EmployeeList';

function App() {
  // Initialize state from local storage
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  // Save employees to local storage when state changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  // Add a new employee to the list
  const addEmployee = (employee) => {
    setEmployees((prevEmployees) => [...prevEmployees, employee]);
  };

  return (
    <div className="App">
      <h1>Employee List</h1>
      {/* Employee Form */}
      <EmployeeForm addEmployee={addEmployee} />
      {/* Employee List */}
      <EmployeeList employees={employees} />
    </div>
  );
}

export default App;