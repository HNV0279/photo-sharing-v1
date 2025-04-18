import React from "react";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import models from "../../modelData/models";
import "./styles.css"; // Import file CSS

function UserPhotos() {
  const { userId } = useParams();
  const photos = models.photoOfUserModel(userId) || [];
  const user = models.userModel(userId);

  if (!photos.length) {
    return <Typography className="no-photos" variant="h6">No photos available for this user</Typography>;
  }

  return (
    <div className="user-photos-container fade-in">
      <Typography className="photos-title" variant="h4" gutterBottom>
        Photos of {user ? `${user.first_name} ${user.last_name}` : "User"}
      </Typography>
      
      {photos.map((photo) => {
        const imageSrc = `/images/${photo.file_name}`;

        return (
          <Card
            key={photo._id}
            className="photo-card"
            elevation={3}
          >
            <CardMedia
              className="photo-image"
              component="img"
              sx={{
                height: "auto",
                maxHeight: "500px",
                objectFit: "contain"
              }}
              image={imageSrc}
              alt={`Photo ${photo.file_name}`}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/images/fallback.jpg";
              }}
            />
            <CardContent>
              <Typography className="photo-date" variant="body1" color="text.secondary">
                Date: {new Date(photo.date_time).toLocaleString()}
              </Typography>
              
              <div className="comments-section">
                {photo.comments?.length ? (
                  photo.comments.map((comment) => (
                    <div key={comment._id} className="comment-item">
                      <div className="comment-header">
                        <Typography variant="body2">
                          <Link
                            className="comment-author"
                            to={`/users/${comment.user._id}`}
                          >
                            {`${comment.user.first_name} ${comment.user.last_name}`}
                          </Link>
                        </Typography>
                        <span className="comment-date">
                          {new Date(comment.date_time).toLocaleString()}
                        </span>
                      </div>
                      <Typography className="comment-text" variant="body2">
                        {comment.comment}
                      </Typography>
                    </div>
                  ))
                ) : (
                  <Typography className="no-comments" variant="body2">
                    No comments yet
                  </Typography>
                )}
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default UserPhotos;