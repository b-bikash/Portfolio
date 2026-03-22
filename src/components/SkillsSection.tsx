import ScrollReveal from "./ScrollReveal";
import { Code, Globe, Wrench } from "lucide-react";

const skillCategories = [
    {
        title: "Programming",
        icon: Code,
        skills: ["C#", "Python", "C", "C++"],
    },
    {
        title: "Web & Database",
        icon: Globe,
        skills: ["ASP.NET Core", "HTML", "CSS", "JavaScript", "SQL Server", "MySQL"],
    },
    {
        title: "Concepts & Tools",
        icon: Wrench,
        skills: ["DSA", "OOP", "DBMS", "OS", "Networking Basics", "Git", "GitHub", "VS Code"],
    },
];

const SkillsSection = () => {
    return (
        <section id="skills" className="py-20 lg:py-28 bg-secondary/30">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        Technologies and tools I work with.
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {skillCategories.map((cat, i) => (
                        <ScrollReveal key={cat.title} delay={i * 0.1}>
                            <div className="card-gradient rounded-xl p-6 shadow-card border border-border h-full hover:shadow-card-hover transition-shadow">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="p-2.5 rounded-lg gradient-bg">
                                        <cat.icon size={20} className="text-primary-foreground" />
                                    </div>
                                    <h3 className="font-heading font-semibold text-foreground">{cat.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {cat.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1.5 text-sm rounded-lg bg-accent text-accent-foreground font-medium border border-border"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;