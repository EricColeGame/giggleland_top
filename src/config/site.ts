export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    website?: string;
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Giggleland Wiki",
  shortName: "Giggleland",
  logoText: "G",
  tagline: "Walkthroughs, Puzzles & Endings",
  description: "Explore Giggleland with walkthroughs, puzzle solutions, character details, story clues, endings, and beginner tips for the upcoming first-person horror adventure.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://giggleland.top",
  supportEmail: "support@giggleland.top",
  gameUrl: "https://store.steampowered.com/app/3370490/Giggleland/",
  heroVideoId: "eVQjQtO31q8", // Giggleland – Official Steam Teaser Trailer
  social: {
    website: "https://www.giggle.land/",
    discord: "https://discord.gg/5uxKpSEtGy",
    youtube: "https://www.youtube.com/@Gigglelandgame",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
