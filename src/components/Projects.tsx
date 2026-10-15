import { useState } from 'react';
import { projectsData } from '../data/projects';
import ProjectsCard from './Cards/ProjectCard';
import FilterProjects from './FilterProjects';
import { motion } from 'motion/react';

const techs = Array.from(new Set(projectsData.flatMap((project) => project.technologies))).sort();

const Projects = () => {
  const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

  const toggleTech = (tech: string) => {
    setSelectedTechs((prevTech) =>
      prevTech.includes(tech) ? prevTech.filter((activeTech) => activeTech !== tech) : [...prevTech, tech],
    );
  };

  const FilteredProjects =
    selectedTechs.length === 0
      ? projectsData
      : projectsData.filter((project) => selectedTechs.every((tech) => project.technologies.includes(tech)));

  return (
    <section id="projects" className="pt-15 lg:pt-30 flex items-center justify-center">
      <div className="mt-16 flex flex-col items-center text-white w-[320px] md:w-19/20">
        <h3 className="text-2xl font-bold mb-6 underline underline-offset-7">My Projects:</h3>

        <p className="text-lg mb-3 mt-5 font-medium">Filter projects</p>
        <FilterProjects
          techs={techs}
          selectedTechs={selectedTechs}
          onToggle={toggleTech}
          clear={() => setSelectedTechs([])}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {FilteredProjects.map((Project) => (
            <motion.div
              key={Project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.025,
                transition: { duration: 0.15, ease: 'easeOut' },
                boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.2)',
              }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}>
              <ProjectsCard project={Project} />
            </motion.div>
          ))}
        </div>

        {FilteredProjects.length === 0 && (
          <div className="text-center mt-8">
            <p>Too many filters selected for projects up. </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
