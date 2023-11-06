import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import Profile from "./Profile";
import { Button, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from "@mui/material";

import styles from "./Profile.module.css";
const Signup = () => {
  const { handleFormSubmit, handleChange, signUp } = useContext(AuthContext);

  if (signUp) {
    return <Profile />;
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.login_div}>
            <div className={styles.login_signup}>SIGNUP</div>
            <form className={styles.inputbox} onSubmit={handleFormSubmit}>
              <div>
                <TextField
                sx={{ width: 300 }}
                id="fullWidth"  variant="standard"
                  onChange={handleChange}
                  type="text"
                  placeholder="add first name"
                  name="first_name"
                  required
                />
              </div>
              <div>
                <TextField
                 sx={{ width: 300 }}
                 id="fullWidth"  variant="standard"
                  onChange={handleChange}
                  type="text"
                  placeholder="add last name"
                  name="last_name"
                  required
                />
              </div>
              <div>
                <TextField
                 sx={{ width: 300 }}
                 id="fullWidth"  variant="standard"
                  onChange={handleChange}
                  type="email"
                  placeholder="add email address"
                  name="email"
                  required
                />
              </div>
              <div>
                <TextField
                 sx={{ width: 300 }}
                 id="fullWidth"  variant="standard"
                  onChange={handleChange}
                  type="password"
                  placeholder="add password"
                  name="password"
                />
              </div>
              <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
              <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        required
      >
        <FormControlLabel  onChange={handleChange} value="female" control={<Radio />} label="Female" />
        <FormControlLabel  onChange={handleChange} value="male" control={<Radio />} label="Male" />
        <FormControlLabel  onChange={handleChange} value="other" control={<Radio />} label="Other" />
        
      </RadioGroup>

            <Button required style={{fontSize:"20px"}} sx={{ width: 140 }} variant="contained" onClick={handleFormSubmit}>SIGN UP</Button>
             
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;