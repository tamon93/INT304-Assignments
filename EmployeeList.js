import React from 'react';

function EmployeeList({ employees }) {
    return (
        <ul>
            {employees.map((employee) => (
                <li key={employee.employeeId}>
                    {employee.name} - {employee.email} - {employee.phone}
                </li>
            ))}
        </ul>
    );
}

export default EmployeeList;