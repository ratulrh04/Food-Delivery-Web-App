'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import CustomerHeader from "../_components/CustomerHeader";
import RestuarantFooter from "../_components/RestuarentFooter";

const Page = () => {

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        loadCartData();
    }, []);

    const loadCartData = () => {
        const cart =
            JSON.parse(localStorage.getItem("cart")) || [];

        setCartItems(cart);
    };

    const removeFromCart = (id) => {

        const updatedCart = cartItems.filter(
            (item) => item._id !== id
        );

        setCartItems(updatedCart);

        if (updatedCart.length > 0) {
            localStorage.setItem(
                "cart",
                JSON.stringify(updatedCart)
            );
        } else {
            localStorage.removeItem("cart");
        }
    };

    const totalAmount = cartItems.reduce(
        (total, item) =>
            total + Number(item.price),
        0
    );

    return (
        <>
            <CustomerHeader />

            <div className="cart-page">

                <h1>My Cart</h1>

                {
                    cartItems.length > 0 ? (
                        <>
                            {
                                cartItems.map((item) => (

                                    <div
                                        key={item._id}
                                        className="list-item"
                                    >

                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            width={120}
                                            height={120}
                                            className="item-image"
                                        />

                                        <div>

                                            <h3>{item.name}</h3>

                                            <p>
                                                Price : ৳{item.price}
                                            </p>

                                            <p>
                                                {item.description}
                                            </p>

                                            <button
                                                onClick={() =>
                                                    removeFromCart(
                                                        item._id
                                                    )
                                                }
                                            >
                                                Remove From Cart
                                            </button>

                                        </div>

                                    </div>

                                ))
                            }

                            <div
                                style={{
                                    marginTop: "30px"
                                }}
                            >
                                <h2>
                                    Total Price : ৳
                                    {totalAmount}
                                </h2>
                            </div>
                        </>
                    ) : (
                        <h2>
                            No Item Added To Cart
                        </h2>
                    )
                }

            </div>

            <RestuarantFooter />
        </>
    );
};

export default Page;