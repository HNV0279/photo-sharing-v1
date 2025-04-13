import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { useLocation, useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css";

function TopBar() {
  const location = useLocation();
  const { userId } = useParams();
  let context = "PhotoApp";

  if (location.pathname.startsWith("/users/") && userId) {
    const user = models.userModel(userId);
    context = user ? `${user.first_name} ${user.last_name}` : "User Details";
  } else if (location.pathname.startsWith("/photos/") && userId) {
    const user = models.userModel(userId);
    context = user ? `Photos of ${user.first_name} ${user.last_name}` : "User Photos";
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Nguyễn Văn Hoàng - B22DCCN341
        </Typography>
        <Typography variant="h6">{context}</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;