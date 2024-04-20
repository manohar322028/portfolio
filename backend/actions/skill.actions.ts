import { Skill } from "../models/models";
import { ISkill } from "../models/interfaces";

export async function updateSkill(id: string, formData: ISkill) {
  try {
    const skill = await Skill.findOneAndUpdate({ id }, formData, { new: true });
    return skill;
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
}
