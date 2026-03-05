const experiences = [
  {
    role: "Graduate Teaching Assistant",
    company: "University of Wyoming, EECS Department",
    period: "Aug 2025 - Present",
    points: [
      "Mentor undergraduate students in power systems analysis and electrical engineering fundamentals.",
      "Support grading, lab facilitation, and technical discussions for core EE courses.",
    ],
  },
  {
    role: "Electrical Engineer",
    company: "Siurikhola Hydropower Project",
    period: "Apr 2024 - Jul 2025",
    points: [
      "Managed daily operation of a 33/11kV substation coordinating multi-plant hydropower flow.",
      "Analyzed plant performance data to produce monthly generation forecasts for NEA reporting.",
    ],
  },
  {
    role: "Database Tech Intern",
    company: "Cognizant",
    period: "Mar 2023 - Jun 2023",
    points: [
      "Optimized enterprise database schemas with a focus on integrity, consistency, and reliability.",
      "Performed MSSQL administration including backup, recovery, and role-based access maintenance.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 font-display text-2xl font-bold text-foreground md:text-3xl">Professional Experience</h2>
        <div className="mb-8 h-0.5 w-12 bg-primary" />

        <div className="space-y-7">
          {experiences.map((exp) => (
            <article key={exp.role} className="relative border-l-2 border-primary/30 pl-6">
              <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-primary" />
              <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-bold text-foreground">{exp.role}</h3>
                <span className="text-xs font-semibold uppercase tracking-wide text-primary">{exp.period}</span>
              </div>
              <p className="mb-3 text-sm italic text-muted-foreground">{exp.company}</p>
              <ul className="space-y-2">
                {exp.points.map((point) => (
                  <li key={point} className="flex gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
