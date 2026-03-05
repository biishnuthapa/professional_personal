import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-primary text-primary-foreground">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 font-display text-2xl font-bold md:text-3xl">Contact</h2>
        <div className="mb-6 h-0.5 w-12 bg-primary-foreground/40" />

        <p className="mb-6 max-w-2xl text-sm leading-relaxed text-primary-foreground/85 md:text-base">
          I am open to research collaborations, internships, and graduate opportunities in power systems and
          machine learning.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="mailto:biishnuthapa@gmail.com"
            className="inline-flex items-center gap-2 rounded-md bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
          >
            <Mail size={15} /> biishnuthapa@gmail.com
          </a>

          <a
            href="https://github.com/biishnuthapa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com/in/biishnu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-foreground/80 transition-colors hover:text-primary-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
