import { dbConnect } from "@/backend/db";
import { Project } from "@/backend/models/models";

import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  await dbConnect();
  try {
    const project = await Project.findOne({ id: params.id });
    if (!project) {
      return NextResponse.json("Project not found", {
        headers: { "content-type": "text" },
        status: 404,
      });
    } else {
      await Project.deleteOne({ id: params.id });
      return NextResponse.json(
        { "deleted project": project },
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
    const project = await Project.findOne({ id: params.id });
    if (!project) {
      return NextResponse.json("Project not found", {
        headers: { "content-type": "text" },
        status: 404,
      });
    } else {
      const newProject = await req.json();
      await Project.updateOne({ id: params.id }, newProject);
      return NextResponse.json(
        { "updated project": await Project.findOne({ id: params.id }) },
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
