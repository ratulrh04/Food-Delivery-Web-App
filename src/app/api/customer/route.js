import { connectionString } from "@/app/library/db"
import { restuarantSchema } from "@/app/library/restuarantModel";
import mongoose from "mongoose"
import { NextResponse } from "next/server";

export async function GET(request) {

    let queryParams = request.nextUrl.searchParams;

    let filter = {};

    // Search by location
    if(queryParams.get("location")){

        let city = queryParams.get("location");

        filter.city = {
            $regex:new RegExp(city,"i")
        }
    }

    // Search by restaurant name
    if(queryParams.get("restaurant")){

        let name = queryParams.get("restaurant");

        filter.name = {
            $regex:new RegExp(name,"i")
        }
    }

    await mongoose.connect(connectionString,{
        useNewUrlParser:true
    });

    let result = await restuarantSchema.find(filter);

    return NextResponse.json({
        success:true,
        result
    });

}