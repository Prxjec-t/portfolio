import { projectsData } from '../data/projects';
import ProjectsCard from './Cards/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="pt-15 lg:pt-30">
      <div className="mt-16 flex flex-col items-center text-white">
        <h3 className="text-2xl font-bold mb-6 underline underline-offset-7">My Projects:</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {projectsData.map((Project) => (
            <ProjectsCard key={Project.id} project={Project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
