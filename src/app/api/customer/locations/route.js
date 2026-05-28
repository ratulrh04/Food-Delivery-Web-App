import { connectionString } from "@/app/library/db"
import { restuarantSchema } from "@/app/library/restuarantModel";
import mongoose from "mongoose"
import { NextResponse } from "next/server";



export async function GET () {
    await mongoose.connect(connectionString);
    let result = await restuarantSchema.find();
    result = result.map((item)=>item.city.charAt(0).toUpperCase()+ item.city.slice(1))
    result = [...new Set(result.map((item)=>item))]
    return NextResponse.json({success:true, result})
}