import SignUp from "./pages/SignUp";
import dashBoard from "./pages/dashBoard";
import profile from "./pages/profile";
import login from "./pages/logIn";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<login />} />
          <Route path="/dashboard" element={<dashBoard />} />
          <Route path="/profile" element={<profile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
