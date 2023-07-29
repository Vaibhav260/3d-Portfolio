import React from "react";
import { motion } from "framer-motion";
import {Tilt} from "react-tilt";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import {styles} from "../styles";
import { textVariant } from "../utils/motion";
import { fadeIn} from "../utils/motion";


const ProjectCard = ({
   icon,
   index,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.4)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-full w-full'
      >
        <div className='relative w-[100px] h-[100px]'>
          <img
            src={icon}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl '
          />
         </div>
      </Tilt>
    </motion.div>
  );
};

const Tech = () => {
  return (
    <>
    
    <motion.div variants={textVariant()}>
      <p className={`${styles.sectionSubText} text-center`}>
        Skills I have learned so far
      </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
           Tech
        </h2>
      </motion.div>
    
    <br></br>
      <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology,index) => (
        <>
         <div key={technology.name}>
         <ProjectCard key={index} index={index} icon = {technology.icon} />
       </div>
       </> 
      ))}
    </div>

    </>
  );
};

export default SectionWrapper(Tech, "");