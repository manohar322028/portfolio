import { dbConnect } from "@/backend/db";
import { Info } from "@/backend/models/models";

export async function GET() {
  await dbConnect();
  const intro = await Info.find({});
  return JSON.stringify(intro);
}
