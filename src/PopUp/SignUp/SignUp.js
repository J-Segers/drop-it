import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import "./SignUp.css";
import checkPasswordValidity from "../../Helpers/checkPasswordValid";

function SignUp() {

    const [password, setPassword] = useState("");
    const [passwordVerification, setPasswordVerification] = useState("");
    const [isValid, setIsValid] = useState("");
    const [isVerified, setIsVerified] = useState("");

    const {handleSubmit} = useForm();


    useEffect(() => {

        let errorMessage = checkPasswordValidity(password);
        if(password !== ""){
            if(errorMessage.length === 0) {
                setIsValid("✔");
            } else {
                setIsValid("❌");
            }
        }


        console.log(errorMessage);

    },  [password])

    useEffect(() => {

        if(passwordVerification !== "") {
            if(passwordVerification === password) {
                setIsVerified("✔");
            } else {
                setIsVerified("❌");
            }
        }

        console.log(password, passwordVerification);
    }, [passwordVerification])

    function onFormSubmit(e) {
        e.preventDefault();
    }

    return (
        <>
            <form id={"authentication-body-register"} onSubmit={handleSubmit(onFormSubmit)}>
                <label htmlFor={"user-name"} className={"authentication-user-name-label"} >Username</label>
                <input type={"text"} className={"authentication-user-name"} name={"userName"} />
                <label htmlFor={"user-email"} className={"authentication-user-email-label"}>Email adress</label>
                <input type={"text"} className={"authentication-user-email"} name={"email"} />
                <label htmlFor={"userPassword"} className={"authentication-user-password-label"}>Password</label>
                <input
                    type={"text"}
                    className={"authentication-user-password"}
                    name={"userPassword"}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <div id={isValid === "✔" ? "is-valid-true" : "is-valid-false"}>{isValid}</div>
                <label htmlFor={"userPassword"} className={"authentication-password-verification-label"}>verify password</label>
                <input
                    type={"text"}
                    className={"authentication-password-verification"}
                    name={"userPassword"}
                    onChange={(e) => setPasswordVerification(e.target.value)}
                />
                <div id={isVerified === "✔" ? "is-verified-true": "is-verified-false"}>{isVerified}</div>
                <input type={"submit"} className={"signup-user"} value={"Sign up"}/>
            </form>
        </>
    );
}

//

export default SignUp;