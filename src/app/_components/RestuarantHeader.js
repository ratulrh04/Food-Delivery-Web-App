
"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function RestaurantHeader() {

  const[details, setDetails]=useState()
  const router = useRouter()
  const pathName = usePathname()

 useEffect(() => {
  let data = localStorage.getItem("restuarantUser"); 
  if (!data) {
    router.push("/restuarant");
  }
   else if(data && pathName == "/restuarant"){
      router.push("./restuarant/dashboard")
   }
  else {
    setDetails(JSON.parse(data));
  }
}, [router]);

// Logout Function 
  const logOut = ()=>{
     localStorage.removeItem('restuarantUser')
     router.push("/restuarant");
  }

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
     {
       details && details.name ?
       <>
         <li> <button onClick={logOut}>Logout</button> </li>
         <li><Link href="/"> Profile </Link></li>
       </>
          :
        <li> <Link href="/"> Login/Signup </Link> </li>
     }
       
      </ul>
    </div>
  );
}
