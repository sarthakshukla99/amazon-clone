import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./login.css";


const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const login = (e) => {
    //     e.preventDefault();

    //     auth.signInWithEmailAndPassword(email,password)
    //     .then((auth) => {
    //         navigate("/")
    //     }).catch((e) => {alert(e.message)})
    // };

    // const register = (e) => {
    //     e.preventDefault();

    //     auth.createUserWithEmailAndPassword(email,password)
    //     .then((auth) => {
    //         navigate("/")
    //     }).catch((e) => {alert(e.message)})
    // };

    return (
        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                    alt="amazon logo"
                />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                    />
                    <h5>Password</h5>
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                    />
                    <button
                        type="submit"
                        // onClick={login}
                        className="login__signInButton"
                    >
                        <b>Sign in</b>
                    </button>
                </form>

                <p>
                    By signing-in you agree to Amazon's Condition of use & Sale.
                    Please see our Privacy Notice, our Cookies Notice and our
                    Interest-Based Ads Notice
                </p>

                <button 
                // onClick={register}
                className="login__registerButton">
                    Create your Amazon Account
                </button>
            </div>
        </div>
    );
};

export default Login;
