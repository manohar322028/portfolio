import SignOut from "@/components/signout";
import { Info, ProfilePicture, OtherSkill } from "@/backend/models/models";
import { dbConnect } from "@/backend/db";
import { ISkill } from "@/backend/models/interfaces";
import { Document } from "mongoose";

export default async function Dashboard() {
  await dbConnect();
  const info = await Info.find();

  const profilePicture = await ProfilePicture.find();
  const otherSkill = await OtherSkill.find();
  const skills: ISkill[] = await fetch(
    process.env.MAIN_URL + "/api/skills"
  ).then((res) => res.json());
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
              {otherSkill.map((skill) => (
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
              <tr className="border-b">
                <td className="py-2">Project 1</td>
                <td className="text-right space-x-2">
                  <a className="text-indigo-500 hover:text-indigo-600 underline cursor-pointer mr-2">
                    Edit
                  </a>
                  <a className="text-red-500 hover:text-red-600 underline cursor-pointer">
                    Delete
                  </a>
                </td>
              </tr>
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
              <tr className="border-b">
                <td className="py-2">Experience 1</td>
                <td className="text-right space-x-2">
                  <a className="text-indigo-500 hover:text-indigo-600 underline cursor-pointer mr-2">
                    Edit
                  </a>
                  <a className="text-red-500 hover:text-red-600 underline cursor-pointer">
                    Delete
                  </a>
                </td>
              </tr>
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
