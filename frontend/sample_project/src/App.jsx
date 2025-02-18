import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import VerifyOTP from "./Components/VerifyOTP"
import Sentotp from "./Components/Sentotp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Sentotp/>} />
        <Route path="/verify-otp" element={<VerifyOTP />} />
      </Routes>
    </Router>
  );
}
export default App;
