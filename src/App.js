import logo from "./logo.svg";
import "./App.css";
import SideNav from "./components/SideNav";

import Signup from "./components/registration/Signup";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/registration/Profile";
import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext/AuthContext";
import { useState } from "react";

let authChecker = JSON.parse(localStorage.getItem("checkAuth"));
function App() {
  const [authCheck,setAuthCheck] = useState(authChecker || false)


  useEffect(() =>{
    setAuthCheck(authChecker)
  },[])
  return (
    <>
      {/* <SideNav/> */}
      {/* <SignIn/> */}
      {authCheck  ? (
        <>
          <Routes>
            <Route path="/" element={<SideNav />} />
          </Routes>
        </>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Profile />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
