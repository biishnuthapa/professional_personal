const QuoteSection = () => {
  return (
    <section className="bg-quote py-16 md:py-24 px-4 text-center relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <p className="font-display text-2xl md:text-3xl font-bold text-quote-foreground leading-relaxed mb-6">
          "Engineering is the art of directing the great sources of power in nature for the use and convenience of man."
        </p>
        <p className="text-quote-foreground/80 text-sm font-semibold">
          — Thomas Tredgold
        </p>
        <div className="mt-4 flex items-center justify-center gap-2">
          <span className="text-quote-foreground/90 text-sm font-display font-bold">Bishnu Thapa</span>
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
    </section>
  );
};

export default QuoteSection;
