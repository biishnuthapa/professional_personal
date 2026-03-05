const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Research", href: "#about" },
  { label: "Publications", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground px-4 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-background/60">Copyright 2026 Bishnu Thapa. All rights reserved.</p>

        <div className="flex flex-wrap items-center gap-5 text-xs text-background/60">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-background/85">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
