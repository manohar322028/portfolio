import { Skill } from "./models/models";
import { ISkill } from "./models/interfaces";

import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";

const skills: ISkill[] = [
  {
    name: "HTML",
    icon: "fab fa-html5",
  },
  {
    name: "CSS",
    icon: "fab fa-css3-alt",
  },
  {
    name: "JavaScript",
    icon: "fab fa-js-square",
  },
  {
    name: "React",
    icon: "fab fa-react",
  },
  {
    name: "Node",
    icon: "fab fa-node-js",
  },
  {
    name: "MongoDB",
    icon: "fas fa-database",
  },
  {
    name: "Python",
    icon: "fab fa-python",
  },
  {
    name: "C++",
    icon: "fas fa-code",
  },
  {
    name: "Java",
    icon: "fab fa-java",
  },
  {
    name: "SQL",
    icon: "fas fa-database",
  },
  {
    name: "Git",
    icon: "fab fa-git-alt",
  },
  {
    name: "Docker",
    icon: "fab fa-docker",
  },
  {
    name: "Kubernetes",
    icon: "fab fa-kubernetes",
  },
  {
    name: "AWS",
    icon: "fab fa-aws",
  },
  {
    name: "Azure",
    icon: "fab fa-microsoft",
  },
  {
    name: "Google Cloud",
    icon: "fab fa-google",
  },
  {
    name: "Linux",
    icon: "fab fa-linux",
  },
  {
    name: "Windows",
    icon: "fab fa-windows",
  },
  {
    name: "MacOS",
    icon: "fab fa-apple",
  },
  {
    name: "Android",
    icon: "fab fa-android",
  },
  {
    name: "iOS",
    icon: "fab fa-apple",
  },
  {
    name: "Flutter",
    icon: "fab fa-flutter",
  },
  {
    name: "Swift",
    icon: "fab fa-swift",
  },
  {
    name: "Kotlin",
    icon: "fab fa-kotlin",
  },
  {
    name: "Dart",
    icon: "fas fa-code",
  },
  {
    name: "Ruby",
    icon: "fas fa-gem",
  },
];

//1.db connection

dotenv.config({ path: ".env.local" });

const { db_url } = process.env;

if (!db_url) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

mongoose
  .connect(db_url!)
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
