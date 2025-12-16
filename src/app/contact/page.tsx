"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/julie.wenah@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide uppercase text-[var(--muted)] mb-6">
            Contact
          </p>
          <h1 className="headline-serif text-4xl md:text-5xl mb-8">
            Let&apos;s connect.
          </h1>
          <p className="text-xl text-[var(--muted)] body-text">
            I&apos;m interested in conversations about building more equitable technology—whether through speaking, collaboration, or partnership.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="border-t border-[var(--border)] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Speaking Inquiries */}
            <article className="p-8 border border-[var(--border)] rounded-lg">
              <h2 className="font-semibold text-xl mb-4">Speaking Inquiries</h2>
              <p className="text-[var(--muted)] body-text mb-6">
                Available for keynotes, panels, workshops, and moderated discussions on civil rights, technology, and digital equity.
              </p>
              <p className="text-sm text-[var(--muted)]">
                Please include: event details, date, audience size, topic of interest, and budget range.
              </p>
            </article>

            {/* Collaboration */}
            <article className="p-8 border border-[var(--border)] rounded-lg">
              <h2 className="font-semibold text-xl mb-4">Collaboration</h2>
              <p className="text-[var(--muted)] body-text mb-6">
                Open to partnerships with organizations working on digital civil rights, tech accountability, and inclusive product development.
              </p>
              <p className="text-sm text-[var(--muted)]">
                Share your organization, mission, and how you see us working together.
              </p>
            </article>

            {/* General */}
            <article className="p-8 border border-[var(--border)] rounded-lg">
              <h2 className="font-semibold text-xl mb-4">General Inquiries</h2>
              <p className="text-[var(--muted)] body-text mb-6">
                For press, interviews, or other opportunities not covered above.
              </p>
              <p className="text-sm text-[var(--muted)]">
                Please be specific about the nature of your inquiry.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-[var(--foreground)]/[0.02] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="headline-serif text-2xl md:text-3xl mb-8 text-center">
              Send a message
            </h2>
            {status === "success" ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Message sent!</h3>
                <p className="text-[var(--muted)]">Thank you for reaching out. I typically respond within 3-5 business days.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-[var(--accent)] hover:underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email <span className="text-[var(--accent)]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="inquiry-type" className="block text-sm font-medium mb-2">
                  Type of Inquiry <span className="text-[var(--accent)]">*</span>
                </label>
                <select
                  id="inquiry-type"
                  name="inquiry-type"
                  required
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                >
                  <option value="">Select an option</option>
                  <option value="speaking">Speaking Inquiry</option>
                  <option value="collaboration">Collaboration Opportunity</option>
                  <option value="press">Press / Interview</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors"
                  placeholder="Your organization (if applicable)"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message <span className="text-[var(--accent)]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-[var(--border)] rounded-sm bg-[var(--background)] text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none transition-colors resize-y"
                  placeholder="Please provide details about your inquiry..."
                />
              </div>

              {status === "error" && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-sm text-red-700 text-sm">
                  {errorMessage}
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-block px-8 py-3 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-sm hover:bg-[var(--foreground)]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending..." : "Send Message"}
                </button>
                <p className="mt-4 text-sm text-[var(--muted)]">
                  I typically respond within 3-5 business days.
                </p>
              </div>
            </form>
            )}
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-semibold text-xl mb-4">Prefer to connect elsewhere?</h2>
            <p className="text-[var(--muted)] mb-6">
              You can also find me on LinkedIn for professional inquiries.
            </p>
            <a
              href="https://www.linkedin.com/in/juliewenah/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline underline-offset-4"
            >
              Connect on LinkedIn
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
