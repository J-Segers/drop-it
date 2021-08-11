import React from 'react';
import "./LogIn.css";
import {Link} from "react-router-dom";

function LogIn() {
    return (
        <>
            <form id={"authentication-body-login"}>
                <label htmlFor={"user-name"} className={"authentication-user-name-label"}>Username</label>
                <input type={"text"} className={"authentication-user-name"} name={"userName"} />
                <Link id={"forgot-username"}>forgotten username?</Link>
                <label htmlFor={"userPassword"} className={"authentication-user-password-label"}>Password</label>
                <Link id={"forgot-password"}>forgotten password?</Link>
                <input type={"text"} className={"authentication-user-password"} name={"userPassword"} />
                <input type={"submit"} className={"verify-user"} value={"Log In"}/>
            </form>
        </>
    );
}

export default LogIn;