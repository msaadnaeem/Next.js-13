"use client";
import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
const PostsLayout = ({ children }) => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Card sx={{ display: "flex" }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              Top News Stories
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              from around the world
            </Typography>
            <Typography variant="subtitle1" paragraph>
              on a click
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: "none", sm: "block" } }}
            image="https://source.unsplash.com/random"
            alt=""
          />
        </Card>
      </Grid>
      <div>{children}</div>
    </>
  );
};

export default PostsLayout;
