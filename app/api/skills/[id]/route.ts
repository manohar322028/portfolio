import { dbConnect } from "@/backend/db";
import { Skill } from "@/backend/models/models";

import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  try {
    const skill = await Skill.findOne({ id: params.id });
    if (!skill) {
      return NextResponse.json("Skill not found", {
        headers: { "content-type": "text" },
        status: 404,
      });
    } else {
      await Skill.deleteOne({ id: params.id });
      return NextResponse.json(
        { "deleted skill": skill },
        {
          headers: { "content-type": "json" },
          status: 200,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(error, {
      headers: { "content-type": "text" },
      status: 500,
    });
  }
}

export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  try {
    const skill = await Skill.findOne({ id: params.id });
    if (!skill) {
      return NextResponse.json("Skill not found", {
        headers: { "content-type": "text" },
        status: 404,
      });
    } else {
      const newSkill = await req.json();
      await Skill.updateOne({ id: params.id }, newSkill);
      return NextResponse.json(
        { "updated skill": await Skill.findOne({ id: params.id }) },
        {
          headers: { "content-type": "json" },
          status: 200,
        }
      );
    }
  } catch (error) {
    return NextResponse.json(error, {
      headers: { "content-type": "text" },
      status: 500,
    });
  }
}
