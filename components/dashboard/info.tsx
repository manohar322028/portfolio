"use client";

import React from "react";
import { IInfo } from "@/backend/models/interfaces";

export default function InfoCard({ info }: { info: IInfo[] }) {
  return (
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
  );
}
