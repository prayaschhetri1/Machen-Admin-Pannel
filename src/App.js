import logo from "./logo.svg";
import "./App.css";
import SideNav from "./components/SideNav";

import Signup from "./components/registration/Signup";
import { Route, Routes } from "react-router-dom";
import Profile from "./components/registration/Profile";
import { useContext } from "react";
import { AuthContext } from "./AuthContext/AuthContext";

function App() {
  const { isAuth } = useContext(AuthContext);
  // console.log(isAuth)
  return (
    <>
      {/* <SideNav/> */}
      {/* <SignIn/> */}
      {isAuth ? (
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
