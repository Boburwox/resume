"use client";

import { memo } from "react";
import Image from "next/image";
import { ArrowUpRight, Building2, CalendarDays, FileCode2, LinkIcon, MapPin, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import type { GitHubProfile as GitHubProfileData } from "@/types/github";
import { formatCompactNumber, formatGitHubDate } from "@/features/github/services/github-service";

interface GitHubProfileProps {
  profile: GitHubProfileData;
}

function GitHubProfileComponent({ profile }: GitHubProfileProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      initial={{
        opacity: 0,
        filter: shouldReduceMotion ? "blur(0px)" : "blur(12px)",
        y: shouldReduceMotion ? 0 : 24,
      }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      viewport={{ margin: "-80px", once: true }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="glass grid gap-[var(--space-24)] rounded-[var(--radius-2xl)] p-[var(--space-24)] shadow-[var(--shadow-large)] md:grid-cols-[auto_1fr]"
    >
      <div className="relative h-28 w-28 overflow-hidden rounded-[var(--radius-2xl)] border border-[var(--color-glass-border)] bg-[var(--color-glass)] shadow-[var(--shadow-soft)]">
        <Image
          src={profile.avatarUrl}
          alt={`${profile.name} GitHub avatar`}
          fill
          priority
          sizes="112px"
          className="object-cover"
        />
      </div>

      <div className="flex min-w-0 flex-col gap-[var(--space-20)]">
        <div className="flex flex-col gap-[var(--space-12)] lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <h3 className="text-h3 font-bold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
              {profile.name}
            </h3>
            <a
              href={profile.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-[var(--space-8)] text-sm font-medium text-[var(--color-accent)] transition-colors duration-[var(--duration-fast)] hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
            >
              @{profile.username}
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-3 gap-[var(--space-8)] rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-glass)] p-[var(--space-12)]">
            <ProfileMetric label="Followers" value={formatCompactNumber(profile.followers)} />
            <ProfileMetric label="Following" value={formatCompactNumber(profile.following)} />
            <ProfileMetric label="Repos" value={formatCompactNumber(profile.publicRepos)} />
          </div>
        </div>

        {profile.bio && (
          <p className="max-w-3xl text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
            {profile.bio}
          </p>
        )}

        <div className="grid gap-[var(--space-12)] text-sm text-[var(--color-text-secondary)] sm:grid-cols-2 xl:grid-cols-4">
          {profile.company && <ProfileDetail icon={Building2} label={profile.company} />}
          {profile.location && <ProfileDetail icon={MapPin} label={profile.location} />}
          {profile.websiteUrl && (
            <ProfileDetail icon={LinkIcon} label={formatWebsiteLabel(profile.websiteUrl)} href={profile.websiteUrl} />
          )}
          <ProfileDetail icon={CalendarDays} label={`Since ${formatGitHubDate(profile.createdAt)}`} />
          <ProfileDetail icon={Users} label={`${formatCompactNumber(profile.followers)} followers`} />
          <ProfileDetail icon={FileCode2} label={`${formatCompactNumber(profile.publicGists)} gists`} />
        </div>
      </div>
    </motion.article>
  );
}

interface ProfileMetricProps {
  label: string;
  value: string;
}

function ProfileMetric({ label, value }: ProfileMetricProps) {
  return (
    <div className="flex flex-col items-center gap-[var(--space-4)] text-center">
      <span className="text-body-lg font-semibold text-[var(--color-text-primary)]">{value}</span>
      <span className="text-[10px] font-medium uppercase tracking-[var(--tracking-wide)] text-[var(--color-muted)]">
        {label}
      </span>
    </div>
  );
}

interface ProfileDetailProps {
  icon: LucideIcon;
  label: string;
  href?: string;
}

function ProfileDetail({ icon: Icon, label, href }: ProfileDetailProps) {
  const className =
    "flex min-w-0 items-center gap-[var(--space-8)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-glass)] px-[var(--space-12)] py-[var(--space-8)]";
  const content = (
    <>
      <Icon className="h-4 w-4 shrink-0 text-[var(--color-accent)]" aria-hidden="true" />
      <span className="truncate">{label}</span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={className}>
        {content}
      </a>
    );
  }

  return <div className={className}>{content}</div>;
}

function formatWebsiteLabel(value: string) {
  try {
    return new URL(value).hostname.replace(/^www\./, "");
  } catch {
    return value;
  }
}

export const GitHubProfile = memo(GitHubProfileComponent);
