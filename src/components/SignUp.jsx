// SignUp.js
import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import { FormContainer, BoxStyled, BtnBox } from "./LoginStyle";

function SignUp({ onSignUp, onBack }) {
  const [signupData, setSignupData] = useState({
    username: "",
    useremail: "",
    userpassword: "",
  });

  const handleChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(signupData);
  };

  const handleBack = () => {
    onBack();
  };

  return (
    <FormContainer>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <BoxStyled>
          <TextField
            type="email"
            name="useremail"
            placeholder="Email"
            value={signupData.useremail}
            onChange={handleChange}
          />
        </BoxStyled>
        <BoxStyled>
          <TextField
            type="text"
            name="username"
            placeholder="UserName"
            value={signupData.username}
            onChange={handleChange}
          />
        </BoxStyled>
        <BoxStyled>
          <TextField
            type="password"
            name="userpassword"
            placeholder="Password"
            value={signupData.userpassword}
            onChange={handleChange}
          />
        </BoxStyled>
        <BtnBox>
          <Button type="submit" variant="contained">
            Sign Up
          </Button>
          <Button type="button" variant="contained" onClick={handleBack}>
            Back
          </Button>
        </BtnBox>
      </Box>
    </FormContainer>
  );
}

export default SignUp;
