"use server";

import { OtherSkill } from "../models/models";
import { IOtherSkill } from "../models/interfaces";

export async function saveOtherSkill(formData: IOtherSkill) {
  try {
    let otherSkill = await OtherSkill.findOne({ id: formData.id });
    if (otherSkill) {
      otherSkill.name = formData.name;
      await otherSkill.save();
    } else {
      otherSkill = new OtherSkill(formData);
      await otherSkill.save();
    }
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
}

export async function deleteOtherSkill(id: string) {
  try {
    await OtherSkill.findOneAndDelete({ id });
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
}
