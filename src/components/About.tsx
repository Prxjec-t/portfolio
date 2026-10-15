import SkillsCard from './Cards/SkillsCard';
import { skillsData } from '../data/skills';
import { motion } from 'motion/react';

const About = () => {
  return (
    <section id="about" className="pt-20 lg:pt-45 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="bg-[#5C5353] py-8 w-[320px] md:w-full">
          <h2 className="text-2xl font-bold mb-5 underline underline-offset-4">Know who I am</h2>
          <p className="max-w-xl text-l mx-auto mb-5 md:mb-2 md:text-xl leading-relaxed">
            Hello! I'm Kimi Leminaho from Karlshamn, Sweden. I am a frontend student at Medieinstitutet who enjoys the
            art of understanding and solving.
          </p>
          <p className="max-w-lg text-l mx-auto mb-5 md:text-xl leading-relaxed">
            During my freetime I also like to dwelve in other activites such as:
          </p>

          <ul className="text-lg inline-block text-left font-bold list-disc pl-5">
            <li>Playing games</li>
            <li>Play guitar</li>
            <li>Listen to music</li>
          </ul>
        </div>

        <div className="mt-16 flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-6">My Skills:</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skillsData.map((Skill) => (
              <motion.div
                key={Skill.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}>
                <SkillsCard skill={Skill} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
