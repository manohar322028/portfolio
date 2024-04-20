"use client";
import React, { useState } from "react";
import { IProfilePicture } from "@/backend/models/interfaces";
import { updateProfilePicture } from "@/backend/actions/profilepicture.actions";

export default function ProfilePictureCard({
  profilePicture,
}: {
  profilePicture: IProfilePicture[];
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleEditClick = () => {
    const inputElement = document.createElement("input");
    inputElement.type = "file";
    inputElement.accept = "image/*";
    inputElement.onchange = (event) => {
      const file = (event.target as HTMLInputElement).files?.[0];
      if (file) {
        setSelectedImage(file);
      }
    };
    inputElement.click();
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    if (selectedImage) {
      myFunction(selectedImage);
      setIsEditing(false);
    }
  };

  const myFunction = (file: File) => {
    setIsEditing(false);
    const formData = new FormData();
    formData.append("file", file);

    updateProfilePicture(formData);
  };

  return (
    <section className="bg-gray-800 rounded-lg p-6 shadow-md text-center">
      <h2 className="text-2xl font-semibold mb-4">Profile Picture:</h2>
      <div className="flex flex-col items-center mb-4">
        <div className="w-4/5 h-[80%] mb-4 rounded-full overflow-hidden">
          <img
            src={
              selectedImage
                ? URL.createObjectURL(selectedImage)
                : profilePicture[0].image
            }
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        {isEditing ? (
          <div className="flex space-x-4">
            <button
              className="bg-green-500 text-white px-4 py-2"
              onClick={handleSaveClick}
            >
              Save
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2"
              onClick={() => {
                setIsEditing(false);
                setSelectedImage(null);
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            className="text-indigo-500 hover:text-indigo-600 underline cursor-pointer"
            onClick={handleEditClick}
          >
            Edit
          </button>
        )}
      </div>
    </section>
  );
}
