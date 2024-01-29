import React from "react";

export default function Project({ project }: { project: string }) {
  return (
    <div className=" h-32 bg-gray-300 rounded-lg item-center mb-10">
      <span className="text-center">{project}</span>
    </div>
  );
}
