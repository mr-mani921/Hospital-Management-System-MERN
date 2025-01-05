import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css"
import Home from "./pages/Home"
import { ToastContainer  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
const App = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          <ToastContainer position="top-center" />
        </Router>  
    </div>
  );
};

export default App;
