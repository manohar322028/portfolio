import { dbConnect } from "@/backend/db";
import { Project } from "@/backend/models/models";
import { IProject } from "@/backend/models/interfaces";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const projects = await Project.find();
  return NextResponse.json(projects);
}

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const project: IProject = await req.json();

    const existingProject = await Project.findOne({ link: project.link });

    if (existingProject) {
      return NextResponse.json("Project already exists", {
        headers: { "content-type": "text" },
        status: 409,
      });
    } else {
      await Project.create(project);

      const newProject = await Project.findOne({ link: project.link });
      return NextResponse.json(newProject, {
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
