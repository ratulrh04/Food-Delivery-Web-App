'use client'

import Image from "next/image"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function FoodItemList (){

    const [foodItems, setFoodItems] = useState([])
    const router = useRouter()

    const loadFoodItems = async () => {
        const restuarantData = JSON.parse(localStorage.getItem('restuarantUser'));
        const resto_id = restuarantData._id;
        let response = await fetch("http://localhost:3000/api/foods/"+resto_id)
        response = await response.json()
        if(response.success){
            setFoodItems(response.result)
        }else{
            alert("Food items list not loading")
        }
    }

   const deleteFoodItem = async(id) => {
    let response = await fetch('http://localhost:3000/api/foods/' + id, {
        method: 'DELETE'
    });
    response = await response.json();
    if(response.success){
        loadFoodItems();
    }else{
        alert("Food Items not deleted");
    }
}

    useEffect(()=>{
        loadFoodItems();
    },[])

    return(
        <div>
         <table border="1">
            <thead>
            <tr>
                <th>S.N</th>
                <th>Name</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
                <th>Operations</th>
            </tr>
            </thead>

            <tbody>
                {
                 foodItems && foodItems.map((item, key) => (
                        <tr key={key}>
                            <td>{key+1}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>

                            <td>
                                <Image 
                                    src={item.image}
                                    alt={item.name}
                                    width={50}
                                    height={50}
                                    style={{borderRadius:"100%"}}
                                />
                            </td>

                            <td>
                                <button onClick={()=>deleteFoodItem(item._id)}>Delete</button>
                                <button onClick={()=>router.push('dashboard/'+item._id)}>Edit</button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>

         </table>
        </div> 
    )
}