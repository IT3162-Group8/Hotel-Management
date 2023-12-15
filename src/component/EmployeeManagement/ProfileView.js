// ProfileView.js
import React from 'react';

export default function ProfileView({ selectedEmployee, onClose }) {
  console.log('Selected Employee:', selectedEmployee);

  return (
    <div className="selected-employee-details">
      <h2>Selected Employee Details</h2>
      <p>Employee Id: {selectedEmployee.empId}</p>
      <p>Email: {selectedEmployee.email}</p>
      {/* Add other details as needed */}
      <button onClick={onClose}>Close</button>
    </div>
  );
}
