import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./css/Login.css";

function Login() {
    const history = useNavigate();

    const [empId, setEmpId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/", {
                empId,
                password,
            });

            /*if (response.data === "exist") {
                // Assuming you have a way to get the user's selectPosition
                const selectPosition = "hr-manager"; // Replace with actual user's selectPosition

                // Check the selectPosition and redirect accordingly
                if (selectPosition === "hr-manager") {
                  history("/view", { state: { id: empId } });
                } else {
                  history("/profile-view", { state: { id: empId } });
                }
            } else if (response.data === "notexist") {
                alert("User has not signed up");
            }*/
            if (response.data === "exist") {
              const selectPosition = "hr-manager"; // Replace with actual user's selectPosition

              // Redirect based on selectPosition
              const redirectPath =
                selectPosition === "hr-manager" ? "/view" : "/profile-view";
              history(redirectPath, { state: { id: empId } });
              console.log(selectPosition);

            } else if (response.data === "notexist") {
              alert("User has not signed up");
            }
        } catch (error) {
            alert("Wrong details");
            console.error(error);
        }
    };

    /*const history = useNavigate();
    const [empId, setEmpId] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post("http://localhost:8000/", {
          empId,
          password,
        });

        if (response.data.status === "success") {
          // Redirect based on user's role
          const selectPosition =
            empId === "hr-manager" ? "hr-manager" : "employee";

          // Redirect based on the determined role
          if (selectPosition === "hr-manager") {
            history("/view", { state: { id: empId } });
          } else {
            history("/profile-view", { state: { id: empId } });
          }
        } else if (response.data.status === "fail") {
          alert("Invalid credentials");
        } else {
          alert("Server error");
        }
      } catch (error) {
        console.error(error);
        alert("Error during login");
      }
    };*/


    return (
      <>
        <div className="login-div">
          <Link to="/signup">
            <button className="login-btn">Sign Up</button>
          </Link>
        </div>
        <div className="container">
          <div className="screen">
            <div className="screen__content">
              <form className="login">
                <div className="login__field">
                  <input
                    type="text"
                    className="login__input"
                    onChange={(e) => setEmpId(e.target.value)}
                    placeholder="Employee ID"
                  />
                </div>
                <div className="login__field">
                  <input
                    type="password"
                    className="login__input"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                  />
                </div>
                <button>
                  <input
                    type="submit"
                    onClick={handleLogin}
                    className="submit-btn"
                  />
                </button>

                <Link to="/">
                  <button>Back</button>
                </Link>
              </form>
            </div>
            <div className="screen__background">
              <span className="screen__background__shape screen__background__shape4"></span>
              <span className="screen__background__shape screen__background__shape3"></span>
              <span className="screen__background__shape screen__background__shape2"></span>
              <span className="screen__background__shape screen__background__shape1"></span>
            </div>
          </div>
        </div>
      </>
    );
}

export default Login;
