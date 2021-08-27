import React, { useState, useContext } from 'react';
import "./UserAuthentication.css";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import {VisibilityContext} from "../context/visibilityProvider";

function UserAuthentication() {


    const { toggleLoginPopUp } = useContext(VisibilityContext);
    const { loginOrRegister, popupSwitch } = useContext(VisibilityContext);


    console.log(loginOrRegister);

    return (
        <div id={"authentication-container"}>
            <div id={"authentication-header"}>
                <div id={"authentication-close"}><div onClick={() => toggleLoginPopUp()}>✖</div></div>
                <div id={"authentication-login"}
                     onClick={() => {

                         popupSwitch();
                     }}>Log In</div>
                <div id={"authentication-register"}
                     onClick={() => {
                         if(loginOrRegister === "login") {
                             popupSwitch();
                         }}}>Register</div>
            </div>
            {loginOrRegister === "login" ? <LogIn /> : <SignUp />}
        </div>
    );
}

export default UserAuthentication;