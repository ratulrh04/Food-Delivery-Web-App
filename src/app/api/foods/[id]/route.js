import { connectionString } from "@/app/library/db";
import { foodModel } from "@/app/library/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  let success = false;
  await mongoose.connect(connectionString);
  const result = await foodModel.find({ resto_id: id });
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}

export async function DELETE(request, {params}){
  const {id} = await params;
  let success = false;
  await mongoose.connect(connectionString);
  const result = await foodModel.deleteOne({_id:id})
  if(result.deletedCount>0){
    success:true
  }
  return NextResponse.json({result, success})
}