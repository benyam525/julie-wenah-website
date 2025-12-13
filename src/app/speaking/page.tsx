import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Speaking | Julie Wenah",
  description: "Book Julie Wenah for speaking engagements on civil rights, technology, AI ethics, and digital equity. Topics include designing for equity, AI and civil rights, and tech accountability.",
};

export default function SpeakingPage() {
  const topics = [
    {
      title: "What 'Neutral Technology' Gets Wrong",
      description: "Why the myth of technological neutrality obscures real choices—and real harms. A look at how design decisions encode values, whether we acknowledge it or not.",
    },
    {
      title: "Designing for Equity Before Scale",
      description: "How to embed civil rights considerations into product development from day one, not after harm has already been amplified.",
    },
    {
      title: "AI, Power, and Civil Rights",
      description: "Examining how AI systems perpetuate and create new forms of discrimination—and what responsible development actually looks like.",
    },
    {
      title: "Why Culture Is the Missing Layer in Tech Accountability",
      description: "Policy and law matter, but systems don't change until stories do. How narrative and coalition work complement regulatory approaches.",
    },
    {
      title: "From Policy to Product: How Laws Become Code",
      description: "The journey from civil rights law to product feature—and why legal expertise alone isn't enough to ensure equitable technology.",
    },
    {
      title: "Building Responsible Technology in the Age of AI",
      description: "Practical frameworks for organizations navigating AI development while maintaining commitment to civil rights principles.",
    },
  ];

  const pastSpeaking = [
    {
      event: "World Economic Forum, Davos 2024",
      topic: "Panel discussions on gender equity and technology",
    },
    {
      event: "Women in Product",
      topic: "Reflections on gender inclusion and tech leadership",
    },
    {
      event: "Tech Beach",
      topic: "Technology and civil rights in the Caribbean region",
    },
    {
      event: "National Bar Association",
      topic: "Legal convenings on digital civil rights",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide uppercase text-[var(--muted)] mb-6">
            Speaking
          </p>
          <h1 className="headline-serif text-4xl md:text-5xl mb-8">
            Most conversations about technology start with innovation.
            <br />
            <span className="text-[var(--accent)]">Mine start with consequences.</span>
          </h1>
          <p className="text-xl text-[var(--muted)] body-text">
            I bring over a decade of experience at the intersection of civil rights, technology, and policy—translating complex issues into actionable insights for diverse audiences.
          </p>
        </div>
      </section>

      {/* Topics Section */}
      <section className="border-t border-[var(--border)] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-[var(--muted)] mb-12">
            Topics I Speak On
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {topics.map((topic, index) => (
              <article key={index} className="p-6 border border-[var(--border)] rounded-lg">
                <h3 className="font-semibold text-lg mb-3">{topic.title}</h3>
                <p className="text-[var(--muted)] body-text">{topic.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-[var(--foreground)]/[0.02] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <h2 className="text-sm font-semibold tracking-wide uppercase text-[var(--muted)] mb-8">
              My Approach
            </h2>
            <div className="space-y-6 body-text">
              <p className="text-lg text-[var(--foreground)]">
                I&apos;m not interested in being a panel filler. I&apos;m interested in conversations that change how people think—and ultimately act—on technology and civil rights.
              </p>
              <p className="text-lg text-[var(--muted)]">
                My talks draw from real experience: building anti-discrimination systems at Airbnb, leading civil rights product work at Meta, advising the Obama Administration, and chairing the Digital Civil Rights Coalition.
              </p>
              <p className="text-lg text-[var(--muted)]">
                I speak to technical and non-technical audiences alike, translating complex issues into frameworks that attendees can actually use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Past Speaking */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-[var(--muted)] mb-12">
            Past Speaking Engagements
          </h2>
          <div className="space-y-6">
            {pastSpeaking.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 border-b border-[var(--border)]"
              >
                <h3 className="font-semibold md:w-1/3">{item.event}</h3>
                <p className="text-[var(--muted)] md:w-2/3">{item.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="border-t border-[var(--border)] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl headline-serif italic">
              &ldquo;Building products that shape our world is not a spectator sport.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--foreground)] text-[var(--background)] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="headline-serif text-2xl md:text-3xl mb-6">
              Interested in having me speak?
            </h2>
            <p className="text-lg text-[var(--background)]/70 mb-8">
              I&apos;m available for keynotes, panels, workshops, and moderated discussions. Let&apos;s talk about how I can add value to your event.
            </p>
            <div className="space-y-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 bg-[var(--background)] text-[var(--foreground)] font-medium rounded-sm hover:bg-[var(--background)]/90 transition-colors"
              >
                Submit a Speaking Inquiry
              </Link>
              <p className="text-sm text-[var(--background)]/50">
                Please include event details, date, audience size, and topic of interest.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
