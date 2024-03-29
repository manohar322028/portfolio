"use client";

import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import SignOut from "@/components/signout";
import { Info, ProfilePicture, OtherSkill } from "@/backend/models/models";
import { dbConnect } from "@/backend/db";
import {
  IInfo,
  IProfilePicture,
  IOtherSkill,
  ISkill,
  IProject,
  IExperience,
} from "@/backend/models/interfaces";
import { get } from "http";

export default async function Dashboard() {
  await dbConnect();

  const [info, setInfo] = useState<IInfo[]>([]);
  const [profilePicture, setProfilePicture] = useState<IProfilePicture[]>([]);
  const [skills, setSkill] = useState<ISkill[]>([]);
  const [otherSkills, setOtherSkill] = useState<IOtherSkill[]>([]);
  const [projects, setProject] = useState<IProject[]>([]);
  const [experiences, setExperience] = useState<IExperience[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.MAIN_URL + "/api/skills");
        setSkill(response.data);
      } catch (error) {
        console.error("Error fetching skills data:", error);
      }
    };

    fetchData();
  }, [skills]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.MAIN_URL + "/api/projects"
        );
        setProject(response.data);
      } catch (error) {
        console.error("Error fetching projects data:", error);
      }
    };

    fetchData();
  }, [projects]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          process.env.MAIN_URL + "/api/experiences"
        );
        setExperience(response.data);
      } catch (error) {
        console.error("Error fetching experiences data:", error);
      }
    };

    fetchData();
  }, [experiences]);

  useEffect(() => {
    const fetchMongoData = async () => {
      const data: IInfo[] = await Info.find();

      setInfo(data);
    };

    fetchMongoData();
  }, [info]);

  useEffect(() => {
    const fetchMongoData = async () => {
      const profilePicture: IProfilePicture[] = await ProfilePicture.find();

      setProfilePicture(profilePicture);
    };

    fetchMongoData();
  }, [profilePicture]);

  useEffect(() => {
    const fetchMongoData = async () => {
      const otherSkill: IOtherSkill[] = await OtherSkill.find();

      setOtherSkill(otherSkill);
    };

    fetchMongoData();
  }, [otherSkills]);

  return (
    <div className="bg-gray-900 text-white px-8 py-12 h-full">
      <div className="mb-8 text-right">
        <SignOut />
      </div>

      <h1 className="text-4xl font-semibold mb-12">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <section className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Info:</h2>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Heading:</h3>
            <p className="text-gray-300">{info[0].heading}</p>
            <a className="text-indigo-500 hover:text-indigo-600 underline cursor-pointer mr-2">
              Edit
            </a>
          </div>

          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2">Bio:</h3>
            <p className="text-gray-300">{info[0].bio}</p>
            <a className="text-indigo-500 hover:text-indigo-600 underline cursor-pointer mr-2">
              Edit
            </a>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Intros:</h3>
            <table className="min-w-full">
              <tbody>
                {info[0].intros.map((intro) => (
                  <tr key={intro.description} className="border-b">
                    <td className="py-2">{intro.description}</td>
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
              Add Another Intro
            </a>
          </div>
        </section>

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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <section className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Skills:</h2>
          <table className="min-w-full">
            <tbody>
              {skills.map((skill) => (
                <tr key={skill.name} className="border-b">
                  <td className="py-2">{skill.name}</td>
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
            Add Another Skill
          </a>
        </section>

        <section className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Other Skills:</h2>
          <table className="min-w-full">
            <tbody>
              {otherSkills.map((skill) => (
                <tr key={skill.name} className="border-b">
                  <td className="py-2">{skill.name}</td>
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
            Add Another Skill
          </a>
        </section>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <section className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Projects:</h2>
          <table className="min-w-full">
            <tbody>
              {projects.map((project) => (
                <tr key={project.id} className="border-b">
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

        <section className="bg-gray-800 rounded-lg p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Experiences:</h2>
          <table className="min-w-full">
            <tbody>
              {experiences.map((experience) => (
                <tr key={experience.id} className="border-b">
                  <td className="py-2">{experience.title}</td>
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
            Add Another Experience
          </a>
        </section>
      </div>
    </div>
  );
}
