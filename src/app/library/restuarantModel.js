const { default: mongoose } = require("mongoose");

const restuarantModel = new mongoose.Schema({
    name : String
});

export const restuarantSchema = mongoose.models.restuarants
|| mongoose.model("restuarants", restuarantModel);