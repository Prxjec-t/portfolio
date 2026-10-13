import SkillsCard from './Cards/SkillsCard';
import { skillsData } from '../data/skills';

const About = () => {
  return (
    <section id="about" className="pt-20 min-h-screen flex items-center justify-center">
      <div className="text-white text-center">
        <div className="bg-[#5C5353] h-80 pt-7">
          <h2 className="text-2xl font-bold mb-5 underline underline-offset-4">Know who I am</h2>
          <p className="max-w-2xl mx-auto mb-5">
            Hello! I'm Kimi Leminaho from Karlshamn, Sweden. I am a frontend student at Medieinstitutet who enjoys the
            art of understanding and solving. During my freetime I also like to dwelve in other activites such as:
          </p>

          <ul className="inline-block text-left font-bold list-disc pl-5">
            <li>Playing games</li>
            <li>Play guitar</li>
            <li>Listen to music</li>
          </ul>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-6">My Skills:</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {skillsData.map((Skill) => (
              <SkillsCard key={Skill.id} skill={Skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
