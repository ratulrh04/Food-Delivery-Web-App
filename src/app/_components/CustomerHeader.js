'use client';

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const CustomerHeader = (props) => {

  const [cartNumber, setCartNumber] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const storedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItem(storedCart);
    setCartNumber(storedCart.length);
  }, []);

  // Add To Cart
  useEffect(() => {

    if (!props.cartData) return;

    let updatedCart = [];

    if (
      cartItem.length > 0 &&
      cartItem[0].resto_id !== props.cartData.resto_id
    ) {

      updatedCart = [props.cartData];

    } else {

      const alreadyExist = cartItem.find(
        (item) => item._id === props.cartData._id
      );

      if (alreadyExist) return;

      updatedCart = [...cartItem, props.cartData];
    }

    setCartItem(updatedCart);
    setCartNumber(updatedCart.length);

    localStorage.setItem(
      "cart",
      JSON.stringify(updatedCart)
    );

  }, [props.cartData]);

  // Remove From Cart
  useEffect(() => {

    if (!props.removeCartData) return;

    const updatedCart = cartItem.filter(
      (item) => item._id !== props.removeCartData
    );

    setCartItem(updatedCart);
    setCartNumber(updatedCart.length);

    if (updatedCart.length > 0) {

      localStorage.setItem(
        "cart",
        JSON.stringify(updatedCart)
      );

    } else {

      localStorage.removeItem("cart");
    }

  }, [props.removeCartData]);

  return (
    <div className="header-wrapper">

      <div className="logo">
        <Image
          src="https://static.vecteezy.com/system/resources/thumbnails/011/874/816/small/chef-logo-design-illustration-restaurant-logo-vector.jpg"
          alt="logo"
          width={100}
          height={100}
        />
      </div>

      <ul>

        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/">Login</Link>
        </li>

        <li>
          <Link href="/">SignUp</Link>
        </li>

        <li>
          <Link href="/cart">
            Cart ({cartNumber})
          </Link>
        </li>
        <li>
          <Link href="/">
            Add Restaurant
          </Link>
        </li>

      </ul>

    </div>
  );
};

export default CustomerHeader;