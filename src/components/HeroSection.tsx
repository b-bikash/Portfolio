import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const HeroSection = () => {
    return (
        <section id="home" className="min-h-screen flex items-center hero-gradient relative overflow-hidden pt-20">
            {/* Decorative blobs */}
            <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute bottom-20 left-10 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-primary font-medium mb-3 font-heading text-sm tracking-widest uppercase">
                            Welcome to my portfolio
                        </p>
                        <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-4">
                            Hi, I'm{" "}
                            <span className="gradient-text">Bikash Baruah</span>
                        </h1>
                        <p className="font-heading text-xl sm:text-2xl text-muted-foreground mb-4">
                            Aspiring Software Developer
                        </p>
                        <p className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
                            Passionate about building scalable applications and solving real-world problems. MCA student with expertise in .NET, databases, and full-stack development.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                            <a
                                href="#projects"
                                className="gradient-bg text-primary-foreground px-7 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                            >
                                View Projects <ArrowDown size={16} />
                            </a>
                            <a
                                href="/Bikash_Baruah_Resume.docx"
                                download
                                className="bg-secondary text-secondary-foreground px-7 py-3 rounded-lg font-medium hover:bg-accent transition-colors inline-flex items-center gap-2"
                            >
                                <Download size={16} /> Download Resume
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <div className="relative">
                            <div className="w-56 h-56 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-primary/20 shadow-card-hover">
                                <img
                                    src={profilePhoto}
                                    alt="Bikash Baruah - Software Developer"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="absolute -bottom-3 -right-3 w-20 h-20 gradient-bg rounded-2xl flex items-center justify-center text-primary-foreground font-heading font-bold text-xs animate-float">
                                MCA<br />2026
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;