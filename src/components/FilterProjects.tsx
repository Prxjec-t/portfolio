interface FilterProjectsProps {
  techs: string[];
  selectedTechs: string[];
  onToggle: (tech: string) => void;
  clear: () => void;
}

const FilterProjects = ({ techs, selectedTechs, onToggle, clear }: FilterProjectsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-1.25 mb-5">
      {techs.map((tech) => (
        <button
          key={tech}
          onClick={() => onToggle(tech)}
          className={`px-4 py-1.5 rounded-full bg-[#5B1111] transition-all duration-200 ${
            selectedTechs.includes(tech) ? 'scale-105 text-white shadow-lg' : 'bg-[#5C5353]/20 hover:bg-[#5B1111]/40'
          }`}>
          {tech}
        </button>
      ))}

      <button onClick={clear} className="px-4 ml-4 rounded-full bg-red-700 hover:bg-black/20">
        Clear
      </button>
    </div>
  );
};

export default FilterProjects;
