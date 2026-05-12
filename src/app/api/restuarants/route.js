import { connectionString } from "@/app/library/db";
import { restuarantSchema } from "@/app/library/restuarantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(connectionString);

    const data = await restuarantSchema.find();
    console.log(data);

    return NextResponse.json({ result: true, data });
}

export async function POST(request){
    let payload = await request.json();
    let result;
    let success = false
    await mongoose.connect(connectionString);
    if(payload.login){
    //  use it for login api
    result = await restuarantSchema.findOne({email:payload.email, password:payload.password})
    if (result){
      success = true
    }
    }else{
    // use if for singUp api
    let restuarant = new restuarantSchema(payload);
    result = await restuarant.save();
      if (result){
      success = true
    }
    }
    return NextResponse.json({result, success}) ;
}
