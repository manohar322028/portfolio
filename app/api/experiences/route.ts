import { Experience } from "@/backend/models/models";
import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/backend/db";
import { IExperience } from "@/backend/models/interfaces";

export async function GET() {
  await dbConnect();
  const experiences = await Experience.find();
  return NextResponse.json(experiences);
}

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const experience: IExperience = await req.json();

    const existingExperience = await Experience.findOne({
      title: experience.title,
    });

    if (existingExperience) {
      return NextResponse.json("Experience already exists", {
        headers: { "content-type": "text" },
        status: 409,
      });
    } else {
      await Experience.create(experience);

      const newExperience = await Experience.findOne({
        title: experience.title,
      });
      return NextResponse.json(newExperience, {
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
