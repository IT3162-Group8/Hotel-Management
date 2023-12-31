//Home.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
//import ViewDetails from "./ViewDetails";
//import { SearchBar } from "./SearchBar";

import { useLocation } from "react-router-dom";

import "./css/Home.css";

function Home() {
  const [ceoDetails, setCeoDetails] = useState([]);
  const [managerDetails, setManagerDetails] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location State:", location.state);

  useEffect(() => {
    // Fetch CEO details
    axios
      .get("http://localhost:8000/getEmployeeByPosition", {
        params: {
          position: "ceo",
        },
      })
      .then((response) => {
        const ceoDetails = response.data; // Take all items
        console.log("CEO Details", ceoDetails);
        setCeoDetails(ceoDetails);
      })
      .catch((error) => {
        console.error("Error fetching CEO details:", error);
      });
    // Fetch Manager details
    axios
      .get("http://localhost:8000/getEmployeeByPosition?position=manager")
      .then((response) => {
        const managerDetails = response.data;
        console.log("Manager Details", managerDetails);
        setManagerDetails(managerDetails);
      })
      .catch((error) => {
        console.error("Error fetching Manager details:", error);
      });
  }, []);

  const handleButtonClick = (position, details) => {
    // Navigate to ViewDetails.js with personDetails as state
    navigate("/view-details", { state: { position, details } });
  };

  return (
    <div className="homepage">
      <div className="button-div">
        <Link to="/login">
          <button className="login-btn">Login Page</button>
        </Link>
        <Link to="/signup">
          <button className="login-btn">Signup Page</button>
        </Link>
      </div>
      <div className="form-container-home">
        <h2>Person Details</h2>
        {ceoDetails.map((detail, index) => (
          <div
            key={index}
            className="button-as-div"
            onClick={() => handleButtonClick("ceo", detail)}
          >
            <button>
              <div>
                View CEO Details
                <p>Name: {detail.firstName + " " + detail.lastName}</p>
                <p>Email: {detail.email}</p>
                <p>Address: {detail.address}</p>
              </div>
            </button>
          </div>
        ))}
        {managerDetails.map((detail, index) => (
          <div
            key={index}
            className="button-as-div"
            onClick={() => handleButtonClick("manager", detail)}
          >
            <button>
              <div>
                View Manager Details
                <p>Name: {detail.firstName + " " + detail.lastName}</p>
                <p>Email: {detail.email}</p>
                <p>Address: {detail.address}</p>
              </div>
            </button>
          </div>
        ))}

        <Link to="/profile">
          <button>Profile</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;

/*// Home.js
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ViewDetails from "./ViewDetails";

import "./css/Home.css";

function Home() {
  const [ceoDetails, setCeoDetails] = useState(null);
  const [managerDetails, setManagerDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch CEO details
    axios
      .get("http://localhost:8000/getEmployeeByPosition?position=ceo")
      .then((response) => {
        const ceoDetails = response.data;
        setCeoDetails(ceoDetails);
      })
      .catch((error) => {
        console.error("Error fetching CEO details:", error);
      });

    // Fetch Manager details
    axios
      .get("http://localhost:8000/getEmployeeByPosition?position=manager")
      .then((response) => {
        const managerDetails = response.data;
        setManagerDetails(managerDetails);
      })
      .catch((error) => {
        console.error("Error fetching Manager details:", error);
      });
  }, []);

  const handleButtonClick = (position, details) => {
    // Navigate to ViewDetails.js with personDetails as state
    navigate("/view-details", { state: { position, details } });
  };

  return (
    <div className="homepage">
      <div className="button-div">
        <Link to="/login">
          <button className="login-btn">Login Page</button>
        </Link>
        <Link to="/signup">
          <button className="login-btn">Signup Page</button>
        </Link>
      </div>

      <h2>Person Details</h2>

      {ceoDetails ? (
        <>
          <p>Name (CEO): {ceoDetails.firstName + " " + ceoDetails.lastName}</p>
          <p>Email: {ceoDetails.email}</p>
          <p>Address: {ceoDetails.address}</p>
          <div
            className="button-as-div"
            onClick={() => handleButtonClick("ceo", ceoDetails)}
          >
            <button> View CEO Details</button>
          </div>
        </>
      ) : (
        <p>No CEO details available</p>
      )}

      {managerDetails ? (
        <>
          <p>
            Name (Manager):{" "}
            {managerDetails.firstName + " " + managerDetails.lastName}
          </p>
          <p>Email: {managerDetails.email}</p>
          <p>Address: {managerDetails.address}</p>
          <div
            className="button-as-div"
            onClick={() => handleButtonClick("manager", managerDetails)}
          >
            View Manager Details
          </div>
        </>
      ) : (
        <p>No Manager details available</p>
      )}
    </div>
  );
}

export default Home;*/
