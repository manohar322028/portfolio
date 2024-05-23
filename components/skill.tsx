import { ISkill } from "@/backend/models/interfaces";

const Skill = ({ skill }: { skill: ISkill }) => {
  return (
    <svg className="w-50 h-50" viewBox="0 0 200 200">
      <defs>
        <clipPath id="shield" clipPathUnits="objectBoundingBox">
          <path
            transform="scale(0.00390625,0.00390625)"
            fill="none"
            d="M219.9,89.7c1.3-16.9,6.5-32.4,15.4-46.3L201,10c-11,9.3-23.4,14.3-37.4,14.9c-13,1.3-25.1-1-36.3-7c-11.6,5.6-23.7,8-36.3,7c-13.3-1-25.1-5.5-35.4-13.4L21.2,44.4C29.5,59,34.2,74.1,35.1,89.7c0.3,7.3-1.8,17.4-6.5,30.4c-2.6,7-4.6,13.1-6,18.4c-1,5.3-1.7,9.5-2,12.5c-0.3,13.6,3.7,25.9,11.9,36.8c6.3,8.3,16.9,17.3,31.9,26.9c15.9,8,28.2,13,36.8,14.9c1,0.3,2.2,0.9,3.7,1.7c1.5,0.8,2.7,1.4,3.7,1.7l7,3c5.6,3.3,9.5,6.6,11.5,10c2.3-3.7,6.1-7,11.5-10c4.3-1.7,7.5-3,9.5-4c3.3-1.3,5.2-2.2,5.5-2.5c2-0.7,4.5-1.7,7.5-3l11-4c8.3-2.6,14.5-5.3,18.4-8c14.3-9.6,24.7-18.4,31.4-26.4c8.3-11,12.5-23.4,12.5-37.4c-0.7-6.3-3.5-16.3-8.5-29.9C221.2,107.4,219.2,97,219.9,89.7z"
          />
        </clipPath>
      </defs>

      <image
        href={skill.icon}
        clipPath="url(#shield)"
        className="object-cover object-center w-[80%] h-[80%]"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
};

export default Skill;
