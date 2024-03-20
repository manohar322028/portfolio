import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  icon: {
    type: String,
  },
});

export const Skill =
  mongoose.models.skills || mongoose.model("skills", skillSchema);
