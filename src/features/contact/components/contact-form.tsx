"use client";

import { memo, useCallback, useMemo, useState } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import type { ContactFormField, ContactFormValues } from "@/types/contact";

const INITIAL_VALUES: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  subject: "",
  message: "",
};

const LIMITS: Record<ContactFormField, number> = {
  name: 80,
  email: 120,
  company: 100,
  subject: 140,
  message: 1200,
};

type ContactFormErrors = Partial<Record<ContactFormField, string>>;

function ContactFormComponent() {
  const shouldReduceMotion = useReducedMotion();
  const [values, setValues] = useState<ContactFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const messageCount = useMemo(() => values.message.length, [values.message]);

  const updateField = useCallback((field: ContactFormField, value: string) => {
    setValues((current) => ({ ...current, [field]: value.slice(0, LIMITS[field]) }));
    setErrors((current) => {
      const next = { ...current };
      delete next[field];
      return next;
    });
    setStatus("idle");
  }, []);

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const nextErrors = validateContactForm(values);
      setErrors(nextErrors);

      if (Object.keys(nextErrors).length > 0) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setValues(INITIAL_VALUES);
    },
    [values]
  );

  return (
    <motion.form
      onSubmit={handleSubmit}
      noValidate
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
      className="glass flex flex-col gap-[var(--space-20)] rounded-[var(--radius-2xl)] p-[var(--space-24)]"
    >
      <div>
        <h3 className="text-h3 font-semibold tracking-[var(--tracking-normal)] text-[var(--color-text-primary)]">
          Contact Form
        </h3>
        <p className="mt-[var(--space-8)] text-sm leading-[var(--leading-relaxed)] text-[var(--color-text-secondary)]">
          Share context, constraints, and the outcome you want to create.
        </p>
      </div>

      <div className="grid gap-[var(--space-16)] sm:grid-cols-2">
        <Field label="Name" name="name" value={values.name} error={errors.name} onChange={updateField} required />
        <Field label="Email" name="email" value={values.email} error={errors.email} onChange={updateField} required />
        <Field label="Company" name="company" value={values.company} error={errors.company} onChange={updateField} />
        <Field label="Subject" name="subject" value={values.subject} error={errors.subject} onChange={updateField} required />
      </div>

      <label className="flex flex-col gap-[var(--space-8)]">
        <span className="text-sm font-medium text-[var(--color-text-primary)]">Message</span>
        <textarea
          value={values.message}
          onChange={(event) => updateField("message", event.target.value)}
          required
          maxLength={LIMITS.message}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : "contact-message-count"}
          className="min-h-40 resize-y rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-glass)] px-[var(--space-16)] py-[var(--space-12)] text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-accent)]"
        />
        <span id="contact-message-count" className="text-xs text-[var(--color-muted)]">
          {messageCount}/{LIMITS.message}
        </span>
        {errors.message && (
          <span id="contact-message-error" className="text-sm text-[var(--color-danger)]">
            {errors.message}
          </span>
        )}
      </label>

      {status === "success" && (
        <div className="flex items-center gap-[var(--space-8)] rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-glass)] p-[var(--space-12)] text-sm text-[var(--color-success)]">
          <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
          Message ready. Use your preferred mail client or contact method to send it.
        </div>
      )}

      {status === "error" && (
        <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-glass)] p-[var(--space-12)] text-sm text-[var(--color-danger)]">
          Please fix the highlighted fields and try again.
        </div>
      )}

      <Button type="submit" size="lg" className="button-hover w-fit rounded-[var(--radius-md)]">
        <Send className="h-4 w-4" aria-hidden="true" />
        Send Message
      </Button>
    </motion.form>
  );
}

interface FieldProps {
  label: string;
  name: ContactFormField;
  value: string;
  error?: string | undefined;
  required?: boolean;
  onChange: (field: ContactFormField, value: string) => void;
}

function Field({ label, name, value, error, required = false, onChange }: FieldProps) {
  const errorId = `contact-${name}-error`;

  return (
    <label className="flex flex-col gap-[var(--space-8)]">
      <span className="text-sm font-medium text-[var(--color-text-primary)]">{label}</span>
      <input
        value={value}
        onChange={(event) => onChange(name, event.target.value)}
        required={required}
        maxLength={LIMITS[name]}
        aria-invalid={Boolean(error)}
        {...(error ? { "aria-describedby": errorId } : {})}
        className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-glass)] px-[var(--space-16)] py-[var(--space-12)] text-sm text-[var(--color-text-primary)] outline-none transition-colors focus:border-[var(--color-accent)]"
      />
      {error && (
        <span id={errorId} className="text-sm text-[var(--color-danger)]">
          {error}
        </span>
      )}
    </label>
  );
}

function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) errors.name = "Name is required.";
  if (!values.email.trim()) errors.email = "Email is required.";
  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "Enter a valid email.";
  if (!values.subject.trim()) errors.subject = "Subject is required.";
  if (!values.message.trim()) errors.message = "Message is required.";
  if (values.message.trim().length < 20) errors.message = "Message should include at least 20 characters.";

  return errors;
}

export const ContactForm = memo(ContactFormComponent);
