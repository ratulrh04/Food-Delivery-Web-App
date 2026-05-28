'use client'

import Link from "next/link"
import Image from "next/image"

const CustomerHeader = () => {
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
                    <Link href="/">Cart(0)</Link>
                </li>

                <li>
                    <Link href="/">Add Restaurant</Link>
                </li>
            </ul>
        </div>
    )
}

export default CustomerHeader