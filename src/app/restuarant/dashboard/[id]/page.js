'use client'

import { useRouter } from "next/navigation";
import { useState } from "react";


const EditFoodItem = (props) => {
     const router = useRouter()

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [error, setError]=useState(false);

   const handleEditFoodItem = async (event) => {
    event.preventDefault();
    // error validate useState code:
    if(!name || !price || !image || description){
        setError(true);
    };
};

    return (
        <div>
            <form className="container" onSubmit={handleEditFoodItem}>
             <h1>Update Food Items</h1>
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
                        Update Food Item
                    </button>
                     <button onClick={()=>router.push('../dashboard')} className="button">
                        Back to Food Item
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditFoodItem;