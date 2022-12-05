"use client";
import React from "react";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
const Header = () => {
  return (
    <div>
      <AppBar position="static" style={{ margin: 4 }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link href="/" style={{ textDecoration: "none", color: "white" }}>
              Home
            </Link>
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link
              href="/posts"
              style={{ textDecoration: "none", color: "white" }}
            >
              Posts
            </Link>
          </Typography>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            <Link
              href="/about"
              style={{ textDecoration: "none", color: "white" }}
            >
              About
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
