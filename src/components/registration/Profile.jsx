import { Button, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import {useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext/AuthContext';
import styles from './Profile.module.css'

const Profile = () => {

  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [isLoggedIn,setIsLoggedIn] = useState(true)


  const {signUp,setSignUp,data,setIsAuth} = useContext(AuthContext)

  let navigate = useNavigate();
const goTosignup = () => {
  setSignUp(false)
}


const handleLogin = () => {
  if(data.email===email && data.password===password){
    alert("You are successfully logged in")
    navigate("/")
    setIsAuth(true)
  }
  else{
    setIsLoggedIn(false)
  }
}


  return (
    <div className={styles.container}>
      <div className={styles.main}>
         <div>
           <div className={styles.login_div}>
            <div className={styles.login_signup}>
              LOGIN
            </div>
            <div className={styles.inputbox}> 
          
            <TextField sx={{ width: 300 }} onChange={(e)=>setEmail(e.target.value)} id="fullWidth" label="Add email*" variant="standard"  />
            <TextField sx={{ width: 300 }} onChange={(e)=>setPassword(e.target.value)} size="medium" id="fullWidth" label="Add password*" variant="standard" />
             <br />
            <Button style={{fontSize:"20px"}} sx={{ width: 140 }} variant="contained" onClick={handleLogin}>LOGIN</Button>
            {isLoggedIn===false && <p style={{color:"red"}}>Wrong Credentials..</p> }
            
            <Link  to="/signup" ><span onClick={goTosignup} style={{fontSize:"22px"}}>New to here? Create Account</span></Link>
            </div>
            
          
     
           </div>
         </div>
      </div>
    </div>
  )
}

export default Profile