import { connectionString } from "@/app/library/db";
import { foodModel } from "@/app/library/foodsModel";
import { restuarantSchema } from "@/app/library/restuarantModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  await mongoose.connect(connectionString);
  const details = await restuarantSchema.findOne({_id:id})
  const foodItems = await foodModel.find({ resto_id: id });
  return NextResponse.json({success:true,details,foodItems });
}