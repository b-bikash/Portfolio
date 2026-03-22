import ScrollReveal from "./ScrollReveal";
import { User, MapPin, Calendar, Languages } from "lucide-react";

const AboutSection = () => {
    const age = Math.floor(
        (Date.now() - new Date("1999-01-02").getTime()) / (365.25 * 24 * 60 * 60 * 1000)
    );

    return (
        <section id="about" className="py-20 lg:py-28">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        A quick overview of who I am and what drives me.
                    </p>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <ScrollReveal delay={0.1}>
                        <div className="card-gradient rounded-xl p-6 shadow-card border border-border">
                            <p className="text-foreground leading-relaxed mb-6">
                                I'm a motivated <strong>MCA student at KIIT University (2024–2026)</strong> with
                                a strong foundation in programming, databases, and problem-solving. I'm seeking
                                an entry-level software engineering role to apply my technical skills and grow
                                professionally.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                I believe in writing clean, maintainable code and building solutions that
                                make a real impact. My goal is to contribute to innovative projects while
                                continuously learning and evolving as a developer.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { icon: User, label: "Age", value: `${age} years` },
                                { icon: MapPin, label: "Location", value: "Tinsukia, Assam, India" },
                                { icon: Calendar, label: "Career Goal", value: "Software Engineer" },
                                { icon: Languages, label: "Languages", value: "English, Hindi, Assamese, Bengali" },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className="card-gradient rounded-xl p-4 shadow-card border border-border hover:shadow-card-hover transition-shadow"
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 rounded-lg bg-accent">
                                            <item.icon size={16} className="text-primary" />
                                        </div>
                                        <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                                            {item.label}
                                        </span>
                                    </div>
                                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;