import mongoose from "mongoose";

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
  name: {
    type: String,
    required: true,
  },
});

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  link: { type: String, required: true },
});

const profilePictureSchema = new mongoose.Schema({
  image: { type: String, required: true },
});

const experienceSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  start: { type: String, required: true },
  end: { type: String, required: true },
});

const introSchema = new mongoose.Schema({
  description: { type: String, required: true },
});

const infoSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  bio: { type: String, required: true },
  intros: [introSchema],
});

export const Info = mongoose.models.info || mongoose.model("info", infoSchema);

export const Experience =
  mongoose.models.experience || mongoose.model("experience", experienceSchema);

export const ProfilePicture =
  mongoose.models.profilePictures ||
  mongoose.model("profilePictures", profilePictureSchema);

export const Project =
  mongoose.models.projects || mongoose.model("projects", projectSchema);

export const Skill =
  mongoose.models.skills || mongoose.model("skills", skillSchema);

export const User =
  mongoose.models.users || mongoose.model("users", userSchema);

export const OtherSkill =
  mongoose.models.otherSkills ||
  mongoose.model("otherSkills", otherSkillSchema);
