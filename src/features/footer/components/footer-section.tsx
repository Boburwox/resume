"use client";

import { memo } from "react";
import { FooterHero } from "./footer-hero";
import { FooterNavigation } from "./footer-navigation";
import { FooterTechStack } from "./footer-tech-stack";
import { FooterSocials } from "./footer-socials";
import { FooterGithubSummary } from "./footer-github-summary";
import { FooterAvailability } from "./footer-availability";
import { BackToTop } from "./back-to-top";
import { FooterBottom } from "./footer-bottom";

function FooterSectionComponent() {
    return (
        <footer
            role="contentinfo"
            aria-label="Site Footer"
            className="relative w-full border-t border-[var(--color-border)] bg-gradient-to-b from-transparent to-[var(--color-background-strong)] py-[var(--space-48)] md:py-[var(--space-64)]"
        >
            {/* Grid overlay background */}
            <div
                aria-hidden="true"
                className="bg-grid pointer-events-none absolute inset-0 opacity-15 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_100%,black,transparent)]"
            />
            <div aria-hidden="true" className="noise pointer-events-none absolute inset-0 opacity-[0.02]" />

            <div className="container relative z-10 flex flex-col gap-[var(--space-48)]">
                {/* Animated Closing Headline / Hero */}
                <FooterHero />

                {/* Dynamic Social Connection Link Cards */}
                <FooterSocials />

                {/* Main Footer Content Grid */}
                <div className="grid gap-[var(--space-32)] md:grid-cols-2 lg:grid-cols-3">
                    {/* Quick links navigation */}
                    <FooterNavigation />

                    {/* Badged tech stack */}
                    <FooterTechStack />

                    {/* Availability details & response schedules */}
                    <FooterAvailability />
                </div>

                {/* Live GitHub summaries */}
                <FooterGithubSummary />

                {/* Footer bottom metadata, copyright and engineering note */}
                <FooterBottom />
            </div>

            {/* Floating Scroll to Top button */}
            <BackToTop />
        </footer>
    );
}

export const FooterSection = memo(FooterSectionComponent);
export default FooterSection;
