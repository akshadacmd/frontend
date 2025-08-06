import React, { useState, useEffect } from "react";
import instaLogo from "../../assets/insta-logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./css/register.css";  
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitRegister = async (e) => {
    e.preventDefault();
    try {
      const apiResponse = await axios.post(
        "http://localhost:9090/api/auth/register",
        {
          email,
          fullName,
          userName,
          password,
        }
      );

      if (apiResponse.data.token) {
        localStorage.setItem("userToken", apiResponse.data.token);
        navigate("/home");
      } else {
        alert("Registration failed. No token received.");
      }
    } catch (error) {
      console.error("Registration error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  

  useEffect(() => {
  const token = localStorage.getItem("userToken");
  if (token) {
    navigate("/home");
  }
}, [navigate]);

  return (
    <div className="insta-container">
      <div className="insta-right">
        <div className="register-box">
          <img className="logo" src={instaLogo} alt="Instagram Logo" />
          <p className="heading">
            Sign up to see photos and videos from your friends.
          </p>

          <form onSubmit={submitRegister}>
            <input
              type="text"
              placeholder="Mobile Number or Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit">Sign Up</button>

            <p className="text-center mt-5">
              Have an account?{" "}
              <b>
                <Link to="/">Log in</Link>
              </b>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
