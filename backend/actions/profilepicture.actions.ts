"use server";

import { writeFile } from "fs/promises";

export async function updateProfilePicture(formData: FormData) {
  try {
    const file = formData.get("file");
    if (!file) {
      throw new Error("No file found in form data.");
    }
    if (!(file instanceof File)) {
      throw new Error("Invalid file type.");
    }
    const buffer = await file.arrayBuffer();
    const image = Buffer.from(buffer);

    const filename = "profile_picture.png";
    const pathname = process.cwd() + `/public/${filename}`;
    await writeFile(pathname, image);
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
}
