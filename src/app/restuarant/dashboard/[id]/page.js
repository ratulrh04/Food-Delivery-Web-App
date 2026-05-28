'use client'

import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditFoodItem = () => {

    const router = useRouter();
    const params = useParams();

    const foodId = params.id;

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        handleFoodItem();
    }, []);

    const handleFoodItem = async () => {

        let response = await fetch(
            'http://localhost:3000/api/foods/edit/' + foodId
        );

        response = await response.json();

        console.log(response);

        if (response.success) {

            setName(response.result.name);
            setPrice(response.result.price);
            setImage(response.result.image);
            setDescription(response.result.description);
        }
    }

    const handleEditFoodItem = async (event) => {

        event.preventDefault();

        if (!name || !price || !image || !description) {
            setError(true);
            return false;
        }else{
            setError(false)
        }

        let response = await fetch(
            'http://localhost:3000/api/foods/edit/' + foodId,
            {
                method: "PUT",
                body: JSON.stringify({
                    name,
                    price,
                    image,
                    description
                })
            }
        );

        response = await response.json();

        if (response.success) {
            alert("Food Item Updated Successfully");
            router.push("../dashboard");
        } else {
            alert("Something went wrong");
        }
    }

    return (
        <div>

            <form className="container" onSubmit={handleEditFoodItem}>

                <h1>Update Food Item</h1>

                <div className="input-wrapper">

                    <input
                        type="text"
                        placeholder="Enter Food Name"
                        className="input-field"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />

                    {
                        error && !name &&
                        <span className="input-error">
                            Please Enter Valid Name
                        </span>
                    }

                </div>

                <div className="input-wrapper">

                    <input
                        type="text"
                        placeholder="Enter Price"
                        className="input-field"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />

                    {
                        error && !price &&
                        <span className="input-error">
                            Please Enter Valid Price
                        </span>
                    }

                </div>

                <div className="input-wrapper">

                    <input
                        type="text"
                        placeholder="Enter Image URL"
                        className="input-field"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    />

                    {
                        error && !image &&
                        <span className="input-error">
                            Please Enter Valid Image URL
                        </span>
                    }

                </div>

                <div className="input-wrapper">

                    <input
                        type="text"
                        placeholder="Enter Description"
                        className="input-field"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />

                    {
                        error && !description &&
                        <span className="input-error">
                            Please Enter Valid Description
                        </span>
                    }

                </div>

                <div className="input-wrapper">

                    <button type="submit" className="button">
                        Update Food Item
                    </button>

                    <button
                        type="button"
                        className="button"
                        onClick={() => router.push("../dashboard")}
                    >
                        Back To Dashboard
                    </button>

                </div>

            </form>

        </div>
    )
}

export default EditFoodItem;