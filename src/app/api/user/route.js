import { connectionString } from "@/app/library/db";
import { userModel } from "@/app/library/userModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const payload = await request.json();

    await mongoose.connect(connectionString);

    const user = new userModel(payload);

    const result = await user.save();

    return NextResponse.json({
        result,
        success: true
    });
}