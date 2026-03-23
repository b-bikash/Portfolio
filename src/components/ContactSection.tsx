import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";
import { Toaster } from "sonner";
import { toast } from "sonner";

const ContactSection = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);

        const toastId = toast.loading("Sending message... ⏳");

        try {
            const response = await fetch("https://formspree.io/f/xzdjllvz", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    message: form.message
                })
            });

            if (response.ok) {
                toast.success("Message sent successfully ✅", { id: toastId });
                setForm({ name: "", email: "", message: "" });
            } else {
                toast.error("Something went wrong ❌", { id: toastId });
            }

        } catch (error) {
            toast.error("Error sending message ❌", { id: toastId });
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="py-20 lg:py-28 bg-secondary/30">
            <div className="container mx-auto px-4">
                <ScrollReveal>
                    <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        Feel free to reach out for opportunities or just to say hello!
                    </p>
                </ScrollReveal>

                <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <ScrollReveal delay={0.1}>
                        <div className="space-y-5">
                            {[
                                { icon: Mail, label: "Email", value: "bikashbaruah20@gmail.com", href: "mailto:bikashbaruah20@gmail.com" },
                                { icon: Phone, label: "Phone", value: "+91 8761075117", href: "tel:+918761075117" },
                                { icon: Linkedin, label: "LinkedIn", value: "bikash-baruah-20", href: "http://www.linkedin.com/in/bikash-baruah-20" },
                                { icon: Github, label: "GitHub", value: "b-bikash", href: "https://github.com/b-bikash" },
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="card-gradient rounded-xl p-4 shadow-card border border-border flex items-center gap-4 hover:shadow-card-hover transition-shadow group block"
                                >
                                    <div className="p-2.5 rounded-lg gradient-bg">
                                        <item.icon size={18} className="text-primary-foreground" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                                        <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>
                        
                    </ScrollReveal>

                    {/* Contact Form */}
                    <ScrollReveal delay={0.2}>
                        <form onSubmit={handleSubmit} className="card-gradient rounded-xl p-6 shadow-card border border-border space-y-4">
                            <div>
                                <label className="text-sm font-medium text-foreground block mb-1.5">Name</label>
                                <input
                                    type="text"
                                    required
                                    value={form.name}
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                    placeholder="Your name"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-foreground block mb-1.5">Email</label>
                                <input
                                    type="email"
                                    required
                                    value={form.email}
                                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-foreground block mb-1.5">Message</label>
                                <textarea
                                    required
                                    rows={4}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="w-full px-4 py-2.5 rounded-lg bg-background border border-input text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                                    placeholder="Your message..."
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={sending}
                                className="w-full gradient-bg text-primary-foreground py-3 rounded-lg font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50"
                            >
                                {sending ? "Sending..." : <><Send size={16} /> Send Message</>}
                            </button>
                        </form>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;