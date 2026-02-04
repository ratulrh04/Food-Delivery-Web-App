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
