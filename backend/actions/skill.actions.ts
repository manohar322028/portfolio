"use server";

import { writeFile } from "fs/promises";

import { Skill } from "../models/models";
import { ISkill } from "../models/interfaces";

export async function updateSkill(formData: ISkill) {
  try {
    const existingSkill = await Skill.findOne({ id: formData.id });

    if (existingSkill) {
      await Skill.findOneAndUpdate({ id: formData.id }, formData);
    } else {
      await Skill.create(formData);
    }
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
}

// export async function updateSkillIcon(formData: FormData) {
//   try {
//     const file = formData.get("file");
//     const name = formData.get("name");
//     const id = formData.get("id");
//     if (!file) {
//       throw new Error("No file found in form data.");
//     }
//     if (!(file instanceof File)) {
//       throw new Error("Invalid file type.");
//     }
//     const buffer = await file.arrayBuffer();
//     const image = Buffer.from(buffer);

//     const filename = `${name}.png`;
//     const pathname = process.cwd() + `/public/skill-icons/${filename}`;
//     await writeFile(pathname, image);

//     const existingSkill = await Skill.findOne({ id });

//     if (existingSkill) {
//       await Skill.findOneAndUpdate(
//         { id },
//         { id, name, icon: `/skill-icons/${filename}` }
//       );
//     } else {
//       await Skill.create({ id, name, icon: `/skill-icons/${filename}` });
//     }
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }
