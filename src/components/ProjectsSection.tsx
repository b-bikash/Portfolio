import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Shield, X, Github } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const ProjectsSection = () => {
    const [open, setOpen] = useState(false);

    return (
        <section id="projects" className="py-20 lg:py-28">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
                        My <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        Featured work showcasing my development capabilities.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={0.1}>
                    <div className="max-w-3xl mx-auto">
                        <div
                            onClick={() => setOpen(true)}
                            className="card-gradient rounded-xl p-6 sm:p-8 shadow-card border border-border cursor-pointer hover:shadow-card-hover transition-all group"
                        >
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-xl gradient-bg flex-shrink-0">
                                    <Shield size={24} className="text-primary-foreground" />
                                </div>
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                                            Major Project
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                        Online Examination System with Anti-Cheat Features
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                        A full-stack online examination platform with secure authentication, role-based access, and advanced anti-cheat mechanisms for exam integrity.
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {["ASP.NET Core", "SQL Server", "JavaScript"].map((t) => (
                                            <span
                                                key={t}
                                                className="px-2.5 py-1 text-xs rounded-md bg-accent text-accent-foreground font-medium"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-xs text-primary mt-4 flex items-center gap-1 font-medium">
                                        Click to view details <ExternalLink size={12} />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-foreground/50 backdrop-blur-sm flex items-center justify-center p-4"
                        onClick={() => setOpen(false)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="bg-card rounded-2xl shadow-card-hover border border-border max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="font-heading text-2xl font-bold text-foreground">
                                    Online Examination System
                                </h3>
                                <button
                                    onClick={() => setOpen(false)}
                                    className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors text-muted-foreground"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                Designed and developed a full-stack online examination platform using ASP.NET Core
                                and SQL Server, supporting secure authentication, role-based access (Admin, Teacher,
                                Student), and scalable architecture.
                            </p>

                            <h4 className="font-heading font-semibold text-foreground mb-3">Core Features</h4>
                            <ul className="space-y-2 mb-6">
                                {[
                                    "Authentication system with role-based access control",
                                    "Exam creation, subject mapping, and management",
                                    "Timed tests with countdown timer",
                                    "Automated result evaluation and scoring",
                                ].map((f) => (
                                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <h4 className="font-heading font-semibold text-foreground mb-3">
                                Anti-Cheat Mechanisms
                            </h4>
                            <ul className="space-y-2 mb-6">
                                {[
                                    "Tab switch and window focus detection",
                                    "Full-screen enforcement during exams",
                                    "Violation tracking with threshold-based auto submission",
                                    "Activity monitoring during exams",
                                ].map((f) => (
                                    <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <h4 className="font-heading font-semibold text-foreground mb-3">Architecture</h4>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                                Built with clean architecture principles, service layers, validation mechanisms,
                                soft delete patterns, and optimized database queries for performance and reliability.
                            </p>

                            <div className="flex flex-wrap gap-2 mb-8">
                                {["ASP.NET Core", "SQL Server", "JavaScript", "Clean Architecture", "Role-Based Access"].map((t) => (
                                    <span
                                        key={t}
                                        className="px-3 py-1.5 text-xs rounded-lg bg-accent text-accent-foreground font-medium border border-border"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap gap-4 mt-8">
                                <a 
                                    href="https://onlineexamsystem-examverse-hrf3edcwa3hzhvb9.centralindia-01.azurewebsites.net/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                                >
                                    <ExternalLink size={18} />
                                    Live Demo
                                </a>
                                <a 
                                    href="#" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-2.5 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg font-medium transition-colors"
                                >
                                    <Github size={18} />
                                    GitHub Repo
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ProjectsSection;