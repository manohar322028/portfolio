const Skill = ({ skill }: { skill: string }) => {
  return (
    <div className=" h-12 w-12 bg-blue-300 rounded-lg item-center">
      <span className="text-center text-sm">{skill}</span>
    </div>
  );
};

export default Skill;
