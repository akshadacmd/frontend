import React, { useEffect, useState } from "react";
import loginpageimg from "./../../assets/insta-img.png";
import { Link, useNavigate } from "react-router-dom";
import "./css/login.css";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const submitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const apiResponse = await axios.post(
        "http://localhost:9090/api/auth/login",
        { email, password }
      );

      if (apiResponse.data.token) {
        localStorage.setItem("userToken", apiResponse.data.token);
        navigate("/home");
      } else {
        alert("Login failed. No token received.");
      }
    } catch (error) {
      console.log(error);
      alert("Login failed. Please check your email and password.");
    } finally {
      setLoading(false);
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
      <div className="insta-left">
        <img src={loginpageimg} alt="login" />
      </div>

      <div className="insta-right">
        <div className="login-box">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQZCq6fOPNLpJQCws7QODSctmxzMRHvch6Ag&s"
            alt="Instagram Logo"
            className="logo"
          />

          <form className="login-form" onSubmit={submitLogin}>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button type="submit" variant="primary" disabled={loading}>
              {loading ? "Logging in..." : "Submit"}
            </Button>

            <hr />
            <div className="divider">OR</div>

            <div className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdP6AKFlNa3Afg4RJOp7OtR7RGRrlPE2KbLg&s"
                alt="Google Logo"
                className="logo-google"
              />
            </div>

            <p className="text-center mt-5">
              <b>
                <Link to="/forgetpassword" className="forgot">
                  Forgot Password?
                </Link>
              </b>
            </p>

            <div className="signup-box">
              Don't have an account?
              <b>
                <Link to="/register"> Sign up </Link>
              </b>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
