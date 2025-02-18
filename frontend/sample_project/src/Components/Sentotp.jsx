import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Container, Alert, CircularProgress } from "@mui/material";

const SendOTP = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/send-otp", { email });

      if (response.data.success) {
        setMessage("OTP Sent Successfully");
        localStorage.setItem("email", email);

        // Navigate to the homepage after 2 seconds
        setTimeout(() => {
          navigate("/"); 
        }, 2000);
      }
    } catch (error) {
      setMessage("Error sending OTP. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: "center", mt: 8, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: "white" }}>
        <Typography variant="h4" gutterBottom>
          Send OTP
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Enter your email to receive a one-time password (OTP).
        </Typography>

        {message && (
          <Alert severity={message.includes("Error") ? "error" : "success"} sx={{ mb: 2 }}>
            {message}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            sx={{ mb: 2 }}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth disabled={loading}>
            {loading ? <CircularProgress size={24} color="inherit" /> : "Send OTP"}
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default SendOTP;
