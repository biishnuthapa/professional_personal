import { GraduationCap, Award } from "lucide-react";

const awards = [
  "Nicholson and Adam Scholarship with Graduate Teaching Assistantship - University of Wyoming",
  "100% Study in India Scholarship - Ministry of Education, Government of India",
  "Gold Medal in Electrical and Electronics Engineering - Jain University",
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-section-alt">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-2 font-display text-2xl font-bold text-foreground md:text-3xl">Education</h2>
        <div className="mb-8 h-0.5 w-12 bg-primary" />

        <div className="mb-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-lg border border-border bg-card p-5">
            <div className="flex items-start gap-3">
              <GraduationCap size={22} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">M.S. Electrical Engineering</h3>
                <p className="text-sm text-muted-foreground">University of Wyoming, Laramie, WY</p>
                <p className="mt-1 text-xs font-semibold text-primary">Aug 2025 - Present</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Focus: Power systems, machine learning, and data analysis for energy applications.
                </p>
              </div>
            </div>
          </article>

          <article className="rounded-lg border border-border bg-card p-5">
            <div className="flex items-start gap-3">
              <GraduationCap size={22} className="mt-0.5 shrink-0 text-primary" />
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">B.Tech. Electrical and Electronics</h3>
                <p className="text-sm text-muted-foreground">Jain University, Bangalore, India</p>
                <p className="mt-1 text-xs font-semibold text-primary">Aug 2019 - Jun 2023</p>
                <p className="mt-2 text-sm text-muted-foreground">CGPA: 8.61/10 (Gold Medalist)</p>
              </div>
            </div>
          </article>
        </div>

        <h3 className="mb-4 font-display text-xl font-bold text-foreground">Awards and Scholarships</h3>
        <div className="space-y-3">
          {awards.map((award) => (
            <div key={award} className="flex items-start gap-3 rounded-md border border-border bg-card p-4">
              <Award size={16} className="mt-0.5 shrink-0 text-primary" />
              <p className="text-sm text-foreground">{award}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
