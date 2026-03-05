import { ExternalLink, FileText } from "lucide-react";

const projects = [
  {
    tag: "ML / Energy",
    title: "Day-Ahead Electricity Load Forecasting with LSTM",
    description:
      "Built a custom LSTM workflow for NYISO hourly demand using cyclical encoding and weather predictors. Reduced MAPE from 7.37% to 2.91%.",
    date: "Dec 2025",
  },
  {
    tag: "Thesis",
    title: "Impact of Soiling Loss on Photovoltaic Module Performance",
    description:
      "Conducted a comparative analysis on dust composition across four countries. Identified moisture concentration as the strongest contributor to generation loss.",
    date: "Jun 2023",
  },
  {
    tag: "Web3 / dApp",
    title: "HospitalityNFT: Decentralized Hotel Booking",
    description:
      "Developed a booking platform on Polygon with Next.js and Solidity, with NFT receipts for each reservation.",
    date: "Jan 2024",
    link: "https://hospitaitynft.vercel.app/",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-section-alt">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 font-display text-2xl font-bold text-foreground md:text-3xl">
          Selected Projects and Publications
        </h2>
        <div className="mb-8 h-0.5 w-12 bg-primary" />

        <div className="space-y-5">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <FileText size={16} className="text-primary" />
                <span className="rounded bg-badge px-2.5 py-0.5 text-xs font-semibold text-badge-foreground">
                  {project.tag}
                </span>
                <span className="text-xs text-muted-foreground">{project.date}</span>
              </div>
              <h3 className="mb-2 font-display text-xl font-bold text-foreground">{project.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                >
                  View project <ExternalLink size={13} />
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
