// ProfileView.js
import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';

export default function ProfileView({  onClose }) {

  const location = useLocation();
  const selectedEmployee=location.state ? location.state.selectedEmployee : null;

  if(!selectedEmployee){
    return<div>No employee Selected.</div>
  } 
  console.log('Selected Employee:', selectedEmployee);

  return (
    <div className="selected-employee-details">
      {selectedEmployee ? (
        <>
          <h2>Selected Employee Details</h2>

          <table border="1">
            <tr>
              <td>Employee Id: </td>
              <td>{selectedEmployee.empId}</td>
            </tr>
            <tr>
              <td>Email: </td>
              <td>{selectedEmployee.email}</td>
            </tr>
            <tr>
              <td>Full Name: </td>
              <td>
                {selectedEmployee.firstNmae + " " + selectedEmployee.lastName}
              </td>
            </tr>
            <tr>
              <td>NIC Number: </td>
              <td>{selectedEmployee.nicNumber}</td>
            </tr>
            <tr>
              <td>Address: </td>
              <td>{selectedEmployee.address}</td>
            </tr>
            <tr>
              <td>Contact Number: </td>
              <td>{selectedEmployee.contactNumber}</td>
            </tr>
            <tr>
              <td>Date Of Birth: </td>
              <td>{selectedEmployee.dob}</td>
            </tr>
            <tr>
              <td>Gender: </td>
              <td>{selectedEmployee.gender}</td>
            </tr>
            <tr>
              <td>Bank: </td>
              <td>{selectedEmployee.selectedBank}</td>
            </tr>
            <tr>
              <td>Account Number: </td>
              <td>{selectedEmployee.accNum}</td>
            </tr>
            <tr>
              <td>Position: </td>
              <td>{selectedEmployee.selectPosition}</td>
            </tr>
            
          </table>

          {/*<button onClick={onClose}>Close</button>*/}
        </>
      ) : (
        <div>No employee selected.</div>
      )}
    </div>
  );
}
