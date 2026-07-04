"use client";

import { memo } from "react";
import { CONTACT_DATA } from "@/data/contact";
import { ContactHeader } from "./contact-header";
import { AvailabilityCard } from "./availability-card";
import { TimezoneCard } from "./timezone-card";
import { ContactForm } from "./contact-form";
import { ContactMethodCard } from "./contact-method-card";
import { SocialGrid } from "./social-grid";
import { ContactFaq } from "./faq";
import { ContactCta } from "./contact-cta";

function ContactSectionComponent() {
    return (
        <section id="contact" aria-label="Contact experience" className="section relative overflow-hidden">
            <div
                aria-hidden="true"
                className="bg-grid pointer-events-none absolute inset-0 opacity-25 [mask-image:radial-gradient(ellipse_70%_45%_at_50%_0%,black,transparent)]"
            />
            <div aria-hidden="true" className="noise pointer-events-none absolute inset-0" />

            <div className="container relative z-10 flex flex-col gap-[var(--space-48)]">
                <ContactHeader header={CONTACT_DATA.header} />

                <div className="grid gap-[var(--space-24)] lg:grid-cols-2">
                    <div className="flex flex-col gap-[var(--space-24)]">
                        <AvailabilityCard items={CONTACT_DATA.availability} />
                        <TimezoneCard timezone={CONTACT_DATA.timezone} />
                    </div>
                    <div>
                        <ContactForm />
                    </div>
                </div>

                <section aria-labelledby="contact-methods-title" className="flex flex-col gap-[var(--space-24)]">
                    <div>
                        <h3 id="contact-methods-title" className="text-h3 font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
                            Direct Channels
                        </h3>
                        <p className="mt-[var(--space-8)] max-w-2xl text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
                            Connect directly through professional profiles or open communication protocols.
                        </p>
                    </div>
                    <div className="grid gap-[var(--space-16)] sm:grid-cols-2 lg:grid-cols-5">
                        {CONTACT_DATA.methods.map((method) => (
                            <ContactMethodCard key={method.id} method={method} />
                        ))}
                    </div>
                </section>

                <SocialGrid items={CONTACT_DATA.socials} />

                <ContactFaq items={CONTACT_DATA.faq} />

                <ContactCta cta={CONTACT_DATA.cta} />
            </div>
        </section>
    );
}

export const ContactSection = memo(ContactSectionComponent);
