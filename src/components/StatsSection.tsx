import { Award, Zap, Globe, GraduationCap } from "lucide-react";

const stats = [
  { icon: Zap, value: "3+", label: "Years Experience" },
  { icon: Globe, value: "5+", label: "Projects" },
  
  { icon: Award, value: "2025", label: "M.S. Candidate" },
];

const StatsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl font-bold text-center text-foreground mb-2">
          At a Glance
        </h2>
        <p className="text-center text-muted-foreground text-sm mb-10">Quick overview of my journey</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <stat.icon size={28} className="mx-auto text-stat-icon" />
              <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
