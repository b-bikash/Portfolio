import ScrollReveal from "./ScrollReveal";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        title: "Technical Support Engineer",
        company: "Prayosha Food Services Pvt. Ltd.",
        period: "Jan 2024 – Aug 2024",
        bullets: [
            "Resolved POS software issues via tickets, email, and phone; analyzed logs and minimized downtime.",
            "Collaborated with developers and documented recurring issues with improvement suggestions.",
        ],
    },
    {
        title: "Customer Service Executive",
        company: "MediaNV",
        period: "Oct 2022 – Dec 2023",
        bullets: [
            "Analyzed call recordings and ensured data accuracy for North American clients.",
            "Handled reporting and quality assurance for customer interactions.",
        ],
    },
    {
        title: "Technical Support Associate",
        company: "Mobisoft Technology India Pvt. Ltd.",
        period: "Jan 2022 – Jul 2022",
        bullets: [
            "Managed technical tickets via Discord & Freshdesk for software troubleshooting.",
            "Assisted in diagnosing and resolving software issues for end users.",
        ],
    },
];

const ExperienceSection = () => {
    return (
        <section id="experience" className="py-20 lg:py-28 bg-secondary/30">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        Professional experience that shaped my career path.
                    </p>
                </ScrollReveal>

                <div className="max-w-3xl mx-auto space-y-6">
                    {experiences.map((exp, i) => (
                        <ScrollReveal key={exp.company} delay={i * 0.1}>
                            <div className="card-gradient rounded-xl p-6 shadow-card border border-border hover:shadow-card-hover transition-shadow">
                                <div className="flex items-start gap-4">
                                    <div className="p-2.5 rounded-lg gradient-bg flex-shrink-0 mt-1">
                                        <Briefcase size={18} className="text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h3 className="font-heading font-semibold text-foreground">{exp.title}</h3>
                                        <p className="text-primary text-sm font-medium">{exp.company}</p>
                                        <p className="text-xs text-muted-foreground mb-3">{exp.period}</p>
                                        <ul className="space-y-1.5">
                                            {exp.bullets.map((b) => (
                                                <li key={b} className="text-sm text-muted-foreground flex items-start gap-2">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;