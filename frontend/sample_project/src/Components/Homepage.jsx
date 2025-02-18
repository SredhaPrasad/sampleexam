import React from "react";
import { AppBar, Toolbar, Button, Typography, Container, Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom"; // Import Link

const Homepage = () => {
  return (
    <Box sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* Navbar */}
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Website
          </Typography>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/otp">
            Otp
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "#f5f5f5",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to My Website
        </Typography>
        <Typography variant="h6" paragraph>
          We provide high-quality services to help you succeed.
        </Typography>
        <Button variant="contained" color="primary" href="#features">
          Get Started
        </Button>
      </Box>
    </Box>
  );
};

export default Homepage;
