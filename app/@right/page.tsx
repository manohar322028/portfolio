import Skill from "@/components/skill";
import Project from "@/components/project";
import Experience from "@/components/experience";
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
      <div className=" flex flex-col h-screen font-julee opacity-80">
        <div className="bg-rightcolor1 px-4 md:px-8 py-6">
          <h1 className="text-4xl">Hi, I am Manohar Dahal</h1>
          <div className="mt-4 text-lg ">
            <p>a computer engineer,</p>
            <p>a writer, </p>
            <p>a musician. </p>
            <p>I know about beats, bytes and words.</p>
          </div>
        </div>

        <div className="bg-rightcolor2 px-4 md:px-8 py-6">
          <h2 className="text-2xl">Technical Skills</h2>
          <div className="mx-auto my-4 gap-4 grid grid-cols-3 sm:grid-cols-7 md:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8 ">
            {skills.map((skill) => (
              <div key={skill} className="flex justify-center items-center">
                <Skill skill={skill} />
              </div>
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
        <div className="bg-rightcolor1 px-4 md:px-8 py-6">
          <h2 className="text-2xl">Digital Dilemmas</h2>
          <div className=" my-4 sm:gap-x-4 sm:grid sm:grid-cols-2 items-center justify-center">
            {Object.values(projects).map((project) => (
              <Project key={project.name} project={project} />
            ))}
          </div>
        </div>
        <div className="bg-rightcolor2 px-4 md:px-8 py-6">
          <h2 className="text-2xl">Boss Battles</h2>
          <div className="relative py-4">
            <Experience />
            <Experience />
            <Experience />
            <Experience />
            <Experience />
          </div>
        </div>
      </div>
    </>
  );
}
