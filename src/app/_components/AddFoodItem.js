'use client'

import { useState } from "react";


const AddFoodItem = (props) => {

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError]=useState(false);

   const handleAddFoodItem = async (event) => {
    event.preventDefault();
    // error validate useState code:
    if(!name || !price || !image || description){
        setError(true);
    };

    let resto_id;
    const restuarantData = JSON.parse(
        localStorage.getItem("restuarantUser")
    );
    if (restuarantData) {
        resto_id = restuarantData._id;
    }
    let response = await fetch("http://localhost:3000/api/foods",{
            method: "POST",
            body: JSON.stringify({ name, price, image,description, resto_id,}),
        }
    );
    response = await response.json();
    if (response.success) {
        alert("Food item added");
        props.setAddItem(false)
    }else{
        alert("Food item not added")
    }
};
//As i know my api hit in http://localhost:3000/api/foods link. That’s why i am fetch the link and POST it help by method: “POST" then in body method i am send also my input failed values/data according to useState values. after that, when i get response, it is then it might should be in Json format and if once its founded then it shows success in an alarm. and need the resto id i just simply get the id in my chrome localStorage.getItem("restuarantUser"). is its exits then its will be also hit the body method


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
                    {error && !name && <span className="input-error">Please Enter a valid Name</span>}
                </div>

                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Enter Price"
                        className="input-field"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                    {error && !price && <span className="input-error">Please Enter a valid Price</span>}
                </div>

                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Enter Image Path"
                        className="input-field"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    />
                    {error && !image && <span className="input-error">Please Enter a valid ImagePath</span>}
                </div>

                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Enter Description"
                        className="input-field"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    {error && !description && <span className="input-error">Please Enter a valid Description</span>}
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