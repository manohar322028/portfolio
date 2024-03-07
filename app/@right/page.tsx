import Skill from "@/components/skill";
import Project from "@/components/project";
const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Tailwindcss",
  "Git",
  "Github",
  "VSCode",
  "Figma",
  "Adobe XD",
  "Framer Motion",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
];

const events = {
  event1: {
    title: "Event 1",
    date: "2022-01-01",
    description: "Event 1 description",
  },
  event2: {
    title: "Event 2",
    date: "2022-02-01",
    description: "Event 2 description",
  },
  event3: {
    title: "Event 3",
    date: "2022-03-01",
    description: "Event 3 description",
  },

  event4: {
    title: "Event 4",
    date: "2022-04-01",
    description: "Event 4 description",
  },
};
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
      <div className="h-screen overflow-y-scroll opacity-80">
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
            <div className="grid my-4 mr-4 gap-4 grid-cols-7">
              {skills.map((skill) => (
                <Skill key={skill} skill={skill} />
              ))}
            </div>
            <h2 className="text-2xl">Other Skills</h2>
            <div className="flex flex-row flex-wrap gap-4 mt-4">
              <li>Communication</li>
              <li>Leadership</li>
              <li>Problem Solving</li>
              <li>Public Speaking</li>
              <li>Teamwork</li>
              <li>Adaptability</li>
              <li>Creativity</li>
              <li>Playing Guitar ;)</li>
            </div>
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
