'use client'

import CustomerHeader from "@/app/_components/CustomerHeader";
import RestuarantFooter from "@/app/_components/RestuarentFooter";
import Image from "next/image";
import { use, useEffect, useState } from "react";

const Page = ({ params, searchParams }) => {

    const resolvedParams = use(params);
    const resolvedSearchParams = use(searchParams);

    const [restaurantDetails, setRestaurantDetails] = useState(null);
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        loadRestaurantDetails();
    }, []);

    const loadRestaurantDetails = async () => {
        try {
            const id = resolvedSearchParams.id;

            let response = await fetch(
                "http://localhost:3000/api/customer/" + id
            );

            response = await response.json();

            if (response.success) {
                setRestaurantDetails(response.details);
                setFoodItems(response.foodItems || []);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <CustomerHeader />

            <div className="restuarant-page-banner">
                <h1>{decodeURIComponent(resolvedParams.name)}</h1>
            </div>

            {restaurantDetails && (
                <div className="details-wrapper">
                    <h3>Contact: {restaurantDetails.contact}</h3>
                    <h3>City: {restaurantDetails.city}</h3>
                    <h3>Address: {restaurantDetails.address}</h3>
                    <h3>Email: {restaurantDetails.email}</h3>
                </div>
            )}

            <div className="food-item-wrapper">
                {
                   foodItems.length > 0 ? foodItems.map((item, index) => (
                        <div key={index} className="list-item">
                            <Image
                                className="item-image"
                                src={item.image}
                                alt={item.name}
                                width={100}
                                height={100}
                            />
                             <div>
                                <h4>{item.name}</h4>
                                <p>Price: {item.price}</p>
                                <p className="description">{item.description}</p>
                                <button>Add to card</button>
                             </div>
                        </div>
                    )) 
                    : <h1>No Food Item Added For Now</h1>
                }
            </div>
            <RestuarantFooter/>
        </>
    );
};

export default Page;