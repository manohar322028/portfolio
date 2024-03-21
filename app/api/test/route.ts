import { dbConnect } from "@/backend/db.js";
import { NextResponse } from "next/server";
import { Skill } from "@/backend/models/skill.ts";
export async function GET() {
  dbConnect();
  const skills = await Skill.find();
  return NextResponse.json(skills);
}
