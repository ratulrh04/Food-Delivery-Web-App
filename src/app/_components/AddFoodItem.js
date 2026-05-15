'use client'

import { useState } from "react";

const AddFoodItem = () => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");

    const handleAddFoodItem = (event) => {
        event.preventDefault();

        console.log("Food Name:", name);
        console.log("Price:", price);
        console.log("Image:", image);
        console.log("Description:", description);
    }

    return (
        <div>
            <form className="container" onSubmit={handleAddFoodItem}>

                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Enter Food Name"
                        className="input-field"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </div>

                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Enter Price"
                        className="input-field"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </div>

                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Enter Image Path"
                        className="input-field"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    />
                </div>

                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Enter Description"
                        className="input-field"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>

                <div className="input-wrapper">
                    <button type="submit" className="button">
                        Add Food Item
                    </button>
                </div>

            </form>
        </div>
    )
}

export default AddFoodItem;