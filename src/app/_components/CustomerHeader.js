"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const CustomerHeader = (props) => {

  const [cartNumber, setCartNumber] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItem(storedCart);
    setCartNumber(storedCart.length);
  }, []);

  useEffect(() => {
    if (!props.cartData) return;

    if (cartItem.length > 0) {

      if (cartItem[0].resto_id !== props.cartData.resto_id) {

        const newCart = [props.cartData];

        setCartItem(newCart);
        setCartNumber(1);

        localStorage.setItem(
          "cart",
          JSON.stringify(newCart)
        );

      } else {

        const newCart = [...cartItem, props.cartData];

        setCartItem(newCart);
        setCartNumber(newCart.length);

        localStorage.setItem(
          "cart",
          JSON.stringify(newCart)
        );
      }

    } else {

      const newCart = [props.cartData];

      setCartItem(newCart);
      setCartNumber(1);

      localStorage.setItem(
        "cart",
        JSON.stringify(newCart)
      );
    }

  }, [props.cartData]);

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
          <Link href="/">Cart ({cartNumber})</Link>
        </li>

        <li>
          <Link href="/">Add Restaurant</Link>
        </li>
      </ul>
    </div>
  );
};

export default CustomerHeader;