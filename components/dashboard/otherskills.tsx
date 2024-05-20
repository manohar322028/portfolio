"use client";
import React, { useState } from "react";
import { IOtherSkill } from "@/backend/models/interfaces";
import {
  deleteOtherSkill,
  saveOtherSkill,
} from "@/backend/actions/otherskill.actions";

interface EditableOtherSkill extends IOtherSkill {
  isEditing?: boolean;
  isNew?: boolean;
}

export default function OtherSkillCard({
  otherSkill: initialSkills,
}: {
  otherSkill: IOtherSkill[];
}) {
  const [otherSkills, setOtherSkills] =
    useState<EditableOtherSkill[]>(initialSkills);
  const [maxId, setMaxId] = useState<number>(
    Math.max(...initialSkills.map((skill) => parseInt(skill.id, 10)), 0)
  );

  const handleEdit = (index: number) => {
    const updatedSkills = otherSkills.map((skill, i) => {
      if (i === index) {
        return { ...skill, isEditing: true };
      }
      return skill;
    });
    setOtherSkills(updatedSkills);
  };

  const handleDelete = async (index: number) => {
    deleteOtherSkill(otherSkills[index].id);
    const updatedSkills = otherSkills.filter((_, i) => i !== index);
    setOtherSkills(updatedSkills);
  };

  const handleSave = (index: number) => {
    const skill = otherSkills[index];
    const { isEditing, isNew, ...rest } = skill;

    saveOtherSkill(rest);

    const updatedSkills = otherSkills.map((skill, i) => {
      if (i === index) {
        return { ...rest };
      }
      return skill;
    });
    setOtherSkills(updatedSkills);
  };

  const handleCancel = (index: number) => {
    const updatedSkills = otherSkills
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
      .filter((skill) => skill !== null) as EditableOtherSkill[];
    setOtherSkills(updatedSkills);
  };

  const handleAdd = () => {
    const newId = (maxId + 1).toString();
    setMaxId(maxId + 1);
    setOtherSkills([
      ...otherSkills,
      { id: newId, name: "", isEditing: true, isNew: true },
    ]);
  };

  const handleChange = (index: number, field: string, value: string) => {
    const updatedSkills = otherSkills.map((skill, i) => {
      if (i === index) {
        return { ...skill, [field]: value };
      }
      return skill;
    });
    setOtherSkills(updatedSkills);
  };

  return (
    <section className="bg-gray-800 rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Other Skills:</h2>
      <table className="min-w-full">
        <tbody>
          {otherSkills.map((skill, index) => (
            <tr key={skill.id} className="border-b">
              {skill.isEditing ? (
                <>
                  <td className="py-2">
                    <input
                      type="text"
                      value={skill.name}
                      onChange={(e) =>
                        handleChange(index, "name", e.target.value)
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
                  <td className="py-2">{skill.name}</td>
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
