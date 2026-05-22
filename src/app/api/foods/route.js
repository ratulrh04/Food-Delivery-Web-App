import { connectionString } from "@/app/library/db";
import { foodModel } from "@/app/library/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const payload = await request.json();
    let success = false
    await mongoose.connect(connectionString);
    const food = new foodModel(payload);
    const result = await food.save();
    if(result){
        success = true
    }
    return NextResponse.json({result, success});
}

//Request is actually that what value or data posting to am i example.js page by fetch POST method. Then by awaiting i am calling to the connection String. Then in an a variable i calling the Shema model (FoodModel) and i pass the value by Schema argument which is am i store from the fetch link then simply save the input value in MongoDB by save() Method and then simple if find the value then show a success alarm