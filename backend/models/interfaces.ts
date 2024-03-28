interface IUser {
  username: string;
  password: string;
  type: string;
}

interface ISkill {
  name: string;
  icon: string;
}

interface IOtherSkill {
  name: string;
}

interface IProject {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface IProfilePicture {
  image: string;
}

interface IExperience {
  id: string;
  title: string;
  description: string;
  start: string;
  end: string;
}

interface IIntro {
  description: string;
}

interface IInfo {
  heading: string;
  bio: string;
  intros: IIntro[];
}

export type {
  IUser,
  ISkill,
  IOtherSkill,
  IProject,
  IProfilePicture,
  IExperience,
  IInfo,
  IIntro,
};
