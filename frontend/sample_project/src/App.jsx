import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import VerifyOTP from "./Components/VerifyOTP"
import Sentotp from "./Components/Sentotp";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/otp" element={<Sentotp/>} />
        <Route path="/verify-otp" element={<VerifyOTP />} />

        <Route path="/" element={<Homepage/>} />
      </Routes>
    </Router>
  );
}
export default App;
