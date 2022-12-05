"use client";
import React from "react";
import { Post } from "../postInterface";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Postcard = (props: Post) => {
  return (
    <>
      <Box sx={{ p: 2 }}>
        <Card>
          <CardContent>
            <Typography component="h2" variant="h5">
              {props.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {props.body}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </>
  );
};

export default Postcard;
