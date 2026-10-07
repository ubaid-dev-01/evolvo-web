import { AnimatedSection } from "./AnimatedSection";

/* Brand logos via Simple Icons CDN; Slack via direct URL (CDN sometimes fails) */
const clientLogos: { name: string; slug: string; color: string; src?: string }[] = [
  { name: "Google", slug: "google", color: "4285F4" },
  { name: "Spotify", slug: "spotify", color: "1DB954" },
  { name: "Stripe", slug: "stripe", color: "008CDD" },
  { name: "Airbnb", slug: "airbnb", color: "FF5A5F" },
  { name: "Shopify", slug: "shopify", color: "7AB55C" },
  { name: "Netflix", slug: "netflix", color: "E50914" },
  { name: "Figma", slug: "figma", color: "F24E1E" },
  {
    name: "Slack",
    slug: "slack",
    color: "4A154B",
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg",
  },
  { name: "Notion", slug: "notion", color: "000000" },
  { name: "Vercel", slug: "vercel", color: "000000" },
];

const logoUrl = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color}`;

export const LogoCloud = () => {
  return (
    <section className="section-padding border-t border-border/30 bg-secondary/20">
      <div className="container-agency">
        <AnimatedSection>
          <span className="inline-block font-mono-custom text-xs tracking-[0.2em] text-primary uppercase mb-3 text-center w-full">
            Trusted by industry leaders
          </span>
          <h2 className="text-center font-display text-lg sm:text-xl text-foreground font-semibold mb-8">
            Companies that trust us
          </h2>
        </AnimatedSection>
        <div className="overflow-hidden">
          <div className="logo-marquee-track flex gap-20 sm:gap-28 md:gap-36 items-center whitespace-nowrap will-change-transform w-max">
            {[...clientLogos, ...clientLogos].map((client, i) => (
              <div
                key={`${client.slug}-${i}`}
                className="flex items-center justify-center h-10 sm:h-12 w-[120px] sm:w-[140px] flex-shrink-0 grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={client.src ?? logoUrl(client.slug, client.color)}
                  alt={client.name}
                  className="max-h-8 sm:max-h-10 w-auto object-contain"
                  width={100}
                  height={40}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
