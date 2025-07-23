import React from 'react';
import './css/login.css';
import instaImg from '../../assets/insta-img.png';
import instaLogo from '../../assets/insta-logo.png';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="insta-container">
            <div className="insta-left">
                <img src={instaImg} alt="Instagram Preview" />
            </div>
            <div className="insta-right">
                <div className="login-box">
                    <img className="logo" src={instaLogo} alt="Instagram Logo" />
                    <form>
                        <input type="text" placeholder="Phone number, username, or email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit"><b><Link to="/birthday">Login</Link></b></button>

                        <div className="text-center">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdPkAKfNJa3fa6fARJOp7Oj07t7GRf1PExbLgks"
                                alt=""
                                className="logo-google"
                            />
                        </div>

                        <p className="text-center mt-5"> <b><Link to="/forgetpassword">Forgot Password?</Link></b></p>
                        <p className="text-center">
                            Don't have an account? <b><Link to="/register">Sign up</Link></b>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
