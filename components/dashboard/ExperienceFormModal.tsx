"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { IExperience } from "@/backend/models/interfaces";

interface ExperienceFormModalProps {
  experience: IExperience | null;
  onSave: (experience: IExperience) => void;
  onClose: () => void;
}

export default function ExperienceFormModal({
  experience,
  onSave,
  onClose,
}: ExperienceFormModalProps) {
  const [formData, setFormData] = useState<IExperience>({
    id: "",
    title: "",
    description: "",
    start: "",
    end: "",
  });

  useEffect(() => {
    if (experience) {
      setFormData(experience);
    } else {
      setFormData({
        id: "",
        title: "",
        description: "",
        start: "",
        end: "",
      });
    }
  }, [experience]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const apiUrl = process.env.NEXT_PUBLIC_MAIN_URL;

    if (!apiUrl) {
      console.error("API base URL is not defined");
      return;
    }

    try {
      if (experience) {
        // Update existing experience
        const response = await axios.patch(
          `${apiUrl}/api/experiences/${experience.id}`,
          formData
        );
        onSave(response.data);
      } else {
        // Add new experience

        const response = await axios.post(
          `${apiUrl}/api/experiences`,
          formData
        );
        onSave(response.data);
      }

      window.location.reload();
    } catch (error) {
      console.error("Error saving experience:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-gray-900">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          {experience ? "Edit Experience" : "Add Experience"}
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">ID</label>
            <input
              type="text"
              name="id"
              value={formData.id}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Start date</label>
            <input
              type="text"
              name="start"
              value={formData.start}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">End date</label>
            <input
              type="text"
              name="end"
              value={formData.end}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
