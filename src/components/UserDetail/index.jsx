import React from "react";
import { Typography, Button } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";

function UserDetail() {
  const { userId } = useParams();
  const user = models.userModel(userId);

  if (!user) {
    return <Typography variant="h6">User not found</Typography>;
  }

  return (
    <div>
      <Typography variant="h4">{`${user.first_name} ${user.last_name}`}</Typography>
      <Typography variant="body1">Location: {user.location}</Typography>
      <Typography variant="body1">Occupation: {user.occupation}</Typography>
      <Typography variant="body1">Description: {user.description}</Typography>
      <Button variant="contained" component={Link} to={`/photos/${userId}`}>
        View Photos
      </Button>
    </div>
  );
}

export default UserDetail;