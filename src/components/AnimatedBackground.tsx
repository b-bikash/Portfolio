import { motion } from "framer-motion";

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%]"
                style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 60%)" }}
                animate={{
                    x: [0, 150, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-[-10%] right-[-5%] w-[70%] h-[70%]"
                style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 60%)" }}
                animate={{
                    x: [0, -150, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />
            <motion.div
                className="absolute top-[30%] left-[50%] w-[50%] h-[50%]"
                style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 60%)" }}
                animate={{
                    x: [0, -100, 0],
                    y: [0, 150, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 11,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
