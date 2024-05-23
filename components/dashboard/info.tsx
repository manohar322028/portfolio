"use client";

import React, { useState } from "react";
import { IInfo, IIntro } from "@/backend/models/interfaces";
import { updateInfo } from "@/backend/actions/info.actions";

export default function InfoCard({ info }: { info: IInfo[] }) {
  const [formData, setFormData] = useState<IInfo[]>(info);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [newIntro, setNewIntro] = useState<string>("");
  const [isAddingIntro, setIsAddingIntro] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    field: keyof IInfo
  ) => {
    const newFormData = [...formData];
    newFormData[0][field] = e.target.value;
    setFormData(newFormData);
  };

  const handleIntroInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number
  ) => {
    const newFormData = [...formData];
    newFormData[0].intros[index].description = e.target.value;
    setFormData(newFormData);
  };

  const handleAddIntro = () => {
    const newFormData = [...formData];
    newFormData[0].intros.push({ description: newIntro });
    setFormData(newFormData);
    setNewIntro("");
    setIsAddingIntro(false);
  };

  const handleDeleteIntro = (index: number) => {
    const newFormData = [...formData];
    newFormData[0].intros.splice(index, 1);
    setFormData(newFormData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateInfo(formData[0]);
    setIsEditing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="bg-gray-800 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Info:</h2>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Heading:</h3>
          <input
            type="text"
            className="text-gray-300 bg-gray-700 rounded px-3 py-2 w-full mb-2"
            value={formData[0].heading}
            onChange={(e) => handleInputChange(e, "heading")}
            readOnly={!isEditing}
          />
        </div>

        <div className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Bio:</h3>
          <textarea
            className="text-gray-300 bg-gray-700 rounded px-3 py-2 w-full mb-2"
            value={formData[0].bio}
            onChange={(e) => handleInputChange(e, "bio")}
            readOnly={!isEditing}
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Intros:</h3>
          <table className="min-w-full">
            <tbody>
              {formData[0].intros.map((intro: IIntro, index: number) => (
                <tr key={index} className="border-b">
                  <td className="py-2">
                    <input
                      type="text"
                      className="text-gray-300 bg-gray-700 rounded px-3 py-2 w-full"
                      value={intro.description}
                      onChange={(e) => handleIntroInputChange(e, index)}
                      readOnly={!isEditing}
                    />
                  </td>
                  <td className="text-right space-x-2">
                    {isEditing && (
                      <>
                        <button
                          type="button"
                          className="text-red-500 hover:text-red-600 underline cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault();
                            handleDeleteIntro(index);
                          }}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {isEditing && (
            <>
              {isAddingIntro ? (
                <div className="mt-4">
                  <input
                    type="text"
                    className="text-gray-300 bg-gray-700 rounded px-3 py-2 w-full mb-2"
                    placeholder="Enter new intro"
                    value={newIntro}
                    onChange={(e) => setNewIntro(e.target.value)}
                  />
                  <button
                    type="button"
                    className="bg-green-500 text-white px-4 py-2 mr-2"
                    onClick={(e) => {
                      e.preventDefault();
                      handleAddIntro();
                    }}
                  >
                    Add
                  </button>
                  <button
                    type="button"
                    className="bg-red-500 text-white px-4 py-2"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsAddingIntro(false);
                    }}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  className="text-green-500 hover:text-green-600 underline cursor-pointer mt-4"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsAddingIntro(true);
                  }}
                >
                  Add Another Intro
                </button>
              )}
            </>
          )}
        </div>

        <div>
          {!isEditing && (
            <button
              type="button"
              className="bg-blue-500 text-white px-4 py-2 mt-4"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
          )}
          {isEditing && (
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 mt-4 ml-4"
            >
              Submit Changes
            </button>
          )}
        </div>
      </section>
    </form>
  );
}
