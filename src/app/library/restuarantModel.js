const { default: mongoose } = require("mongoose");

const restuarantModel = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    city : String,
    address : String,
    contact : String
});

export const restuarantSchema = mongoose.models.restuarants
|| mongoose.model("restuarants", restuarantModel);