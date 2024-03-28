import { Experience } from "@/backend/models/models";
import { NextRequest, NextResponse } from "next/server";
import { dbConnect } from "@/backend/db";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  try {
    const experience = await Experience.findOne({ id: params.id });
    if (!experience) {
      return NextResponse.json("Experience not found", {
        headers: { "content-type": "text" },
        status: 404,
      });
    } else {
      await Experience.deleteOne({ id: params.id });
      return NextResponse.json(
        { "deleted experience": experience },
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
    const experience = await Experience.findOne({ id: params.id });
    if (!experience) {
      return NextResponse.json("Experience not found", {
        headers: { "content-type": "text" },
        status: 404,
      });
    } else {
      const newExperience = await req.json();
      await Experience.updateOne({ id: params.id }, newExperience);
      return NextResponse.json(
        { "updated experience": await Experience.findOne({ id: params.id }) },
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
