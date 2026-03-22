import ScrollReveal from "./ScrollReveal";
import { GraduationCap, Award } from "lucide-react";

const education = [
    { degree: "Master of Computer Application (MCA)", institution: "KIIT University", period: "2024 – 2026", grade: "Pursuing" },
    { degree: "Bachelor of Computer Application (BCA)", institution: "University of Science & Technology Meghalaya", period: "2018 – 2021", grade: "CGPA: 8.0" },
    { degree: "Class XII (CBSE)", institution: "Tinsukia English Academy", period: "2017", grade: "60%" },
    { degree: "Class X (CBSE)", institution: "OUR ABC Academy", period: "2015", grade: "CGPA: 8.0" },
];

const certifications = [
    "Python course – CEC Guwahati",
    "TCS iON Career Edge – Knockdown the Lockdown",
];

const EducationSection = () => {
    return (
        <section id="education" className="py-20 lg:py-28">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
                        Education & <span className="gradient-text">Certifications</span>
                    </h2>
                    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        My academic journey and achievements.
                    </p>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Education */}
                    <div className="space-y-4">
                        <ScrollReveal>
                            <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                                <GraduationCap size={20} className="text-primary" /> Education
                            </h3>
                        </ScrollReveal>
                        {education.map((e, i) => (
                            <ScrollReveal key={e.degree} delay={i * 0.08}>
                                <div className="card-gradient rounded-xl p-5 shadow-card border border-border hover:shadow-card-hover transition-shadow">
                                    <h4 className="font-heading font-semibold text-foreground text-sm">{e.degree}</h4>
                                    <p className="text-primary text-xs font-medium">{e.institution}</p>
                                    <div className="flex items-center justify-between mt-2">
                                        <span className="text-xs text-muted-foreground">{e.period}</span>
                                        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent text-accent-foreground">
                                            {e.grade}
                                        </span>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>

                    {/* Certifications */}
                    <div>
                        <ScrollReveal>
                            <h3 className="font-heading text-lg font-semibold text-foreground flex items-center gap-2 mb-4">
                                <Award size={20} className="text-primary" /> Certifications
                            </h3>
                        </ScrollReveal>
                        <div className="space-y-4">
                            {certifications.map((c, i) => (
                                <ScrollReveal key={c} delay={i * 0.08}>
                                    <div className="card-gradient rounded-xl p-5 shadow-card border border-border hover:shadow-card-hover transition-shadow flex items-center gap-3">
                                        <div className="p-2 rounded-lg gradient-bg flex-shrink-0">
                                            <Award size={16} className="text-primary-foreground" />
                                        </div>
                                        <p className="text-sm font-medium text-foreground">{c}</p>
                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationSection;