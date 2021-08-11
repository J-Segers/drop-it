import React, { useState, useContext } from 'react';
import "./UserAuthentication.css";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import {VisibilityContext} from "../context/visibilityProvider";

function UserAuthentication() {
    const [ loginOrRegister, setLoginOrRegister ] = useState("login");

    const { toggleLoginPopUp } = useContext(VisibilityContext);

    return (
        <div id={"authentication-container"}>
            <div id={"authentication-header"}>
                <div id={"authentication-close"}><div onClick={() => toggleLoginPopUp()}>✖</div></div>
                <div id={"authentication-login"} onClick={() => setLoginOrRegister("login")}>Log In</div>
                <div id={"authentication-register"} onClick={() => setLoginOrRegister("register")}>Register</div>
            </div>
            {loginOrRegister === "login" ? <LogIn /> : <SignUp />}
        </div>
    );
}

export default UserAuthentication;