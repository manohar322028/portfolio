const Skill = ({ skill }: { skill: string }) => {
  return (
    <div className=" h-32 bg-gray-300 rounded-lg item-center">
      <span className="text-center">{skill}</span>
    </div>
  );
};

export default Skill;
