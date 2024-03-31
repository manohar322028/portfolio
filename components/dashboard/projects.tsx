import React from "react";
import { IProject } from "@/backend/models/interfaces";

export default function ProjectCard({ projects }: { projects: IProject[] }) {
  return (
    <section className="bg-gray-800 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Projects:</h2>
      <table className="min-w-full">
        <tbody>
          {projects.map((project) => (
            <tr key={project.title} className="border-b">
              <td className="py-2">{project.title}</td>
              <td className="text-right space-x-2">
                <a className="text-indigo-500 hover:text-indigo-600 underline cursor-pointer mr-2">
                  Edit
                </a>
                <a className="text-red-500 hover:text-red-600 underline cursor-pointer">
                  Delete
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <a className="text-green-500 hover:text-green-600 underline cursor-pointer mt-4">
        Add Another Project
      </a>
    </section>
  );
}
