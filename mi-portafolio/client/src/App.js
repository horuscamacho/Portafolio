import React from "react";
import "./App.css";
import { BrowserRouter,
  Routes, // instead of "Switch"
  Route,} from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Profile from "./components/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/portafolio" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
