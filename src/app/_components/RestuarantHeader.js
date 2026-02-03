

import Image from "next/image";
import Link from "next/link";

export default function RestaurantHeader() {
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
           <Link href="/"> Home </Link>
        </li>
        <li>
           <Link href="/"> Login/Signup </Link>
        </li>
        <li>
           <Link href="/"> Profile </Link>
        </li>
      </ul>
    </div>
  );
}
