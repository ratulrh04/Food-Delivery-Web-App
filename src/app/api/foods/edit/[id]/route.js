import { connectionString } from "@/app/library/db";
import { foodModel } from "@/app/library/foodsModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = await params;
  let success = false;
  await mongoose.connect(connectionString);
  const result = await foodModel.findOne({ _id: id });
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}

export async function PUT(request, { params }) {
  const { id } = await params;
  const payload = await request.json();
  let success = false;
  await mongoose.connect(connectionString);
  const result = await foodModel.findOneAndUpdate({ _id: id },payload);
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}