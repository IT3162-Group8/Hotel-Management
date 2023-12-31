import React from 'react'

const SearchresultView = ({searchResults}) => {
  return (
    <div >
      {
          searchResults.map((searchResults,empId) => {
            return (
              <div key={empId}> 
              <table border="1">
                <tr>
                  <td>Employee Id: </td>
                  <td>{searchResults.empId}</td>
                </tr>
                <tr>
                  <td>Email: </td>
                  <td>{searchResults.email}</td>
                </tr>
                <tr>
                  <td>Full Name: </td>
                  <td>
                    {searchResults.firstNmae + " " + searchResults.lastName}
                  </td>
                </tr>
                <tr>
                  <td>NIC Number: </td>
                  <td>{searchResults.nicNumber}</td>
                </tr>
                <tr>
                  <td>Address: </td>
                  <td>{searchResults.address}</td>
                </tr>
                <tr>
                  <td>Contact Number: </td>
                  <td>{searchResults.contactNumber}</td>
                </tr>
                <tr>
                  <td>Date Of Birth: </td>
                  <td>{searchResults.dob}</td>
                </tr>
                <tr>
                  <td>Gender: </td>
                  <td>{searchResults.gender}</td>
                </tr>
                <tr>
                  <td>Bank: </td>
                  <td>{searchResults.selectedBank}</td>
                </tr>
                <tr>
                  <td>Account Number: </td>
                  <td>{searchResults.accNum}</td>
                </tr>
                <tr>
                  <td>Position: </td>
                  <td>{searchResults.selectPosition}</td>
                </tr>
              </table>
              </div>
            );
          
        })

      }
      
      
    </div>
  )
}

export default SearchresultView
