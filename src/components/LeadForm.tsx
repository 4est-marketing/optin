"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";

export type LeadField = {
  name: string;
  label: string;
  type?: "text" | "tel" | "email";
  placeholder?: string;
  required?: boolean;
};

export default function LeadForm({
  fields,
  submitLabel,
  successMessage,
  theme = "light",
}: {
  fields: LeadField[];
  submitLabel: string;
  successMessage: string;
  theme?: "light" | "dark";
}) {
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    window.setTimeout(() => setStatus("done"), 700);
  }

  if (status === "done") {
    return (
      <div
        className={`flex items-start gap-3 rounded-2xl p-5 ${
          theme === "dark"
            ? "bg-white/10 text-white"
            : "bg-brand-green/10 text-brand-ink"
        }`}
      >
        <CheckCircle2 className="mt-0.5 shrink-0 text-brand-green-dark" size={22} />
        <p className="text-sm leading-relaxed">{successMessage}</p>
      </div>
    );
  }

  const inputClasses =
    theme === "dark"
      ? "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-white/50"
      : "w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-brand-ink placeholder:text-brand-ink/40 outline-none transition focus:border-brand-purple/50";

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {fields.map((field) => (
        <input
          key={field.name}
          name={field.name}
          type={field.type ?? "text"}
          required={field.required ?? true}
          placeholder={field.placeholder ?? field.label}
          aria-label={field.label}
          className={inputClasses}
        />
      ))}
      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-green px-5 py-3.5 text-sm font-semibold text-brand-ink transition hover:bg-brand-green-dark hover:text-white disabled:opacity-70"
      >
        {status === "loading" && <Loader2 className="animate-spin" size={16} />}
        {submitLabel}
      </button>
    </form>
  );
}
