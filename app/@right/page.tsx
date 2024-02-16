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
        {/* Your content here */}
        <div className="flex flex-col space-y-4">
          {/* Example content */}
          <div className="bg-white p-4">Content 1</div>
          <div className="bg-gray-100 p-4">Content 2</div>
          <div className="bg-white p-4">Content 3</div>
          {/* Add more content */}
        </div>
      </div>
    </>
  );
}
