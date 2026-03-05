import profilePhoto from "@/assets/profile-photo.jpg";
import { Mail, MapPin, BookOpen, Github, Linkedin } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="bg-hero pb-14 pt-24 md:pb-20 md:pt-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 text-center md:flex-row md:items-start md:text-left">
        <div
          className="mx-auto w-48 shrink-0 opacity-0 animate-fade-in-up md:mx-0 md:w-56 md:self-end"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="aspect-[4/5] overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            <img src={profilePhoto} alt="Bishnu Thapa" className="h-full w-full object-cover object-[50%_28%]" />
          </div>
        </div>

        <div className="w-full flex-1 space-y-5 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">Portfolio</p>
          <h1 className="font-display text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Bishnu Thapa
          </h1>
          <p className="font-display text-lg font-semibold text-primary md:text-xl">
            M.S. Candidate in Electrical Engineering
          </p>
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            I work at the intersection of power systems and applied machine learning. My current focus is
            electrical load forecasting, renewable integration, and data-informed grid operations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground md:justify-start">
            <span className="inline-flex items-center gap-2">
              <MapPin size={15} className="text-primary" /> Laramie, Wyoming
            </span>
            <span className="inline-flex items-center gap-2">
              <BookOpen size={15} className="text-primary" /> University of Wyoming EECS
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-1 md:justify-start">
            <a
              href="mailto:biishnuthapa@gmail.com"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <Mail size={15} /> Email Me
            </a>
            <a
              href="https://github.com/biishnuthapa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href="https://linkedin.com/in/biishnu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm text-foreground transition-colors hover:bg-secondary"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
