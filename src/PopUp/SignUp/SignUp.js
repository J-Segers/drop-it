import React, {useContext, useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import "./SignUp.css";
import checkPasswordValidity from "../../Helpers/checkPasswordValid";
import axios from "axios";
import {VisibilityContext} from "../../context/visibilityProvider";

function SignUp() {

    const [password, setPassword] = useState("");
    const [passwordVerification, setPasswordVerification] = useState("");
    const [isValid, setIsValid] = useState("");
    const [isVerified, setIsVerified] = useState("");
    const {popupSwitch} = useContext(VisibilityContext);


    const {handleSubmit, register} = useForm();


    useEffect(() => {

        let errorMessage = checkPasswordValidity(password);
        if(password !== ""){
            if(errorMessage.length === 0) {
                setIsValid("✔");
            } else {
                setIsValid("❌");
            }
        }

        if(passwordVerification !== "") {
            if(passwordVerification === password) {
                setIsVerified("✔");
            } else {
                setIsVerified("❌");
            }
        }

    }, [password, passwordVerification])

    async function onFormSubmit(data) {
        try {
            const response = await axios.post("http://localhost:8080/api/v1/users", {username: data.userName, email: data.email, password: data.userPassword});
            setTimeout(() => {popupSwitch()}, 2000);
        } catch (e) {
            console.log(e.response.data);
        }
    }

    return (
        <>
            <form className={"authentication-body-register"} onSubmit={handleSubmit(onFormSubmit)}>
                <label htmlFor={"user-name"} className={"authentication-user-name-label"} >Username</label>
                <input type={"text"} className={"authentication-user-name"} name={"userName"} {...register("userName")}/>
                <label htmlFor={"user-email"} className={"authentication-user-email-label"}>Email adress</label>
                <input type={"text"} className={"authentication-user-email"} name={"email"} {...register("email")}/>
                <label htmlFor={"userPassword"} className={"authentication-user-password-label"}>Password</label>
                <input
                    type={"text"}
                    className={"authentication-user-password"}
                    name={"userPassword"}
                    {...register("userPassword")}
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