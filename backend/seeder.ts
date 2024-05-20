import {
  Skill,
  Experience,
  Info,
  ProfilePicture,
  Project,
  OtherSkill,
} from "./models/models";
import {
  ISkill,
  IExperience,
  IInfo,
  IProfilePicture,
  IProject,
  IOtherSkill,
  IIntro,
} from "./models/interfaces";

import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

// Data

const skills: ISkill[] = [
  {
    id: "1",
    name: "HTML",
    icon: "fab fa-html5",
  },
  {
    id: "2",
    name: "CSS",
    icon: "fab fa-css3-alt",
  },
  {
    id: "3",
    name: "JavaScript",
    icon: "fab fa-js-square",
  },
];

const experiences: IExperience[] = [
  {
    id: "1",
    title: "Software Developer",
    description: "Developed software",
    start: "2021-01-01",
    end: "2021-01-01",
  },
];

const intros: IIntro[] = [
  {
    description: "Hello",
  },
];

const infos: IInfo[] = [
  {
    heading: "Heading",
    bio: "Bio",
    intros: intros,
  },
];

const profilePictures: IProfilePicture[] = [
  {
    image: "profile_picture.png",
  },
];

const projects: IProject[] = [
  {
    id: "1",
    title: "Project",
    description: "Description",
    image: "image",
    link: "link",
  },
];

const otherSkills: IOtherSkill[] = [
  {
    id: "1",
    name: "Skill",
  },
];

//1.db connection

dotenv.config({ path: ".env.local" });

const { MONGODB_URI } = process.env;

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

mongoose
  .connect(MONGODB_URI!)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((error) => {
    console.error(error.message);
  });

//2.import data

const importData = async () => {
  try {
    await Skill.deleteMany();
    await Skill.insertMany(skills);
    await Experience.deleteMany();
    await Experience.insertMany(experiences);
    await Info.deleteMany();
    await Info.insertMany(infos);
    await ProfilePicture.deleteMany();
    await ProfilePicture.insertMany(profilePictures);
    await Project.deleteMany();
    await Project.insertMany(projects);
    await OtherSkill.deleteMany();
    await OtherSkill.insertMany(otherSkills);

    console.log("Data Import Success");
    process.exit(0);
  } catch (error) {
    console.error("Error with data import");
    process.exit(1);
  }
};

//3.destroy data
const destroyData = async () => {
  try {
    await Skill.deleteMany();
    await Experience.deleteMany();
    await Info.deleteMany();
    await ProfilePicture.deleteMany();
    await Project.deleteMany();
    await OtherSkill.deleteMany();

    console.log("Data Destroyed");
    process.exit(0);
  } catch (error) {
    console.error("Error with data destroy");
    process.exit(1);
  }
};

//4. process.argv
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
