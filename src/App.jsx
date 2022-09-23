import SignUp from "./pages/SignUp";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/LogIn";
import Otp from "./pages/Otp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
