import React, { useState, useEffect } from 'react';

function App() {
  // Initialize state from local storage
  const [employees, setEmployees] = useState(() => {
    const savedEmployees = localStorage.getItem('employees');
    return savedEmployees ? JSON.parse(savedEmployees) : [];
  });

  // State for form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  // Add a new employee
  function addEmployee(employee) {
    setEmployees((prevEmployees) => {
      const updatedEmployees = [...prevEmployees, employee];
      return updatedEmployees;
    });
  }

  // Automatically save employees to local storage when it changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  // Handle form submission and add employee
  const handleAddEmployee = (e) => {
    e.preventDefault(); // Prevent the form from refreshing the page
    const newEmployee = {
      employeeId: Math.floor(Math.random() * 10000), // Generate random ID
      name,
      email,
      phone,
    };
    addEmployee(newEmployee);
    // Clear the form fields after submission
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="App">
      <h1>Employee List</h1>

      {/* Form to input employee details */}
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

      {/* Display list of employees */}
      <ul>
        {employees.map((employee) => (
          <li key={employee.employeeId}>
            {employee.name} - {employee.email} - {employee.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;