"use client";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function SignOutButton() {
  const router = useRouter();
  return (
    <button
      className=" bg-backgroundcolor hover:bg-leftcolor text-white font-bold py-2 px-4 rounded"
      onClick={() => {
        signOut({ redirect: false }).then(() => {
          router.push("/");
        });
      }}
    >
      Sign Out
    </button>
  );
}
