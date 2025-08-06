import React from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./Pages/auth/login";                
import Register from "./Pages/auth/register";          
import Home from "./Pages/auth/Home";                  
import ForgotPassword from "./Pages/auth/forgetpassword"; 

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/forgetpassword" element={<ForgotPassword />} />
    </Routes>
  );
};

export default App;
