import { redirect } from "next/navigation";
import checkAuth from "./checkauth";

export async function GET() {
  await checkAuth();
  if (global.loggedIn) {
    return redirect("/");
  } else {
    return redirect("/api/auth/signin?callbackUrl=/api/dashboard");
  }
}
