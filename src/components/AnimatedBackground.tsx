import { motion } from "framer-motion";

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/30 dark:bg-primary/20 blur-[80px]"
                animate={{
                    x: [0, 150, 0],
                    y: [0, 100, 0],
                    scale: [1, 1.3, 1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-primary/30 dark:bg-primary/20 blur-[100px]"
                animate={{
                    x: [0, -150, 0],
                    y: [0, -100, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            />
            <motion.div
                className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-primary/30 dark:bg-primary/20 blur-[70px]"
                animate={{
                    x: [0, -100, 0],
                    y: [0, 150, 0],
                    scale: [1, 1.4, 1],
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
