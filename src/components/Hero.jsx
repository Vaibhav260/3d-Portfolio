// import { motion } from "framer-motion";

// import { styles } from "../styles";
// import { ComputersCanvas } from "./canvas";

// const Hero = () => {
//   return (
//     <section className={`relative w-full h-screen mx-auto`}>
//       <div
//         className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
//       >
//         {/* left vertical line */}
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
//           <div className='w-1 sm:h-80 h-40 violet-gradient' />
//         </div>

//         {/* hero text */}
//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             Hi, I'm <span className='text-[#915EFF]'>Vaibhav</span>
//           </h1>

//           <p className={`${styles.heroSubText} mt-2 text-white-100`}>
//             Software Engineer (MS CS @ NC State)
//             <br className='sm:block hidden' />
//             Real-time Systems • Distributed Systems • AI/ML & Cloud
//           </p>
//         </div>

//       </div>
//       <br></br>
//       <ComputersCanvas />
    
//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0, 24, 0],
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: "loop",
//               }}
//               className='w-3 h-3 rounded-full bg-secondary mb-1'
//             />
//           </div>
//         </a>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { motion } from "framer-motion";
import { styles } from "../styles";

const Hero = () => {
  const chips = ["C/C++", "gRPC", "SIP/WebRTC", "Linux", "Cloud"];

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-[0] hero-stars">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(145,94,255,0.22)_0%,rgba(0,0,0,0)_42%),radial-gradient(circle_at_82%_26%,rgba(34,211,238,0.12)_0%,rgba(0,0,0,0)_46%),radial-gradient(circle_at_50%_84%,rgba(168,85,247,0.10)_0%,rgba(0,0,0,0)_55%)]" />

        <div className="absolute -left-36 top-14 h-[520px] w-[520px] rounded-full bg-[#915EFF]/18 blur-3xl [animation:floatSlow_10s_ease-in-out_infinite]" />
        <div className="absolute -right-44 top-0 h-[620px] w-[620px] rounded-full bg-cyan-400/10 blur-3xl [animation:floatSlow2_12s_ease-in-out_infinite]" />
        <div className="absolute left-[22%] bottom-[-260px] h-[720px] w-[720px] rounded-full bg-fuchsia-400/8 blur-3xl [animation:floatSlow_14s_ease-in-out_infinite]" />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.60)_70%,rgba(0,0,0,0.92)_100%)]" />
      </div>

      {/* Content */}
      <div
        className={`relative z-[10] max-w-7xl mx-auto ${styles.paddingX} pt-[105px] sm:pt-[130px]`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* LEFT: text */}
          <div className="flex items-start gap-5">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="flex flex-col justify-center items-center mt-2 sm:mt-5"
            >
              <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#915EFF]" />
              <div className="w-1 h-28 sm:h-80 violet-gradient" />
            </motion.div>

            <div className="max-w-3xl">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`${styles.heroHeadText} text-white leading-[1.05]`}
              >
                Hi, I&apos;m{" "}
                <span className="relative text-[#915EFF]">
                  Vaibhav
                  <span className="absolute -bottom-2 left-0 h-[10px] w-full rounded-full bg-[#915EFF]/25 blur-md" />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.06 }}
                className={`${styles.heroSubText} mt-4 text-white/90`}
              >
                Software Engineer (MS CS @ NC State)
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.10 }}
                className="mt-2 text-[16px] sm:text-[18px] text-white/75"
              >
                Real-time Systems • Distributed Systems • AI/ML & Cloud
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.16 }}
                className="mt-5 flex flex-wrap gap-2"
              >
                {chips.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/80 backdrop-blur"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* RIGHT: glass card (fills the empty space) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.08 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#915EFF]/30 via-cyan-400/10 to-fuchsia-400/20 blur-xl" />
            <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 sm:p-7 shadow-[0_20px_80px_rgba(0,0,0,0.55)]">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-white/70 text-sm">Currently</p>
                  <h3 className="text-white text-xl sm:text-2xl font-bold">
                    Software Engineer Intern
                  </h3>
                  <p className="text-white/75 mt-1">Ribbon Communications • Raleigh, NC</p>
                </div>
                <span className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[12px] text-white/70">
                  Jul 2025 — Present
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-white font-semibold">What I build</p>
                  <p className="text-white/70 mt-1 text-sm leading-relaxed">
                    SIP call processing, WebRTC, and high-performance C/C++ services
                    with gRPC + Linux debugging.
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="text-white font-semibold">Recent focus</p>
                  <p className="text-white/70 mt-1 text-sm leading-relaxed">
                    Reliability, tracing, Wireshark/SIPp investigations, and workflow automation.
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#project"
                  className="rounded-xl bg-[#915EFF] px-4 py-2 text-sm font-semibold text-white hover:opacity-90 transition"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                >
                  Contact Me
                </a>
              </div>

             {/* social footer */}
<div className="mt-4 flex items-center gap-3 text-xs">
   <a
    href="https://www.linkedin.com/in/vaibhavhawaldar/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-lg border border-[#0A66C2]/40 bg-[#0A66C2]/15 px-3 py-1.5 text-white/80
               hover:bg-[#0A66C2]/25 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.33 7.43c-1.13 0-2.05-.92-2.05-2.05 0-1.13.92-2.05 2.05-2.05s2.05.92 2.05 2.05c0 1.13-.92 2.05-2.05 2.05zM20.45 20.45h-3.53v-5.59c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.69h-3.53V9h3.39v1.56h.05c.47-.9 1.62-1.86 3.33-1.86 3.56 0 4.22 2.34 4.22 5.38v6.37z" />
    </svg>
    LinkedIn
  </a>
  
  <a
    href="https://github.com/Vaibhav260"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-white/80
               hover:bg-white/10 hover:border-white/30 transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.1 3.29 9.42 7.86 10.95.57.1.78-.25.78-.56v-2.1c-3.2.7-3.88-1.38-3.88-1.38-.52-1.33-1.27-1.68-1.27-1.68-1.04-.7.08-.69.08-.69 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.52-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.14 1.17.91-.25 1.88-.38 2.85-.38s1.94.13 2.85.38c2.18-1.48 3.14-1.17 3.14-1.17.62 1.58.23 2.75.11 3.04.73.8 1.18 1.82 1.18 3.07 0 4.41-2.69 5.37-5.25 5.65.41.35.78 1.04.78 2.1v3.11c0 .31.21.67.79.56C20.71 21.42 24 17.1 24 12 24 5.73 18.77.5 12 .5z" />
    </svg>
    GitHub
  </a>

 
</div>

            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-10 z-[20] w-full flex justify-center">
        <a href="#about">
          <div className="w-[34px] h-[60px] rounded-3xl border-2 border-white/30 hover:border-white/60 transition flex justify-center items-start p-2 bg-black/10 backdrop-blur">
            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 1.35, repeat: Infinity, repeatType: "loop" }}
              className="w-2.5 h-2.5 rounded-full bg-white/70"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
