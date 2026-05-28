"use client"

import RestaurantHeader from "@/app/_components/RestuarantHeader";
import "./../style.css"
import AddFoodItem from "@/app/_components/AddFoodItem";
import { useState } from "react";
import FoodItemList from "@/app/_components/FoodItemList";

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
               addItem ? <AddFoodItem setAddItem={setAddItem}/> : <FoodItemList/>
             }
             

        </div>
    );
};

export default Dashboard;



