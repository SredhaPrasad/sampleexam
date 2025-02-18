import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const VerifyOTP = () => {
  const [otp, setOtp] = useState("");
  const email = localStorage.getItem("email");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/verify-otp", { email, otp });
      if (response.data.success) {
        navigate("/welcome");
      } else {
        alert("Invalid OTP");
      }
    } catch (error) {
      alert("Error verifying OTP");
    }
  };

  return (
    <div>
      <h2>Enter OTP</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} required />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
};
export default VerifyOTP;
