import React, { useState } from 'react'
import Axios from 'axios' // allows for you to make http request w.o having to write fetch statements

const Login = () => {

    // Registation states
    const [firstName, setFirstName] = useState('')
    const [lasttName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const phoneNumberParse = phoneNumber.replace(/[^\d]/g, "");
    const [emailReg, setEmailReg] = useState('')
    const [passwordReg, setPasswordReg] = useState('')
    // const [plusMember, setPlusMember] = useState('')

    // Login states 
    const [emailLog, setEmailLog] = useState('')
    const [passwordLog, setPasswordLog] = useState('')


    // const login2 = async () => {
    //     const res = await fetch('http://localhost:4000/login', {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify( {
    //         email: emailLog,
    //         password: passwordLog
    //     }),
    //     });
    //     const loginResponse = await res.json(); 
    //     console.log(loginResponse);
    //   }; 


    //gathers info
    // const signup = () => {
    //     Axios.post("http://localhost:4000/signup",
    //         {
    //             firstName: firstName,
    //             lastName: lasttName,
    //             phoneNumber: phoneNumberParse,
    //             email: emailReg,
    //             password: passwordReg

    //         }).then((res) => {
    //             console.log(res);
    //         })
    // };
    const loginBtn = () => {
        Axios.post("http://localhost:4000/login",
            {
                email: emailLog,
                password: passwordLog

            }).then((response) => {
                console.log(response);
            })
    };

    return (
        <>
            <div className="login">
                <h1>Welcome Back, Login Below!</h1>
                
                    <label> Email </label>
                    <input
                        type="email"
                        placeholder='email@email.com'
                        required
                        onChange={(e) => { setEmailLog(e.target.value) }} />
                    <label> Password </label>
                    <input
                        type="text"
                        onChange={(e) => { setPasswordLog(e.target.value) }} />
                    <button onClick={loginBtn}>Login</button>
            
            </div>








            <div className="registration">
                <h1>Sign Up!</h1>
                <form>
                    <label> First Name </label>
                    <input
                        type="text"
                        required
                        onChange={(e) => { setFirstName(e.target.value) }} />
                    <label> Last Name </label>
                    <input
                        type="text"
                        required
                        onChange={(e) => { setLastName(e.target.value) }} />
                    <label> Phone Number </label>
                    <input
                        type="tel"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder="123-456-7890"
                        required
                        onChange={(e) => { setPhoneNumber(e.target.value) }} />
                    <label> Email </label>
                    <input
                        type="email"
                        placeholder='email@email.com'
                        required
                        onChange={(e) => { setEmailReg(e.target.value) }} />
                    <label> Password </label>
                    <input
                        type="text"
                        onChange={(e) => { setPasswordReg(e.target.value) }} />
                    {/* <label>  </label>
                    <input type='radio' /> */}
                    <button >Register</button>
                </form>
            </div>
        </>
    )
}

export default Login
