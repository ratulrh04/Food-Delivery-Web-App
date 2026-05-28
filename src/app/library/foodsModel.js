
import mongoose from "mongoose";

export const foodSchema = new mongoose.Schema({
    name: String, //those property are choise depends on html/useState input value name
    price: Number, //those property are choise depends on html/useState input value name
    image: String, //those property are choise depends on html/useState input value name
    description: String, //those property are choise depends on html/useState input value name
    resto_id: mongoose.Schema.Types.ObjectId, //its are memorize(মুখস্ত) for every time to get the collection id 
});

export const foodModel = mongoose.models.foods || mongoose.model("foods", foodSchema);
// foodShema just a variable name, mongose.models are memorized adn then food(collertion name in MongoDB) then or operator is have to (is have/haven't stor the collection before the mongoDB)Then mogose.model are include the colloction name and shema name in a perams arguments