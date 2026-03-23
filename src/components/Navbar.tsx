import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dark, setDark] = useState(() => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("theme") === "dark";
        }
        return false;
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", dark);
        localStorage.setItem("theme", dark ? "dark" : "light");
    }, [dark]);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-lg shadow-card border-b border-border" : "bg-transparent"
                }`}
        >
            <div className="container mx-auto flex items-center justify-between py-4 px-4">
                <a href="#home" className="font-heading text-xl font-bold gradient-text">
                    BB
                </a>

                {/* Desktop */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <button
                        onClick={() => setDark(!dark)}
                        className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:bg-accent transition-colors"
                        aria-label="Toggle theme"
                    >
                        {dark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </div>

                {/* Mobile */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                        onClick={() => setDark(!dark)}
                        className="p-2 rounded-lg bg-secondary text-secondary-foreground"
                        aria-label="Toggle theme"
                    >
                        {dark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-lg bg-secondary text-secondary-foreground relative z-50"
                    >
                        {isOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        className="fixed top-0 left-0 w-full h-screen bg-background z-40 flex flex-col items-center justify-center gap-6"
                    >
                        <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => {
                                        e.preventDefault();

                                        const section = document.querySelector(link.href);
                                        if (section) {
                                            section.scrollIntoView({ behavior: "smooth" });
                                        }

                                        setIsOpen(false);
                                    }}
                                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;