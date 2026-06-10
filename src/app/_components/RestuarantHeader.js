"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RestaurantHeader(props) {

  const [details, setDetails] = useState(null);
  const [cartNumber, setCartNumber] = useState(0);
  const [cartItem, setCartItem] = useState([]);

  const router = useRouter();
  const pathName = usePathname();

  // Restaurant User Check
  useEffect(() => {
    const data = localStorage.getItem("restuarantUser");

    if (!data) {
      if (
        pathName.startsWith("/restuarant") &&
        pathName !== "/restuarant"
      ) {
        router.push("/restuarant");
      }
    } else {
      setDetails(JSON.parse(data));

      if (pathName === "/restuarant") {
        router.push("/restuarant/dashboard");
      }
    }
  }, [router, pathName]);

  // Load Cart Data
  useEffect(() => {
    const storedCart =
      JSON.parse(localStorage.getItem("cart")) || [];

    setCartItem(storedCart);
    setCartNumber(storedCart.length);
  }, []);

  // Add To Cart
  useEffect(() => {

    if (!props?.cartData) return;

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

  }, [props?.cartData]);

  // Remove From Cart
  useEffect(() => {

    if (!props?.removeCartData) return;

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

  }, [props?.removeCartData]);

  // Logout
  const logOut = () => {
    localStorage.removeItem("restuarantUser");
    router.push("/restuarant");
  };

  return (
    <div className="header-wrapper">

      <div className="logo">
        <Image
          src="/assets/food-delivery.jpg"
          alt="main logo"
          width={100}
          height={100}
          priority
        />
      </div>

      <ul>

        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/cart">
            Cart ({cartNumber})
          </Link>
        </li>

        {details && details.name ? (
          <>
            <li>
              <Link href="/restuarant/dashboard">
                Dashboard
              </Link>
            </li>

            <li>
              <Link href="/profile">
                {details.name}
              </Link>
            </li>

            <li>
              <button onClick={logOut}>
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <Link href="/restuarant">
              Login / Signup
            </Link>
          </li>
        )}

      </ul>

    </div>
  );
}