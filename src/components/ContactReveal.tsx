"use client";

import { useState } from "react";

type ContactRevealProps = {
  phone: string;
  email: string;
  showLabel: string;
  hideLabel?: string;
  hint?: string;
};

export function ContactReveal({
  phone,
  email,
  showLabel,
  hideLabel = "Скрыть контакты",
  hint,
}: ContactRevealProps) {
  const [visible, setVisible] = useState(false);

  return (
    <div className="space-y-3">
      <button
        className="btn btn-secondary btn-contact w-full justify-start"
        onClick={() => setVisible((prev) => !prev)}
        aria-expanded={visible}
      >
        {visible ? hideLabel : showLabel}
      </button>
      {visible && (
        <div className="grid gap-2 rounded-md border border-[var(--border)] bg-[#0f131f] p-3 text-[var(--text-strong)]">
          <a className="hover:text-[var(--accent-b)]" href={`tel:${phone}`}>
            {phone}
          </a>
          <a className="hover:text-[var(--accent-b)]" href={`mailto:${email}`}>
            {email}
          </a>
          {hint && (
            <p className="text-sm text-[var(--text-muted)]">{hint}</p>
          )}
        </div>
      )}
    </div>
  );
}
