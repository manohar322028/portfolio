"use client";

import React, { useState } from "react";
import { ISkill } from "@/backend/models/interfaces";
import { updateSkill } from "@/backend/actions/skill.actions";
import axios from "axios";
import Image from "next/image";

interface SkillCardProps {
  skills: ISkill[];
}

interface EditableSkill extends ISkill {
  isEditing?: boolean;
  isNew?: boolean;
}

export default function SkillCard({ skills: initialSkills }: SkillCardProps) {
  const [skills, setSkills] = useState<EditableSkill[]>(initialSkills);
  const [maxId, setMaxId] = useState<number>(
    Math.max(...initialSkills.map((skill) => parseInt(skill.id, 10)), 0)
  );

  const handleEdit = (index: number) => {
    const updatedSkills = skills.map((skill, i) => {
      if (i === index) {
        return { ...skill, isEditing: true };
      }
      return skill;
    });
    setSkills(updatedSkills);
  };

  const handleDelete = async (index: number) => {
    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_MAIN_URL}/api/skills/${skills[index].id}`
      );

      const updatedSkills = skills.filter((_, i) => i !== index);
      setSkills(updatedSkills);
    } catch (error) {
      console.error("Error deleting skill:", error);
    }
  };

  const handleSave = (index: number) => {
    const skill = skills[index];
    const { isEditing, isNew, ...rest } = skill;

    updateSkill(rest);

    const updatedSkills = skills.map((skill, i) => {
      if (i === index) {
        return {
          ...rest,
        };
      }
      return skill;
    });
    setSkills(updatedSkills);
  };

  const handleCancel = (index: number) => {
    const updatedSkills = skills
      .map((skill, i) => {
        if (i === index && skill.isNew) {
          return null;
        }
        if (i === index) {
          const { isEditing, ...rest } = skill;
          return rest;
        }
        return skill;
      })
      .filter((skill) => skill !== null) as EditableSkill[];
    setSkills(updatedSkills);
  };

  const handleAdd = () => {
    const newId = (maxId + 1).toString();
    setMaxId(maxId + 1);
    setSkills([
      ...skills,
      {
        id: newId,
        name: "",
        icon: "",
        isEditing: true,
        isNew: true,
      },
    ]);
  };

  const handleChange = (index: number, field: string, value: string) => {
    const updatedSkills = skills.map((skill, i) => {
      if (i === index) {
        return { ...skill, [field]: value };
      }
      return skill;
    });
    setSkills(updatedSkills);
  };

  return (
    <section className="bg-gray-800 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Skills:</h2>
      <table className="min-w-full">
        <tbody>
          {skills.map((skill, index) => (
            <tr key={skill.id} className="border-b">
              {skill.isEditing ? (
                <>
                  <td className="py-2">
                    <label className="px-2">name</label>
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) =>
                        handleChange(index, "name", e.target.value)
                      }
                      className="bg-gray-700 text-white rounded px-2"
                    />
                  </td>
                  <label className="px-2">icon link</label>
                  <td className="py-2">
                    <input
                      type="text"
                      value={skill.icon}
                      onChange={(e) =>
                        handleChange(index, "icon", e.target.value)
                      }
                      className="bg-gray-700 text-white rounded px-2"
                    />
                  </td>
                  <td className="text-right space-x-2">
                    <a
                      className="text-green-500 hover:text-green-600 underline cursor-pointer mr-2"
                      onClick={() => handleSave(index)}
                    >
                      Save
                    </a>
                    <a
                      className="text-red-500 hover:text-red-600 underline cursor-pointer"
                      onClick={() => handleCancel(index)}
                    >
                      Cancel
                    </a>
                  </td>
                </>
              ) : (
                <>
                  <td className="py-2 flex items-center">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={24}
                      height={24}
                      className="w-6 h-6 mr-2"
                    />
                    {skill.name}
                  </td>
                  <td className="text-right space-x-2">
                    <a
                      className="text-indigo-500 hover:text-indigo-600 underline cursor-pointer mr-2"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </a>
                    <a
                      className="text-red-500 hover:text-red-600 underline cursor-pointer"
                      onClick={() => handleDelete(index)}
                    >
                      Delete
                    </a>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <a
        className="text-green-500 hover:text-green-600 underline cursor-pointer mt-4 block"
        onClick={handleAdd}
      >
        Add Another Skill
      </a>
    </section>
  );
}
