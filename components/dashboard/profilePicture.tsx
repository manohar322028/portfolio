import React from "react";
import { IProfilePicture } from "@/backend/models/interfaces";

export default function ProfilePictureCard({
  profilePicture,
}: {
  profilePicture: IProfilePicture[];
}) {
  return (
    <section className="bg-gray-800 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Profile Picture:</h2>
      <div className="flex items-center mb-4">
        <img
          src={profilePicture[0].image}
          alt="Profile"
          className="w-16 h-16 rounded-full mr-4"
        />
        <a className="text-indigo-500 hover:text-indigo-600 underline cursor-pointer">
          Edit
        </a>
      </div>
    </section>
  );
}
