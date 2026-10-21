import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/config/site";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Giggleland, its logos, artwork, trailers, and related media belong to their respective owners.</p>
      <p>This is an independent, non-official fan wiki created for guide and informational purposes.</p>
      <p>If you own rights to content displayed here and have a concern, contact <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> for review.</p>
    </LegalPage>
  );
}
