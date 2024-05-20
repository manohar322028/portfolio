"use server";
import { writeFile } from "fs/promises";


export default async function saveProjectImage(formData : FormData) {
  try {
    const file = formData.get("file");
    const title = formData.get("title") as string;
    if (!file) {
      throw new Error("No file found");
    }
    if (!(file instanceof File)) {
      throw new Error("Invalid file type.");
    }
    const buffer = await file.arrayBuffer();
    const image = Buffer.from(buffer);

    const filename = `${title.toLowerCase().replace(/\s/g, "_")}.png`;
    const pathname = process.cwd() + `/public/projects/${filename}`;
    await writeFile(pathname, image);
    return `/projects/${filename}`;
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
}
