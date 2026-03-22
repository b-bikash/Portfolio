import { Github, Linkedin, Instagram, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="py-8 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                        © {new Date().getFullYear()} Bikash Baruah. Made with <Heart size={14} className="text-primary" />
                    </p>
                    <div className="flex items-center gap-4">
                        {[
                            { icon: Github, href: "https://github.com/b-bikash" },
                            { icon: Linkedin, href: "http://www.linkedin.com/in/bikash-baruah-20" },
                            { icon: Instagram, href: "https://www.instagram.com/__b1kash__/" },
                        ].map((s) => (
                            <a
                                key={s.href}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                            >
                                <s.icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;