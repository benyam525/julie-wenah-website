import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Julie Wenah",
  description: "Julie M. Wenah is a global product leader, digital civil rights lawyer, tech executive, and filmmaker. Learn about her journey from civil rights to technology.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold tracking-wide uppercase text-[var(--muted)] mb-6">
              About
            </p>
            <h1 className="headline-serif text-4xl md:text-5xl mb-8">
              I didn&apos;t come to technology through code.
              <br />
              <span className="text-[var(--accent)]">I came through civil rights.</span>
            </h1>
          </div>
          {/* PHOTO PLACEHOLDER: Portrait of Julie - editorial, thoughtful */}
          <div className="relative aspect-[3/4] bg-[var(--border)] rounded-lg overflow-hidden flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--muted)]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-sm text-[var(--muted)]">About Photo</p>
              <p className="text-xs text-[var(--muted)]/70 mt-1">Editorial portrait</p>
            </div>
            {/* Uncomment and update src when photo is ready:
            <Image
              src="/images/julie-about.jpg"
              alt="Julie Wenah"
              fill
              className="object-cover"
            />
            */}
          </div>
        </div>
      </section>

      {/* The Spine */}
      <section className="border-t border-[var(--border)] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <blockquote className="text-xl md:text-2xl text-[var(--muted)] border-l-0 pl-0 italic">
              Law taught me how power is written into systems. Product taught me how power actually moves. Culture taught me how change becomes real.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Arc Narrative */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl space-y-8 body-text">
            <p className="text-lg text-[var(--foreground)]">
              My path hasn&apos;t followed the typical tech trajectory. It started with a belief: that the rules governing our world—legal, technological, cultural—determine who gets access and who gets left out.
            </p>

            <p className="text-lg text-[var(--muted)]">
              As a <strong className="text-[var(--foreground)]">legal fellow at NASA</strong>, I began to understand how institutions encode their values into their structures. At the <strong className="text-[var(--foreground)]">White House</strong>, in First Lady Michelle Obama&apos;s policy shop, I saw how policy can be wielded to reshape opportunity. At the <strong className="text-[var(--foreground)]">U.S. Department of Commerce</strong>, I led President Obama&apos;s manufacturing initiative and worked on U.S.-Africa trade and energy agreements—work that showed me how systems scale.
            </p>

            <p className="text-lg text-[var(--muted)]">
              Then I moved into technology. At <strong className="text-[var(--foreground)]">Airbnb</strong>, I helped create Project Lighthouse—an industry-first initiative to measure and address discrimination on the platform. When 1.3 million users refused to commit to non-discrimination and left, it proved something important: platforms make choices, and those choices matter.
            </p>

            <p className="text-lg text-[var(--muted)]">
              At <strong className="text-[var(--foreground)]">Meta</strong>, as Associate General Counsel and Civil Rights Product Lead, I led the Race Data Measurement initiative, developing privacy-preserving methodologies to understand how marginalized communities experience technology. I created Project Height—a framework for inclusive product development paired with a $300K+ scholarship program investing in the next generation of civil rights and tech leaders.
            </p>

            <p className="text-lg text-[var(--muted)]">
              Today, as <strong className="text-[var(--foreground)]">Chairwoman of the Digital Civil Rights Coalition</strong>, I lead a global network working to shape an inclusive digital ecosystem. As an appointed member of the <strong className="text-[var(--foreground)]">FCC&apos;s Communications Equity and Diversity Council</strong>, I co-chair the Innovation and Access Working Group, developing national strategies for digital access.
            </p>

            <p className="text-lg text-[var(--foreground)]">
              And through it all, I&apos;ve been a storyteller—an award-winning filmmaker producing docuseries centered around healing and hip hop, because I know that systems don&apos;t change until stories do.
            </p>
          </div>
        </div>
      </section>

      {/* Personal Background */}
      <section className="bg-[var(--foreground)]/[0.02] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-[var(--muted)] mb-8">
            Where I Come From
          </h2>
          <div className="max-w-3xl space-y-6 body-text">
            <p className="text-lg text-[var(--muted)]">
              I am the daughter of Nigerian immigrants who emigrated from a small village with no access to broadband. That reality—the digital divide as a lived experience, not an abstraction—shapes everything I do.
            </p>
            <p className="text-lg text-[var(--muted)]">
              As a dark-skinned Black woman, I&apos;m acutely conscious of how technology affects women who look like me. From facial recognition that fails on darker skin to algorithms that perpetuate bias, I&apos;ve seen how &quot;neutral&quot; technology often isn&apos;t.
            </p>
            <p className="text-lg text-[var(--muted)]">
              Growing up, fictional TV lawyers inspired me to pursue law: Claire Huxtable, Benjamin Matlock, Uncle Phil, Maxine Shaw. Yes, I know they were fictional characters. But you can&apos;t be what you don&apos;t see—and that principle drives my work on representation in tech today.
            </p>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-2xl md:text-3xl headline-serif text-center italic">
              &ldquo;Heavy is the head that wears the crown. It does feel heavy, but I know for such a time as this, that I must be equipped.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="border-t border-[var(--border)] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-[var(--muted)] mb-12">
            The Progression
          </h2>
          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
              <div className="text-sm font-semibold text-[var(--accent)]">Present</div>
              <div>
                <h3 className="font-semibold">Chairwoman, Digital Civil Rights Coalition</h3>
                <p className="text-[var(--muted)] mt-1">Leading global network shaping inclusive digital ecosystem; filmmaker and creative</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
              <div className="text-sm font-semibold text-[var(--accent)]">Meta/Facebook</div>
              <div>
                <h3 className="font-semibold">Associate General Counsel, Civil Rights Product Lead</h3>
                <p className="text-[var(--muted)] mt-1">Created Race Data Measurement initiative and Project Height scholarship</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
              <div className="text-sm font-semibold text-[var(--accent)]">Airbnb</div>
              <div>
                <h3 className="font-semibold">Community Senior Counsel &amp; Acting Regional Counsel, Africa</h3>
                <p className="text-[var(--muted)] mt-1">Led Project Lighthouse anti-discrimination initiative</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
              <div className="text-sm font-semibold text-[var(--accent)]">U.S. Department of Commerce</div>
              <div>
                <h3 className="font-semibold">Counselor and Policy Advisor</h3>
                <p className="text-[var(--muted)] mt-1">Led President Obama&apos;s manufacturing communities agenda; supported U.S.-Africa trade agreements</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
              <div className="text-sm font-semibold text-[var(--accent)]">White House</div>
              <div>
                <h3 className="font-semibold">First Lady Michelle Obama&apos;s Policy Shop</h3>
                <p className="text-[var(--muted)] mt-1">Policy work advancing education initiatives</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4">
              <div className="text-sm font-semibold text-[var(--accent)]">NASA</div>
              <div>
                <h3 className="font-semibold">Legal Fellow</h3>
                <p className="text-[var(--muted)] mt-1">Where the legal career began</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[var(--foreground)] text-[var(--background)] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-xl md:text-2xl body-text">
              Today, my work is focused on one thing: making sure technology doesn&apos;t quietly become the next civil rights blind spot.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
