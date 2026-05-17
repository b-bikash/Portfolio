import { motion } from "framer-motion";
import { Github, Atom, Code2, Braces } from "lucide-react";

const HeroAnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Animated gradient blobs */}
      <motion.div
        className="absolute -top-24 -left-24 w-[420px] h-[420px] rounded-full bg-teal-400/30 blur-3xl dark:bg-teal-400/15"
        animate={{
          x: [0, 80, 0],
          y: [0, 60, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute top-1/3 -right-24 w-[480px] h-[480px] rounded-full bg-cyan-400/25 blur-3xl dark:bg-cyan-400/15"
        animate={{
          x: [0, -80, 0],
          y: [0, 50, 0],
          scale: [1, 1.18, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-36 left-1/3 w-[520px] h-[520px] rounded-full bg-emerald-400/25 blur-3xl dark:bg-emerald-400/15"
        animate={{
          x: [0, 60, 0],
          y: [0, -50, 0],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Code icon */}
      <motion.div
        className="absolute hidden sm:block top-36 left-[8%] text-[#14b8a6]/18 dark:text-[#14b8a6]/16"
        animate={{
          y: [0, -18, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Code2 size={86} strokeWidth={1.4} />
      </motion.div>

      {/* GitHub icon */}
      <motion.div
        className="absolute hidden sm:block top-28 left-[25%] text-[#14b8a6]/18 dark:text-[#14b8a6]/16"
        animate={{
          y: [0, -16, 0],
          rotate: [0, -5, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 10,
          delay: 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Github size={50} strokeWidth={1.4} />
      </motion.div>

      {/* .NET label */}
      <motion.div
        className="absolute hidden sm:block top-28 right-[28%] font-heading font-bold text-4xl sm:text-5xl text-[#14b8a6]/18 dark:text-[#14b8a6]/16"
        animate={{
          y: [0, -14, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 10,
          delay: 0.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        .NET
      </motion.div>

      {/* React atom */}
      <motion.div
        className="absolute hidden sm:block top-40 right-[10%] text-[#14b8a6]/18 dark:text-[#14b8a6]/16"
        animate={{
          y: [0, 18, 0],
          rotate: [0, 8, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 11,
          delay: 1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Atom size={88} strokeWidth={1.4} />
      </motion.div>

      {/* Braces */}
      <motion.div
        className="absolute hidden sm:block bottom-28 right-[16%] text-[#14b8a6]/18 dark:text-[#14b8a6]/16"
        animate={{
          y: [0, -16, 0],
          rotate: [0, -5, 0],
          scale: [1, 1.06, 1],
        }}
        transition={{
          duration: 9,
          delay: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Braces size={68} strokeWidth={1.4} />
      </motion.div>

      {/* Grid*/}
      {/*
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(20,184,166,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,184,166,0.12)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(20,184,166,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(20,184,166,0.07)_1px,transparent_1px)] bg-[size:56px_56px]" />
      */}

      {/* Soft overlay to keep text readable */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/20" />
    </div>
  );
};

export default HeroAnimatedBackground;
