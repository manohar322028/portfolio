import options from "@/app/api/auth/[...nextauth]/options";
import { getServerSession } from "next-auth/next";

declare global {
  var loggedIn: boolean;
}

export default async function checkAuth() {
  const session = await getServerSession(options);

  if (!session) {
    global.loggedIn = false;
  } else {
    global.loggedIn = true;
  }
}
