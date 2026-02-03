"use client";
// css link import here:-
import "./style.css"
// components:-
import { useState } from "react";
import RestuarantLogin from "../_components/RestuarantLogin";
import RestuaranSingUp from "../_components/RestuarantSingUp";
import RestaurantHeader from "../_components/RestuarantHeader";
import RestuarantFooter from "../_components/RestuarentFooter";

export default function Restuarant() {
  const [login, setLogin] = useState();

  return (
    <div>
      <div className="container">
        {/* Restuarent Header or Navber */}
        <RestaurantHeader/>
        <h1> This is Restuarant Login/SingUp Page</h1>
        {login ? <RestuarantLogin /> : <RestuaranSingUp />}
        <button className="button-link" onClick={() => setLogin(!login)}>
        {login ? "Do not have account ? SingUp" : "Already have Account? Login"}
        </button>
      </div>
      {/* Restuarant footer component adding here */}
       <RestuarantFooter/>
    </div>
  );
}
