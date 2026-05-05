import ScrollReveal from "./ScrollReveal";
import { GraduationCap, Award } from "lucide-react";
import { useState } from "react";

const education = [
    { degree: "Master of Computer Application (MCA)", institution: "KIIT University", period: "2024 – 2026", grade: "Pursuing" },
    { degree: "Bachelor of Computer Application (BCA)", institution: "University of Science & Technology Meghalaya", period: "2018 – 2021", grade: "CGPA: 8.0" },
    { degree: "Class XII (CBSE)", institution: "Tinsukia English Academy", period: "2017", grade: "59.4%" },
    { degree: "Class X (CBSE)", institution: "OUR ABC Academy", period: "2015", grade: "CGPA: 8.0" },
];

const certifications = [
    {
        name: "Google AI Professional Certificate",
        link: "/certificates/Coursera Google AI Professional Certificate.pdf"
    },
    {
        name: "Google AI Essentials",
        link: "/certificates/Coursera Google AI Essentials.pdf"
    },
    {
        name: "Python course – CEC Guwahati",
        link: "/certificates/Python Certificate.jpg"
    },
    {
        name: "TCS iON Career Edge – Knockdown the Lockdown",
        link: "/certificates/TCS Certificate.pdf"
    }
];

const EducationSection = () => {
    const [selectedCert, setSelectedCert] = useState<string | null>(null);
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
                                <ScrollReveal key={c.name} delay={i * 0.08}>
                                    <div className="card-gradient rounded-xl p-5 shadow-card border border-border hover:shadow-card-hover transition-shadow flex items-center gap-3">

                                        <div className="p-2 rounded-lg gradient-bg flex-shrink-0">
                                            <Award size={16} className="text-primary-foreground" />
                                        </div>

                                        {/* 👇 CLICKABLE CERTIFICATE */}
                                        <p
                                            onClick={() => setSelectedCert(c.link)}
                                            className="text-sm font-medium text-foreground hover:text-primary hover:underline cursor-pointer transition-colors"
                                        >
                                            {c.name}
                                        </p>

                                    </div>
                                </ScrollReveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {selectedCert && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

                    <div className="relative bg-white rounded-xl p-4 max-w-3xl w-full mx-4">

                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedCert(null)}
                            className="absolute top-2 right-2 text-black text-xl font-bold"
                        >
                            ✕
                        </button>

                        {/* Certificate Preview */}
                        {selectedCert.endsWith(".pdf") ? (
                            <iframe
                                src={selectedCert}
                                className="w-full h-[500px] rounded-lg"
                            />
                        ) : (
                            <img
                                src={selectedCert}
                                alt="Certificate"
                                className="w-full max-h-[500px] object-contain rounded-lg"
                            />
                        )}

                    </div>
                </div>
            )}
        </section>
    );
};

export default EducationSection;