import SignOut from "@/components/signout";
import {
  Info,
  ProfilePicture,
  OtherSkill,
  Skill,
  Project,
  Experience,
} from "@/backend/models/models";
import { dbConnect } from "@/backend/db";
import {
  ISkill,
  IExperience,
  IProject,
  IInfo,
  IProfilePicture,
  IOtherSkill,
} from "@/backend/models/interfaces";

import InfoCard from "@/components/dashboard/info";
import ProfilePictureCard from "@/components/dashboard/profilePicture";
import OtherSkillCard from "@/components/dashboard/otherskills";
import ProjectCard from "@/components/dashboard/projects";
import SkillCard from "@/components/dashboard/skills";
import ExperienceCard from "@/components/dashboard/experiences";

import React from "react";

export const dynamic = "force-dynamic";

export default async function Dashboard() {
  await dbConnect();
  const info: IInfo[] = await Info.find().then((res) =>
    JSON.parse(JSON.stringify(res))
  );
  const profilePicture: IProfilePicture[] = await ProfilePicture.find().then(
    (res) => JSON.parse(JSON.stringify(res))
  );
  const otherSkill: IOtherSkill[] = await OtherSkill.find().then((res) =>
    JSON.parse(JSON.stringify(res))
  );
  const skills: ISkill[] = await Skill.find().then((res) =>
    JSON.parse(JSON.stringify(res))
  );
  const experiences: IExperience[] = await Experience.find().then((res) =>
    JSON.parse(JSON.stringify(res))
  );
  const projects: IProject[] = await Project.find().then((res) =>
    JSON.parse(JSON.stringify(res))
  );

  return (
    <div className="bg-gray-900 text-white px-8 py-12 h-full">
      <div className="mb-8 text-right">
        <SignOut />
      </div>

      <h1 className="text-4xl font-semibold mb-12">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <InfoCard info={info} />
        <ProfilePictureCard profilePicture={profilePicture} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <SkillCard skills={skills} />
        <OtherSkillCard otherSkill={otherSkill} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <ProjectCard projects={projects} />
        <ExperienceCard projects={experiences} />
      </div>
    </div>
  );
}
