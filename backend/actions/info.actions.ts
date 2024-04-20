"use server";

import { Info } from "@/backend/models/models";
import { IInfo } from "@/backend/models/interfaces";

export async function updateInfo(formData: IInfo) {
  try {
    await Info.findOneAndUpdate({}, formData, { new: true });
  } catch (error) {
    // Handle error
    console.error(error);
    throw error;
  }
}
