import React, { useState } from "react";
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

  const handleSignUp = async (user) => {
    console.log(user);
    // Simulate signup process and  call API to store user data

    // fetch("https://dummyjson.com/users/add", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     username: user.username,
    //     email: user.email,
    //     password: user.password,
    //     /* other user data */
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then(console.log);

    setUserData({ name: user.useremail });
    setIsLoggedIn(true);
  };

  const handleLogin = async (credentials) => {
    // Simulate login process and authenticate user
    // Used Dummy json authentication: Check if credentials match user data
    if (credentials) {
      const username = credentials.name;
      const password = credentials.password;
      try {
        const response = await fetch("https://dummyjson.com/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message);
        } else {
          const userData = await response.json();
          setIsLoggedIn(true);
          setUserData({ name: userData.email });
        }
      } catch (error) {
        alert(error.message);
      }
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
                  aria-label="show name"
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
                  <MenuItem>{userData.name}</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </div>
            </Toolbar>
          </AppBar>
          <TasksManager />
        </>
      ) : (
        <Login onLogin={handleLogin} onSignUp={handleSignUp} />
      )}
    </div>
  );
}

export default App;
