"use client";

import { useActionState } from "react";
import { sendContactEmail } from "@/app/actions/contact";
import type { ContactState } from "@/app/actions/contact";

export function ContactForm() {
  const [state, action, pending] = useActionState<ContactState, FormData>(
    sendContactEmail,
    null
  );

  if (state?.success) {
    return (
      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/[0.05] px-6 py-8 text-center">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 mb-4">
          <svg className="size-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-sm font-semibold text-emerald-300 mb-1">Message sent</p>
        <p className="text-xs text-[#9BA7B7]">Thanks — I&apos;ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form action={action} className="flex flex-col gap-3 text-left w-full max-w-lg mx-auto">
      {state?.error && (
        <p className="rounded-xl border border-red-400/20 bg-red-400/[0.06] px-4 py-3 text-xs text-red-300">
          {state.error}
        </p>
      )}

      <div className="grid sm:grid-cols-2 gap-3">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-name" className="text-xs font-medium text-[#9BA7B7]">
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[#F4F7FB] placeholder-[#64748B] outline-none transition-colors focus:border-sky-400/40 focus:bg-white/[0.06]"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="contact-email" className="text-xs font-medium text-[#9BA7B7]">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="your@email.com"
            className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[#F4F7FB] placeholder-[#64748B] outline-none transition-colors focus:border-sky-400/40 focus:bg-white/[0.06]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="text-xs font-medium text-[#9BA7B7]">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={4}
          placeholder="Tell me about your project or just say hi…"
          className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-[#F4F7FB] placeholder-[#64748B] outline-none transition-colors focus:border-sky-400/40 focus:bg-white/[0.06] resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-1 w-full inline-flex items-center justify-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-sky-400 hover:shadow-[0_0_24px_rgba(56,189,248,0.35)] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? (
          <>
            <svg className="size-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
