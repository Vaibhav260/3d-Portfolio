import React, { useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { DataCenterCubeCanvas } from "./canvas";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = "hawaldarvishu@gmail.com";
  const linkedin = "https://www.linkedin.com/in/vaibhavhawaldar/";
  const github = "https://github.com/Vaibhav260";

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (e) {
      window.prompt("Copy email:", email);
    }
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col gap-10 overflow-hidden">
      {/* Left panel */}
      <motion.div
        variants={slideIn("left", "tween", 0.15, 0.9)}
        className="flex-1 bg-black-100 p-8 rounded-2xl border border-white/10"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <div className="mt-8 space-y-5">
          {/* Email */}
          <div className="rounded-xl bg-tertiary/60 border border-white/10 p-4">
            <p className="text-white/60 text-sm">Email</p>
            <p className="text-white font-semibold mt-1 break-all">{email}</p>

            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={`mailto:${email}?subject=Hello%20Vaibhav&body=Hi%20Vaibhav,%0A%0A`}
                className="bg-[#915EFF] hover:opacity-90 transition px-4 py-2 rounded-lg text-white font-semibold text-sm"
              >
                Email Me
              </a>

              <button
                type="button"
                onClick={copyEmail}
                className="bg-white/5 hover:bg-white/10 transition px-4 py-2 rounded-lg text-white/90 font-semibold text-sm border border-white/15"
              >
                {copied ? "Copied!" : "Copy Email"}
              </button>
            </div>
          </div>

          {/* Location */}
          <div className="rounded-xl bg-tertiary/60 border border-white/10 p-4">
            <p className="text-white/60 text-sm">Location</p>
            <p className="text-white font-semibold mt-1">
              Raleigh, North Carolina, USA
            </p>
            <p className="text-white/60 text-sm mt-1">
              Open to internships / new grad roles (2026)
            </p>
          </div>

          {/* Links */}
          <div className="rounded-xl bg-tertiary/60 border border-white/10 p-4">
            <p className="text-white/60 text-sm">Links</p>

            <div className="mt-3 flex flex-wrap gap-3">
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30 transition px-4 py-2 rounded-lg text-white font-semibold text-sm border border-[#0A66C2]/40"
              >
                LinkedIn
              </a>

              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 hover:bg-white/10 transition px-4 py-2 rounded-lg text-white font-semibold text-sm border border-white/15"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Optional note */}
          <p className="text-white/50 text-sm leading-relaxed">
            Fastest way to reach me is email or LinkedIn.
          </p>
        </div>
      </motion.div>

      {/* Right panel */}
      <motion.div
        variants={slideIn("right", "tween", 0.15, 0.9)}
        className="xl:flex-1 rounded-2xl border border-white/10 bg-black-100 overflow-hidden relative"
      >
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(145,94,255,0.20)_0%,rgba(0,0,0,0)_45%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.12)_0%,rgba(0,0,0,0)_45%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

        {/* Content */}
        <div className="relative h-full p-7 flex flex-col justify-between">
          <div>
            <p className="text-white/60 text-sm">Let’s build something</p>
            <h4 className="text-white text-2xl font-bold mt-1">
              Systems • AI • Infra
            </h4>
            <p className="text-white/70 mt-2 text-sm leading-relaxed">
              Interested in SIP/WebRTC, distributed systems, or AI-powered
              products. Reach out — I reply fast.
            </p>

            {/* Resume card */}
            <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="text-white/70 text-sm font-semibold">Resume</p>
              <p className="text-white/55 text-xs mt-1">
                Download the version you need:
              </p>

              <div className="mt-3 flex flex-wrap gap-3">
                {/* IMPORTANT:
                   Put PDFs in /public/resume/ and use these paths:
                   /resume/Resume_Web_apple.pdf
                   /resume/Resume_AI.pdf
                */}
                <a
                  href="public/resume/Resume_Web_website.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#915EFF] hover:opacity-90 transition px-4 py-2 rounded-lg text-white font-semibold text-sm"
                >
                  Resume (Web)
                </a>

                <a
                  href="public/resume/Resume_AI_web.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/5 hover:bg-white/10 transition px-4 py-2 rounded-lg text-white/90 font-semibold text-sm border border-white/15"
                >
                  Resume (AI/Infra)
                </a>
              </div>
            </div>

            {/* Skill pills (✅ added spacing so it doesn't stick to resume) */}
            <div className="mt-6 flex gap-2 flex-wrap">
              {["C/C++", "Distributed Systems", "SIP/WebRTC", "Cloud", "AI/ML"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] text-white/80 backdrop-blur"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          {/* ✅ NEW Cube glass card */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(145,94,255,0.25)_0%,rgba(0,0,0,0)_60%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />

            <div className="relative flex items-center justify-between gap-4">
              <div>
                <p className="text-white/70 text-sm font-semibold">
                 Infrastructure • Systems
 
                </p>
                <p className="text-white/55 text-xs mt-1">
                                   
                Engineering scalable, low-latency systems for real-time communication and AI workloads.
                </p>
              </div>

              <div className="w-[160px] h-[160px] shrink-0">
                <DataCenterCubeCanvas />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
