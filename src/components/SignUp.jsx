// SignUp.js
import React, { useState } from "react";
import { TextField, Box, Button } from "@mui/material";
import { FormContainer, BoxStyled, BtnBox } from "./LoginStyle";

function SignUp({ onSignUp }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp(formData);
  };

  return (
    <FormContainer>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <BoxStyled>
          <TextField
            type="email"
            name="email"
            placeholder="Email"
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
            Sign Up
          </Button>
          <Button type="button" variant="contained">
            Back
          </Button>
        </BtnBox>
      </Box>
    </FormContainer>
  );
}

export default SignUp;
