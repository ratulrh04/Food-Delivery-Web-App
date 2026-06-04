'use client'

import React, { useState } from 'react';

const UserSingUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [city, setCity] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');

    const hangleSignUp = async () => {

        if (
            !name ||!email || !password ||!confirmpassword ||!city ||!address || !mobile
        ) {
            alert("Please fill all fields");
            return;
        }

        if (password !== confirmpassword) {
            alert("Password and Confirm Password do not match");
            return;
        }

        const userData = { name,email,password,city,address,mobile};

        try {
            const response = await fetch("http://localhost:3000/api/user", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            });

            const result = await response.json();

            if (response.ok) {

                alert("User registered successfully");
                console.log(result);

                setName('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setCity('');
                setAddress('');
                setMobile('');

            } else {
                alert(result.message || "Registration failed");
            }

        } catch (error) {
            console.log(error);
            alert("Something went wrong");
        }
    };

    return (
        <div>

            <div className='input-wrapper'>
                <input
                    className='input-field'
                    type="text"
                    placeholder='Enter Name'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>

            <div className='input-wrapper'>
                <input
                    className='input-field'
                    type="email"
                    placeholder='Enter Email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
            </div>

            <div className='input-wrapper'>
                <input
                    className='input-field'
                    type="password"
                    placeholder='Enter Password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
            </div>

            <div className='input-wrapper'>
                <input
                    className='input-field'
                    type="password"
                    placeholder='Enter Confirm Password'
                    value={confirmpassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                />
            </div>

            <div className='input-wrapper'>
                <input
                    className='input-field'
                    type="text"
                    placeholder='Enter City'
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                />
            </div>

            <div className='input-wrapper'>
                <input
                    className='input-field'
                    type="text"
                    placeholder='Enter Address'
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
            </div>

            <div className='input-wrapper'>
                <input
                    className='input-field'
                    type="text"
                    placeholder='Enter Mobile Number'
                    value={mobile}
                    onChange={(event) => setMobile(event.target.value)}
                />
            </div>

            <div className='input-wrapper'>
                <button
                    className='button'
                    onClick={hangleSignUp}
                >
                    Sign Up
                </button>
            </div>

        </div>
    );
};

export default UserSingUp;