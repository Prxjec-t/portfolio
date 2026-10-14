import type { Projects } from '../../types/types';

type ProjectCardProps = {
  project: Projects;
};

const ProjectsCard = ({ project }: ProjectCardProps) => {
  const { title, description, technologies, image, github, liveLink } = project;

  return (
    <article className="overflow-hidden rounded-xl text-base md:text-xl xl:text-base">
      <h3 className="text-center font-bold text-2xl pb-4">{title}</h3>
      <img src={image} alt={`Screenshot of ${title}`} loading="lazy" />

      <div className="flex flex-1 flex-col p-3">
        <p className="text-center leading-relaxed text-l"> {description} </p>

        <ul>
          {technologies.map((tech) => (
            <li key={tech} className="rounded-full"></li>
          ))}
        </ul>

        <div className="flex justify-center gap-3 py-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-[#5B1111]/70 px-5 py-2 transition-colors hover:text-gray-400 hover:bg-[#5B1111]/20">
              Github
            </a>
          )}
          {liveLink && (
            <a
              href={liveLink}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-[#5B1111]/70 px-5 py-2 transition-colors hover:text-gray-400 hover:bg-[#5B1111]/20">
              Live Link
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectsCard;
