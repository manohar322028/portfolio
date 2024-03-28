import { dbConnect } from "@/backend/db";
import { Skill } from "@/backend/models/models";
import { ISkill } from "@/backend/models/interfaces";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const skills = await Skill.find();
  return NextResponse.json(skills);
}

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const skill: ISkill = await req.json();

    const existingSkill = await Skill.findOne({ name: skill.name });

    if (existingSkill) {
      return NextResponse.json("Skill already exists", {
        headers: { "content-type": "text" },
        status: 409,
      });
    } else {
      await Skill.create(skill);

      const newskill = await Skill.findOne({ name: skill.name });
      return NextResponse.json(newskill, {
        headers: { "content-type": "application/json" },
        status: 201,
      });
    }
  } catch (error) {
    return NextResponse.json(error, {
      headers: { "content-type": "text" },
      status: 500,
    });
  }
}
