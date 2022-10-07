import React from "react";
import "./App.css";
import { BrowserRouter,
  Routes, // instead of "Switch"
  Route,} from "react-router-dom";
import Landing from "./components/Landing";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
