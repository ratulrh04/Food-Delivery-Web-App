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
    let result = false
    await mongoose.connect(connectionString);
    if(payload.login){
    //  use it for login api
    result = await restuarantSchema.findOne({email:payload.email, password:payload.password})
    }else{
    // use if for lingUp api
    let restuarant = new restuarantSchema(payload);
    result = await restuarant.save();
    }
    return NextResponse.json({result, success:true}) ;
}
