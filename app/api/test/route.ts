import { dbConnect } from "@/backend/db.ts";
import { NextResponse } from "next/server";
import { Skill } from "@/backend/models/models";
export async function GET() {
  await dbConnect();
  const skills = await Skill.find();
  return NextResponse.json(skills);
}
