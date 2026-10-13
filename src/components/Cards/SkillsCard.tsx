import type { Skill } from '../../types/types';

type SkillsCardProps = {
  skill: Skill;
};

const SkillsCard = ({ skill }: SkillsCardProps) => {
  const Icon = skill.icon;

  return (
    <div className="pt-5 w-50 h-35 flex flex-col justify-center items-center gap-2 shadow-sm hover:shadow-md border-none bg-[#5C5353] transition-transform duration-200 hover:scale-105">
      <div className="flex justify-items-center ">
        <Icon className="w-10 h-10" color={skill.iconColor} />
      </div>

      <h3 className="text-xl font-bold tracking-tight">{skill.name}</h3>
    </div>
  );
};

export default SkillsCard;
