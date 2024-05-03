// Login.js
import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import SignUp from "./SignUp";
import { FormContainer, BoxStyled, BtnBox } from "./LoginStyle";

function Login({ onLogin, onSignUp }) {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const [showSignup, setShowSignup] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(formData);
  };
  const handleShowSignup = () => {
    setShowSignup(true);
  };

  const handleBackBtn = () => {
    setShowSignup(false);
  };

  return (
    <>
      {showSignup ? (
        <SignUp onSignUp={onSignUp} onBack={handleBackBtn} />
      ) : (
        <FormContainer>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <BoxStyled>
              <TextField
                id="outlined-basic"
                variant="outlined"
                type="text"
                name="name"
                placeholder="User Name"
                value={formData.email}
                onChange={handleChange}
              />
            </BoxStyled>
            <BoxStyled>
              <TextField
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </BoxStyled>
            <BtnBox>
              <Button type="submit" variant="contained">
                Login
              </Button>
              <Button variant="text" onClick={handleShowSignup}>
                Sign Up
              </Button>
            </BtnBox>
          </Box>
        </FormContainer>
      )}
    </>
  );
}

export default Login;
