import Skill from "@/components/skill";
import Project from "@/components/project";
const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwindcss"];
const projects = ["project 1", "project 2", "project 3"];
export default function Right() {
  return (
    <>
      <div className=" font-bold text-3xl mt-10 text-left ml-10 ">
        Hello, I am Manohar Dahal
      </div>
      <div className="text-left mt-5 ml-10">I am a Web Developer</div>

      <div className="text-left mt-5 ml-10">What I can do</div>
      <div className="grid mt-10 ml-10 mr-10 gap-5 grid-cols-3">
        {skills.map((skill) => (
          <Skill key={skill} skill={skill} />
        ))}
      </div>

      <div className="text-left mt-5 ml-10">What I have done</div>
      <div className="grid mt-10 ml-10 mr-10 gap-5 grid-cols-3">
        {projects.map((project) => (
          <Project key={project} project={project} />
        ))}
      </div>
    </>
  );
}
