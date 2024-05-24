import Image from "next/image";
import Project from "@/components/project";
import Experience from "@/components/experience";
import { dbConnect } from "@/backend/db";
import {
  IInfo,
  ISkill,
  IOtherSkill,
  IProject,
  IExperience,
} from "@/backend/models/interfaces";
import {
  Info as InfoData,
  Skill as SkillData,
  Project as ProjectData,
  Experience as ExperienceData,
  OtherSkill as OtherSkillData,
} from "@/backend/models/models";

export const dynamic = "force-dynamic";

export default async function Right() {
  await dbConnect();
  const info: IInfo[] = await InfoData.find().then((res) =>
    JSON.parse(JSON.stringify(res))
  );
  const skills: ISkill[] = await SkillData.find().then((res) =>
    JSON.parse(JSON.stringify(res))
  );
  const otherSkills: IOtherSkill[] = await OtherSkillData.find().then((res) =>
    JSON.parse(JSON.stringify(res))
  );
  let experiences: IExperience[] = await ExperienceData.find().then((res) =>
    JSON.parse(JSON.stringify(res))
  );
  experiences = experiences.sort((a, b) => {
    return parseInt(b.id) - parseInt(a.id);
  });
  let projects: IProject[] = await ProjectData.find().then((res) =>
    JSON.parse(JSON.stringify(res))
  );
  projects = projects.sort((a, b) => {
    return parseInt(a.id) - parseInt(b.id);
  });

  const heading = info[0].heading;
  const intros = info[0].intros;

  return (
    <>
      <div className=" flex flex-col h-screen font-julee opacity-80">
        <div className="bg-rightcolor1 px-4 md:px-8 py-6">
          <h1 className="text-4xl">{heading}</h1>
          <div className="mt-4 text-lg ">
            {intros.map((intro) => (
              <p key={intro.description}>{intro.description}</p>
            ))}
          </div>
        </div>

        <div className="bg-rightcolor2 px-4 md:px-8 py-6">
          <h2 className="text-2xl">Technical Skills</h2>
          <div className="mx-auto my-4 gap-4 grid grid-cols-3 sm:grid-cols-7 md:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 ">
            {skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center">
                <Image
                  alt={skill.name}
                  src={skill.icon}
                  width={50}
                  height={50}
                  className="mb-2"
                />
                <p className="text-xs">{skill.name}</p>
              </div>
            ))}
          </div>
          <h2 className="text-2xl mt-6">Other Skills</h2>
          <div className="flex flex-row flex-wrap gap-4 mt-4">
            {otherSkills.map((skill) => (
              <li key={skill.name}>{skill.name}</li>
            ))}
          </div>
        </div>
        <div className="bg-rightcolor1 px-4 md:px-8 pt-6 pb-3">
          <h2 className="text-2xl">Digital Dilemmas</h2>
          <div className=" my-4 sm:gap-x-4 sm:grid sm:grid-cols-2 items-center justify-center">
            {Object.values(projects).map((project) => (
              <Project key={project.title} project={project} />
            ))}
          </div>
        </div>
        <div className="bg-rightcolor2 px-4 md:px-8 py-6">
          <h2 className="text-2xl">Boss Battles</h2>
          <div className="relative py-4">
            {Object.values(experiences).map((experience) => (
              <Experience key={experience.title} experience={experience} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
