import mongoose, { Document } from "mongoose";
import {
  IExperience,
  IInfo,
  IOtherSkill,
  IProject,
  IProfilePicture,
  ISkill,
  IUser,
  IIntro,
} from "./interfaces";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const skillSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const otherSkillSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: {
    type: String,
    required: true,
  },
});

const projectSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
});

const profilePictureSchema = new mongoose.Schema({
  image: { type: String, required: true },
});

const experienceSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
});

const infoSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  bio: { type: String, required: true },
  intros: [] as IIntro[],
});

export const Info: mongoose.Model<IInfo> =
  mongoose.models.infos ||
  (mongoose.model<IInfo>("infos", infoSchema) as mongoose.Model<IInfo>);

export const Experience: mongoose.Model<IExperience> =
  mongoose.models.experiences ||
  (mongoose.model<IExperience>(
    "experiences",
    experienceSchema
  ) as mongoose.Model<IExperience>);

export const ProfilePicture: mongoose.Model<IProfilePicture> =
  mongoose.models.profilePictures ||
  (mongoose.model<IProfilePicture>(
    "profilePictures",
    profilePictureSchema
  ) as mongoose.Model<IProfilePicture>);

export const Project: mongoose.Model<IProject> =
  mongoose.models.projects ||
  (mongoose.model<IProject>(
    "projects",
    projectSchema
  ) as mongoose.Model<IProject>);

export const Skill: mongoose.Model<ISkill> =
  mongoose.models.skills ||
  (mongoose.model<ISkill>("skills", skillSchema) as mongoose.Model<ISkill>);

export const User: mongoose.Model<IUser> =
  mongoose.models.users ||
  (mongoose.model<IUser>("users", userSchema) as mongoose.Model<IUser>);

export const OtherSkill: mongoose.Model<IOtherSkill> =
  mongoose.models.otherSkills ||
  (mongoose.model<IOtherSkill>(
    "otherSkills",
    otherSkillSchema
  ) as mongoose.Model<IOtherSkill>);
