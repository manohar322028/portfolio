import { dbConnect } from "@/backend/db";
import { Skill } from "@/backend/models/models";

import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { name: string } }
) {
  await dbConnect();
  try {
    const skill = await Skill.findOne({ name: params.name });
    if (!skill) {
      return NextResponse.json("Skill not found", {
        headers: { "content-type": "text" },
        status: 404,
      });
    } else {
      await Skill.deleteOne({ name: params.name });
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
