// ViewDetails.js
import React from "react";
import { useLocation } from "react-router-dom";

function ViewDetails() {
  const location = useLocation();

  console.log('Location State:',location.state);
  const { position, details } = location.state || {};

  return (
    <div className="view-details">
      {details ? (
        <>
          <h2>{position} Profile Details</h2>
          <p>Name: {details.firstName + " " + details.lastName}</p>
          <p>Email: {details.email}</p>
          <p>Address: {details.address}</p>
        </>
      ) : (
        <p>No details available</p>
      )}
    </div>
  );
}

export default ViewDetails;

/*import React from "react";
import { useLocation } from "react-router-dom";
import View from "./View";

function ViewDetails() {
  const location = useLocation();
  const { position, ceoDetails, managerDetails } = location.state || {};
  const details = position === "ceo" ? ceoDetails : position === "manager" ? managerDetails : null;

  return (
    <div className="view-details">
      {details ? (
        <>
          <h2>{position} Profile Details</h2>
          <p>Name: {details.name}</p>
          <p>Email: {details.email}</p>
          <p>Address: {details.address}</p>
        </>
      ) : (
        <p>No details available</p>
      )}
    </div>
  );
}

export default ViewDetails;*/
