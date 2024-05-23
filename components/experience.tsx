import { IExperience } from "@/backend/models/interfaces";

const Experience = ({ experience }: { experience: IExperience }) => {
  return (
    <>
      <div className="absolute h-4 w-4 rounded-full bg-gray-900" />
      <div className="border-l-2 ml-2 pb-4 border-gray-700">
        <div className="grid grid-cols-4 mt-2 border-t-2 border-gray-700">
          <div className="col-span-1" />
          <div className="col-span-3 p-2 bg-backgroundcolor bg-opacity-30 rounded-sm shadow">
            <p className="text-lg tracking-tight font-semibold mb-1 text-gray-900">
              {experience.title}
            </p>

            <p className="text-sm mb-1">{experience.description}</p>

            <hr className="border-gray-500 my-1" />
            <p className="text-sm text-gray-700 mb-1 mt-2">
              {experience.end === ""
                ? experience.start
                : `${experience.start} -
              ${experience.end}`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
