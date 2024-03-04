import Skill from "@/components/skill";
import Project from "@/components/project";
const skills = ["HTML", "CSS", "JavaScript", "React", "Next.js", "Tailwindcss"];
const projects = {
  project1: {
    name: "Project 1",
    description: "Project 1 description",
    url: "github 1",
  },
  project2: {
    name: "Project 2",
    description: "Project 2 description",
    url: "github 2",
  },
  project3: {
    name: "Project 3",
    description: "Project 3 description",
    url: "github 3",
  },
  project4: {
    name: "Project 4",
    description: "Project 4 description",
    url: "github 4",
  },
  project5: {
    name: "Project 5",
    description: "Project 5 description",
    url: "github 5",
  },
};
export default function Right() {
  return (
    <>
      {/* <div className=" font-bold text-3xl mt-10 text-left ml-10 ">
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
        {Object.values(projects).map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div> */}

      <div className="h-screen overflow-y-scroll">
        <div className="flex flex-col bg-white h-screen font-julee">
          <div className="bg-rightcolor1 pl-10 py-8">
            <h1 className="text-4xl">Hi, I am Manohar Dahal</h1>
            <div className="mt-4 text-lg ">
              <p>a computer engineer,</p>
              <p>a writer, </p>
              <p>a musician. </p>
              <p>I know about beats, bytes and words.</p>
            </div>
          </div>

          <div className="bg-rightcolor2 pl-10 py-8">
            <h2 className="text-2xl">Technical Skills</h2>
            <h2 className="text-2xl">Other Skills</h2>
          </div>
          <div className="bg-rightcolor1 pl-10 py-8">
            <h2 className="text-2xl">Digital Dilemmas</h2>
            <div className="grid my-4 mr-4 gap-4 grid-cols-2">
              {Object.values(projects).map((project) => (
                <Project key={project.name} project={project} />
              ))}
            </div>
          </div>
          <div className="bg-rightcolor2 pl-10 py-8">
            <h2 className="text-2xl">Boss Battles</h2>
          </div>
        </div>
      </div>
    </>
  );
}
