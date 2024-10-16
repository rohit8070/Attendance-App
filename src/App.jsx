import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import Login from "./components/login/login";
import Home from "./components/home/home";
import Register from "./components/Registration/register";
import StudentProfile from "./components/profile/StudentProfile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/StudentProfile" element={<StudentProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
