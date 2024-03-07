import React from "react";

interface projectProps {
  name: string;
  description: string;
  url: string;
}
export default function Project({ project }: { project: projectProps }) {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-sm shadow">
      <div
        className="h-40 rounded-t-sm bg-cover bg-center "
        style={{
          backgroundImage: `url(/thumb.jpg)`,
        }}
      ></div>

      <div className="px-6 pb-4">
        <h5 className="mt-2 text-lg tracking-tight text-gray-900">
          {project.name}
        </h5>

        <p className="mb-2 text-sm text-gray-700">{project.description}</p>
        <a
          href="{project.url}"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-backgroundcolor hover:bg-leftcolor rounded-lg  focus:ring-2 focus:outline-none focus:ring-backgroundcolor"
        >
          Github
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
}
