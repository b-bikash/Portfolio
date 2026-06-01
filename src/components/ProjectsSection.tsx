import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Shield, X, Github } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type Project = {
  id: number;
  badge: string;
  title: string;
  shortDescription: string;
  description: string;
  sectionOneTitle: string;
  sectionOneItems: string[];
  sectionTwoTitle: string;
  sectionTwoItems: string[];
  architecture: string;
  tags: string[];
  liveDemo?: string;
  github?: string;
};

const projects: Project[] = [
  {
    id: 1,
    badge: "Desktop Application",
    title: "CN POS (Universal POS)",
    shortDescription:
      "A desktop Point of Sale system built with WPF, C#, EF Core, and SQLite for billing, inventory tracking, reporting, and user management.",
    description:
      "Designed and developed a desktop Point of Sale system using WPF, C#, EF Core, and SQLite to streamline retail business operations through billing, inventory tracking, reporting, and user management.",

    sectionOneTitle: "Core Features",
    sectionOneItems: [
      "Billing and invoice management",
      "Customer and product management",
      "Role-based authentication and authorization",
      "Due collection and payment tracking",
      "Business reports and analytics dashboard",
    ],

    sectionTwoTitle: "Inventory Management",
    sectionTwoItems: [
      "Stock overview and inventory adjustments",
      "Inventory transaction ledger with audit history",
      "Inventory reconciliation workflow",
      "CSV and Excel import/export support",
    ],

    architecture:
      "Built using layered architecture, dependency injection, EF Core, optimistic concurrency control, and audit-friendly design patterns to support future scalability and SaaS migration.",

    tags: [
      "WPF",
      "C#",
      "EF Core",
      "SQLite",
      "Layered Architecture",
      "Inventory Management",
    ],

    liveDemo: "#",
    github: "#",
  },

  {
    id: 2,
    badge: "Team Project",
    title: "CoderNoms – Business Website",
    shortDescription:
      "A modern business website built with Next.js, TypeScript, and Tailwind CSS featuring responsive design, SEO fundamentals, dark/light themes, and scalable component architecture.",

    description:
      "Designed and developed a modern business website for CoderNoms using Next.js, TypeScript, React, and Tailwind CSS. Built with a focus on performance, maintainability, responsive design, and user experience.",

    sectionOneTitle: "Core Features",
    sectionOneItems: [
      "Fully responsive design across desktop, tablet, and mobile devices",
      "Dynamic service pages with reusable component architecture",
      "Dark and light theme support",
      "Interactive animations and modern UI/UX design",
      "Contact forms and business information pages",
    ],

    sectionTwoTitle: "SEO & Performance",
    sectionTwoItems: [
      "Page-specific metadata implementation",
      "Sitemap generation and robots.txt configuration",
      "SEO-friendly routing structure using Next.js",
      "Optimized image handling and page loading performance",
    ],

    architecture:
      "Team-based development using Git and GitHub, deployment through Vercel, component-driven architecture for scalability and maintainability, and continuous testing and UI refinements across multiple pages.",

    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
      "Vercel",
    ],

    liveDemo: "https://www.codernoms.com",
    github: "#",
  },

  {
    id: 3,
    badge: "Major Project",
    title: "Online Examination System with Anti-Cheat Features",

    shortDescription:
      "A full-stack online examination platform with secure authentication, role-based access, and advanced anti-cheat mechanisms for exam integrity.",

    description:
      "Designed and developed a full-stack online examination platform using ASP.NET Core and SQL Server, supporting secure authentication, role-based access (Admin, Teacher, Student), and scalable architecture.",

    sectionOneTitle: "Core Features",
    sectionOneItems: [
      "Authentication system with role-based access control",
      "Exam creation, subject mapping, and management",
      "Timed tests with countdown timer",
      "Automated result evaluation and scoring",
    ],

    sectionTwoTitle: "Anti-Cheat Mechanisms",
    sectionTwoItems: [
      "Tab switch and window focus detection",
      "Full-screen enforcement during exams",
      "Violation tracking with threshold-based auto submission",
      "Activity monitoring during exams",
    ],

    architecture:
      "Built with clean architecture principles, service layers, validation mechanisms, soft delete patterns, and optimized database queries for performance and reliability.",

    tags: [
      "ASP.NET Core",
      "SQL Server",
      "JavaScript",
      "Clean Architecture",
      "Role-Based Access",
    ],

    liveDemo:
      "https://onlineexamsystem-examverse-hrf3edcwa3hzhvb9.centralindia-01.azurewebsites.net/",
    github: "#",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedProject]);

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
          <div className="max-w-3xl mx-auto space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="card-gradient rounded-xl p-6 sm:p-8 shadow-card border border-border cursor-pointer hover:shadow-card-hover transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl gradient-bg flex-shrink-0">
                    <Shield size={24} className="text-primary-foreground" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {project.badge}
                      </span>
                    </div>

                    <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-xs rounded-md bg-accent text-accent-foreground font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p className="text-xs text-primary mt-4 flex items-center gap-1 font-medium">
                      Click to view details <ExternalLink size={12} />
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-background/80 backdrop-blur-md flex items-start justify-center overflow-y-auto px-4 py-8"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-card rounded-2xl shadow-card-hover border border-border max-w-2xl w-full max-h-[calc(100vh-4rem)] overflow-y-auto p-6 sm:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  {selectedProject.title}
                </h3>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors text-muted-foreground"
                >
                  <X size={18} />
                </button>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {selectedProject.description}
              </p>

              <h4 className="font-heading font-semibold text-foreground mb-3">
                {selectedProject.sectionOneTitle}
              </h4>

              <ul className="space-y-2 mb-6">
                {selectedProject.sectionOneItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <h4 className="font-heading font-semibold text-foreground mb-3">
                {selectedProject.sectionTwoTitle}
              </h4>

              <ul className="space-y-2 mb-6">
                {selectedProject.sectionTwoItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>

              <h4 className="font-heading font-semibold text-foreground mb-3">
                Architecture
              </h4>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {selectedProject.architecture}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 text-xs rounded-lg bg-accent text-accent-foreground font-medium border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                {selectedProject.liveDemo &&
                  selectedProject.liveDemo !== "#" && (
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink size={18} />
                      {selectedProject.id === 2 ? "Visit Website" : "Live Demo"}
                    </a>
                  )}

                {selectedProject.github && selectedProject.github !== "#" && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-2.5 border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-lg font-medium transition-colors"
                  >
                    <Github size={18} />
                    GitHub Repo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
