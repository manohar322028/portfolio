import { OtherSkill } from "../models/models";
import { IOtherSkill } from "../models/interfaces";

export async function updateOtherSkill(id: string, formData: IOtherSkill) {
  try {
    const otherSkill = await OtherSkill.findOneAndUpdate({ id }, formData, {
      new: true,
    });
    return otherSkill;
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
}
