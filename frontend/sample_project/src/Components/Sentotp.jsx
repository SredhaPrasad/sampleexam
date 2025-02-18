import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SendOTP = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/send-otp", { email });
      if (response.data.success) {
        setMessage("OTP Sent Successfully");
        localStorage.setItem("email", email);
        setTimeout(() => navigate("/verify-otp"), 1500);
      }
    } catch (error) {
      alert("Error sending OTP");
    }
  };

  return (
    <div>
      <h2>Enter Email</h2>
      {message && <p style={{ color: "green" }}>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Send OTP</button>
      </form>
    </div>
  );
};
export default SendOTP;