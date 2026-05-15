"use client"

import RestaurantHeader from "@/app/_components/RestuarantHeader";
import "./../style.css"
import AddFoodItem from "@/app/_components/AddFoodItem";
import { useState } from "react";

const Dashboard = () => {

      const[addItem, setAddItem]=useState(false)
    return (
        <div>
            {/* Restuarant Navbar import here */}
            <RestaurantHeader/>

             {/* Toggle Food item page */}
             <button onClick={()=>setAddItem(true)}>Add Food</button>
             <button onClick={()=>setAddItem(false)}>Dashborad</button>
             {
               addItem ? <AddFoodItem/> : <h1>Welcome to dashboard</h1>
             }

        </div>
    );
};

export default Dashboard;