// import './App.css'
import Home from "./components/Home";
import EmployeeHome from "./components/EmployeeManagement/EmployeeHome";
import Login from "./components/EmployeeManagement/Login";
import Signup from "./components/EmployeeManagement/Signup";
import View from "./components/EmployeeManagement/View";
import ProfileView from "./components/EmployeeManagement/ProfileView";
import ViewDetails from "./components/EmployeeManagement/ViewDetails";
import Profile from "./components/EmployeeManagement/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employeemanagement/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/employeemanagement/" element={<EmployeeHome />} />
          <Route path="/view" element={<View />} />
          <Route path="/profile-view" element={<ProfileView />} />
          <Route path="/view-details" element={<ViewDetails />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
