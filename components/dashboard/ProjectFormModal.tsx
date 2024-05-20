"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { IProject } from "@/backend/models/interfaces";
import saveProjectImage from "@/backend/actions/project.actions";

interface ProjectFormModalProps {
  project: IProject | null;
  onSave: (project: IProject) => void;
  onClose: () => void;
}

export default function ProjectFormModal({
  project,
  onSave,
  onClose,
}: ProjectFormModalProps) {
  const [formData, setFormData] = useState<IProject>({
    id: "",
    title: "",
    description: "",
    image: "",
    link: "",
  });
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (project) {
      setFormData(project);
    } else {
      setFormData({
        id: "",
        title: "",
        description: "",
        image: "",
        link: "",
      });
    }
  }, [project]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const apiUrl = process.env.NEXT_PUBLIC_MAIN_URL;

    if (!apiUrl) {
      console.error("API base URL is not defined");
      return;
    }

    try {
      if (project) {
        // Update existing project
        if (file) {
          const formDataWithFile = new FormData();
          formDataWithFile.append("file", file);
          formDataWithFile.append("title", formData.title);
          const imagePath = await saveProjectImage(formDataWithFile);

          const response = await axios.patch(
            `${apiUrl}/api/projects/${project.id}`,
            {
              ...formData,
              image: imagePath,
            }
          );
          onSave(response.data);
        } else {
          const response = await axios.patch(
            `${apiUrl}/api/projects/${project.id}`,
            formData
          );
          onSave(response.data);
        }
      } else {
        // Add new project
        if (file) {
          const formDataWithFile = new FormData();
          formDataWithFile.append("file", file);
          formDataWithFile.append("title", formData.title);
          const imagePath = await saveProjectImage(formDataWithFile);

          const response = await axios.post(`${apiUrl}/api/projects`, {
            ...formData,
            image: imagePath,
          });
          onSave(response.data);
        } else {
          const response = await axios.post(`${apiUrl}/api/projects`, formData);
          onSave(response.data);
        }
      }
      window.location.reload();
    } catch (error) {
      console.error("Error saving project:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 text-gray-900">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          {project ? "Edit Project" : "Add Project"}
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
            <label className="block text-gray-700">Link</label>
            <input
              type="text"
              name="link"
              value={formData.link}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded"
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
