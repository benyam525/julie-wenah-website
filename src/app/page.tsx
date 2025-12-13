import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="headline-serif text-4xl md:text-5xl lg:text-6xl mb-6">
              Technology isn&apos;t neutral.
              <br />
              <span className="text-[var(--muted)]">It never has been.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[var(--muted)] mb-8 body-text">
              I work at the intersection of civil rights, technology, and culture to make sure equity is built into digital systems—not patched on after harm is done.
            </p>
            <p className="text-lg text-[var(--accent)]">
              Law. Product. Storytelling. All in service of people.
            </p>
          </div>
          {/* PHOTO PLACEHOLDER: Hero headshot of Julie - professional, warm, confident */}
          <div className="relative aspect-[4/5] bg-[var(--border)] rounded-lg overflow-hidden flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[var(--muted)]/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-[var(--muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <p className="text-sm text-[var(--muted)]">Hero Photo</p>
              <p className="text-xs text-[var(--muted)]/70 mt-1">Professional headshot</p>
            </div>
            {/* Uncomment and update src when photo is ready:
            <Image
              src="/images/julie-hero.jpg"
              alt="Julie Wenah"
              fill
              className="object-cover"
              priority
            />
            */}
          </div>
        </div>
      </section>

      {/* What That Looks Like Section */}
      <section className="bg-[var(--foreground)]/[0.02] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-[var(--muted)] mb-12">
            What that belief looks like in the real world
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Pillar 1: Inside Technology */}
            <article className="space-y-4">
              <h3 className="headline-serif text-2xl">
                Designing Technology With Consequences in Mind
              </h3>
              <p className="text-[var(--muted)] body-text">
                Product leadership focused on embedding civil rights into platform design, AI systems, and governance frameworks—before scale amplifies harm.
              </p>
              <div className="pt-4 border-t border-[var(--border)]">
                <p className="text-sm text-[var(--muted)]">
                  <span className="font-medium text-[var(--foreground)]">In practice:</span> Meta civil rights work, Race Data Measurement, Project Height, Airbnb Project Lighthouse
                </p>
              </div>
            </article>

            {/* Pillar 2: Around Institutions */}
            <article className="space-y-4">
              <h3 className="headline-serif text-2xl">
                Holding Institutions Accountable
              </h3>
              <p className="text-[var(--muted)] body-text">
                Legal and policy work across government and industry to ensure civil rights don&apos;t stop at the digital door.
              </p>
              <div className="pt-4 border-t border-[var(--border)]">
                <p className="text-sm text-[var(--muted)]">
                  <span className="font-medium text-[var(--foreground)]">In practice:</span> FCC CEDC, Obama Administration, regulatory frameworks, manufacturing initiative
                </p>
              </div>
            </article>

            {/* Pillar 3: Across Culture */}
            <article className="space-y-4">
              <h3 className="headline-serif text-2xl">
                Shaping Culture Around Power and Technology
              </h3>
              <p className="text-[var(--muted)] body-text">
                Coalition-building, storytelling, and creative work that shift how we talk about—and ultimately govern—technology.
              </p>
              <div className="pt-4 border-t border-[var(--border)]">
                <p className="text-sm text-[var(--muted)]">
                  <span className="font-medium text-[var(--foreground)]">In practice:</span> Digital Civil Rights Coalition, filmmaking, The Album &amp; The Mixtape, Davos panels
                </p>
              </div>
            </article>
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline underline-offset-4"
            >
              Explore the work in depth
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="border-l-0 pl-0 text-2xl md:text-3xl headline-serif text-[var(--foreground)] italic">
            &ldquo;I didn&apos;t come to technology through code. I came through civil rights.&rdquo;
          </blockquote>
          <p className="mt-6 text-[var(--muted)]">— Julie Wenah</p>
        </div>
      </section>

      {/* Current Roles */}
      <section className="border-t border-[var(--border)] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-semibold tracking-wide uppercase text-[var(--muted)] mb-12">
            Current Focus
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Chairwoman, Digital Civil Rights Coalition</h3>
              <p className="text-sm text-[var(--muted)]">
                A global network of attorneys, artists, organizers, and technologists shaping an inclusive digital ecosystem.
              </p>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">FCC Communications Equity and Diversity Council</h3>
              <p className="text-sm text-[var(--muted)]">
                Appointed member; Co-Chair of the Innovation and Access Working Group, leading national strategies for digital access.
              </p>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Board Member, Women in Product</h3>
              <p className="text-sm text-[var(--muted)]">
                Equipping women to thrive in product management careers.
              </p>
            </div>
            <div className="p-6 border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-2">Award-Winning Filmmaker</h3>
              <p className="text-sm text-[var(--muted)]">
                Producing docuseries and short films centered around healing and hip hop through The Album &amp; The Mixtape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--foreground)] text-[var(--background)] py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="headline-serif text-3xl md:text-4xl mb-6">
            The question is who technology serves—and who it leaves behind.
          </h2>
          <p className="text-lg text-[var(--background)]/70 mb-10 max-w-2xl mx-auto">
            Whether through speaking, collaboration, or partnership, I&apos;m always interested in conversations about building more equitable technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/speaking"
              className="inline-block px-8 py-3 bg-[var(--background)] text-[var(--foreground)] font-medium rounded-sm hover:bg-[var(--background)]/90 transition-colors"
            >
              Speaking Inquiries
            </Link>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 border border-[var(--background)]/30 text-[var(--background)] font-medium rounded-sm hover:bg-[var(--background)]/10 transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
