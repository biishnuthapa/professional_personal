import { Cpu, Brain, Code, Database } from "lucide-react";

const areas = [
  {
    icon: Cpu,
    title: "Power Systems Analysis",
    description:
      "Substation operation, grid behavior, and renewable integration using ETAP, MATLAB, and Simulink.",
  },
  {
    icon: Brain,
    title: "Machine Learning for Energy",
    description:
      "Time-series forecasting and model development with LSTM architectures in PyTorch and Scikit-learn.",
  },
  {
    icon: Code,
    title: "Engineering Software",
    description:
      "Applied full-stack engineering across Python and Next.js for research tooling and production-ready prototypes.",
  },
  {
    icon: Database,
    title: "Data Infrastructure",
    description:
      "Data pipeline and warehouse workflows with SQL, Snowflake, AWS, and Azure for analytics at scale.",
  },
];

const SkillsSection = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 font-display text-2xl font-bold text-foreground md:text-3xl">Research Interests</h2>
        <div className="mb-8 h-0.5 w-12 bg-primary" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {areas.map((area, index) => (
            <article
              key={area.title}
              className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <div className="mb-4 flex items-center justify-between">
                <area.icon size={20} className="text-primary" />
                <span className="text-xs font-semibold text-primary/70">0{index + 1}</span>
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-foreground">{area.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{area.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
