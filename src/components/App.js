import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";
import TasksManager from "./TasksManager";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { TitleBarContainer } from "./AppStyle";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleSignUp = (user) => {
    // Simulate signup process and store user data
    setUserData(user);
    setIsLoggedIn(true);
  };

  const handleLogin = (credentials) => {
    // Simulate login process and authenticate user
    // Dummy authentication: Check if credentials match dummy user data
    if (
      credentials.email === "dummy@example.com" &&
      credentials.password === "password"
    ) {
      setIsLoggedIn(true);
      setUserData({ email: credentials.email });
    } else {
      alert("Invalid email or password");
    }
  };

  const handleLogout = () => {
    // Simulate logout process
    setIsLoggedIn(false);
    setUserData(null);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <AppBar position="static">
            <Toolbar>
              <TitleBarContainer>
                <Typography variant="h6" component="div">
                  Tasks Manager
                </Typography>
              </TitleBarContainer>
              <div>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="show email"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenuOpen}
                  sx={{ mr: 2 }}
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                >
                  <MenuItem>{userData.email}</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
          <TasksManager />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
