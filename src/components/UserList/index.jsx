import React from "react";
import { List, ListItem, ListItemText, Divider, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import models from "../../modelData/models";

function UserList() {
  const users = models.userListModel();

  return (
    <div>
      <Typography variant="h6">User List</Typography>
      <List>
        {users.map((user) => (
          <React.Fragment key={user._id}>
            <ListItem button component={Link} to={`/users/${user._id}`}>
              <ListItemText primary={`${user.first_name} ${user.last_name}`} />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );
}

export default UserList;