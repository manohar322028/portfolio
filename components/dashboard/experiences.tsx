"use client";

import React, { useState } from "react";
import axios from "axios";
import { IExperience } from "@/backend/models/interfaces";
import ExperienceFormModal from "./ExperienceFormModal"; // Import the modal component

export default function ExperienceCard({
  projects: initialProjects,
}: {
  projects: IExperience[];
}) {
  const [projects, setProjects] = useState<IExperience[]>(initialProjects);
  const [selectedProject, setSelectedProject] = useState<IExperience | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEdit = (project: IExperience) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleAdd = () => {
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    const apiUrl = process.env.NEXT_PUBLIC_MAIN_URL;
    if (!apiUrl) {
      console.error("API base URL is not defined");
      return;
    }

    try {
      await axios.delete(`${apiUrl}/api/experiences/${id}`);
      setProjects(projects.filter((project) => project.id !== id));
      console.log("Project deleted successfully");
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleSave = (project: IExperience) => {
    if (selectedProject) {
      // Edit existing project
      setProjects(projects.map((p) => (p.id === project.id ? project : p)));
    } else {
      // Add new project
      setProjects([...projects, project]);
    }
    setIsModalOpen(false);
  };

  return (
    <section className="bg-gray-800 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Experiences:</h2>
      <table className="min-w-full">
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border-b">
              <td className="py-2">{project.title}</td>
              <td className="text-right space-x-2">
                <a
                  className="text-indigo-500 hover:text-indigo-600 underline cursor-pointer mr-2"
                  onClick={() => handleEdit(project)}
                >
                  Edit
                </a>
                <a
                  className="text-red-500 hover:text-red-600 underline cursor-pointer"
                  onClick={() => handleDelete(project.id)}
                >
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <a
        className="text-green-500 hover:text-green-600 underline cursor-pointer mt-4 block"
        onClick={handleAdd}
      >
        Add Another Experience
      </a>

      {isModalOpen && (
        <ExperienceFormModal
          experience={selectedProject}
          onSave={handleSave}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}
