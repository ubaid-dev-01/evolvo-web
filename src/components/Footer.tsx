import { Link } from "react-router-dom";

const footerLinks: { [key: string]: { label: string; to: string }[] } = {
  Services: [
    { label: "Web Development", to: "/services#services" },
    { label: "Mobile Development", to: "/services#services" },
    { label: "AI & Automation", to: "/services#services" },
    { label: "Dedicated Teams", to: "/services#services" },
  ],
  Company: [
    { label: "About Us", to: "/about" },
    { label: "Case Studies", to: "/case-studies" },
    { label: "Careers", to: "/contact" },
    { label: "Contact", to: "/contact" },
  ],
  Resources: [
    { label: "Blog", to: "/" },
    { label: "Privacy Policy", to: "/" },
  ],
};

export const Footer = () => {
  return (
    <footer
      className="border-t border-border/50 py-10 md:py-12 px-4 sm:px-6 md:px-8 shadow-[0_-4px_24px_-4px_rgba(0,0,0,0.08),0_-8px_32px_-8px_rgba(0,0,0,0.06)]"
      style={{ background: "linear-gradient(180deg, hsl(270 25% 92%) 0%, hsl(268 22% 88%) 100%)" }}
    >
      <div className="container-agency">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 mb-8 md:mb-10">
          <div className="sm:col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-3 inline-flex">
              <img src="/evolvo-logo.png" alt="" className="h-8 w-auto md:h-9" width={40} height={40} />
              <span className="font-display text-lg font-semibold tracking-wide text-foreground">Evolvo</span>
            </Link>
            <p className="font-body text-sm text-muted-foreground leading-relaxed mb-1.5">
              Enterprise software that matters. We build solutions that create measurable business value—from healthcare and AI to SaaS and dedicated teams. Partner with us for clarity, scale, and outcomes you can count on.
            </p>
            <p className="font-body text-xs text-muted-foreground/80">
              Trusted by 600+ companies. NPS 71. Clutch Top Agency 2025. Response within 24 hours.
            </p>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display text-foreground font-semibold mb-2 text-sm uppercase tracking-wider">
                {category}
              </h4>
              <ul className="space-y-1">
                {links.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="font-mono-custom text-xs text-muted-foreground">
            © 2026 Evolvo. All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <a
                key={social}
                href="#"
                className="font-mono-custom text-xs text-muted-foreground hover:text-primary transition-colors"
                rel="noopener noreferrer"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
