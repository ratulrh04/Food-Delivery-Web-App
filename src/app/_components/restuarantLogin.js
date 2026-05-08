"use client";

import { useState } from "react";

export default function RestuarantLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError(true); 
      return false
    }else{
      setError(false);  
    }
   
    let response = await fetch('http://192.168.1.217:3000/api/restuarants',{
    method:"POST",
    body:JSON.stringify({email,password,login:true})
    })
    response = await response.json();
    if(response.success){
       alert("Login Succsessful")
    }
  };

  return (
    <div>
      <h1>This is Login Page</h1>
      <form onSubmit={handleLogin}>
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Enter your email id"
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {error && !email && (
            <span className="input-error">Enter a valid Email</span>
          )}
        </div>

        <div className="input-wrapper">
          <input
            type="password"
            placeholder="Enter your password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && !password && (
            <span className="input-error">Enter a valid password</span>
          )}
        </div>

        <div className="input-wrapper">
          <button type="submit" className="button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
