import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";

import { SectionWrapper } from "../hoc";
import { technologies, tools } from "../constants";
import { styles } from "../styles";
import { textVariant, fadeIn } from "../utils/motion";

const TechCard = ({ icon, index, name }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.12, 0.5)}>
      <Tilt
        options={{
          max: 35,
          scale: 1.05,
          speed: 400,
        }}
        className="bg-tertiary p-5 rounded-2xl w-[120px] h-[120px] flex items-center justify-center"
        title={name}
      >
        <img src={icon} alt={name} className="w-14 h-14 object-contain" />
      </Tilt>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
      {/* Header */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Skills I have learned so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>Tech</h2>
      </motion.div>

      {/* Tech Grid */}
      <div className="mt-10 flex flex-row flex-wrap justify-center gap-8">
        {technologies.map((tech, index) => (
          <TechCard key={tech.name} index={index} icon={tech.icon} name={tech.name} />
        ))}
      </div>

      {/* Tools Section */}
      {tools?.length > 0 && (
        <motion.div
          variants={fadeIn("up", "tween", 0.1, 0.6)}
          className="mt-14"
        >
          <p className={`${styles.sectionSubText} text-center`}>Tools & Platforms</p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {tools.map((t, i) => (
              <motion.span
                key={`${t}-${i}`}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 text-sm backdrop-blur"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "tech");
