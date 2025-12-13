import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Work | Julie Wenah",
  description: "Explore Julie Wenah's work inside technology, around institutions, and across culture. From Meta and Airbnb to the Obama Administration and Digital Civil Rights Coalition.",
};

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide uppercase text-[var(--muted)] mb-6">
            My Work
          </p>
          <h1 className="headline-serif text-4xl md:text-5xl mb-8">
            If technology isn&apos;t neutral, then responsibility doesn&apos;t live in just one place.
          </h1>
          <p className="text-xl text-[var(--muted)] body-text">
            My work spans three domains: inside technology companies, around the institutions that govern them, and across the culture that shapes how we think about power and innovation.
          </p>
        </div>
      </section>

      {/* Section 1: Inside Technology */}
      <section className="border-t border-[var(--border)] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-wide uppercase text-[var(--accent)] mb-4">
              Inside Technology
            </p>
            <h2 className="headline-serif text-3xl md:text-4xl mb-4">
              Products encode values—whether teams admit it or not.
            </h2>
          </div>

          {/* Meta */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-[var(--border)]">
              Meta
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="space-y-3">
                <h4 className="font-semibold">Race Data Measurement Initiative</h4>
                <p className="text-[var(--muted)] body-text">
                  Led civil rights strategy for measuring how people from marginalized communities experience Meta technologies. Developed privacy-preserving methodologies including Bayesian Improved Surname Geocoding and secure multiparty computation.
                </p>
                <Link
                  href="https://about.fb.com/news/2021/11/inclusive-products-through-race-data-measurement/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-[var(--accent)] hover:underline underline-offset-4"
                >
                  Read more
                </Link>
              </article>

              <article className="space-y-3">
                <h4 className="font-semibold">Project Height</h4>
                <p className="text-[var(--muted)] body-text">
                  Created a multi-pronged approach: (1) proactive tool and framework enabling product teams to build inclusively, (2) scholarship program of over $300K in partnership with Dorothy I. Height Education Foundation and National Council of Negro Women.
                </p>
              </article>

              <article className="space-y-3">
                <h4 className="font-semibold">Ray-Ban Meta Smart Glasses</h4>
                <p className="text-[var(--muted)] body-text">
                  Supported product launch, advising on facial recognition systems and ensuring civil rights considerations were embedded in the product development process.
                </p>
              </article>

              <article className="space-y-3">
                <h4 className="font-semibold">Civil Rights Product Lead</h4>
                <p className="text-[var(--muted)] body-text">
                  As Associate General Counsel, served as product lead for accessibility across Meta&apos;s civil rights work, advising on products reaching billions of users.
                </p>
              </article>
            </div>
          </div>

          {/* Airbnb */}
          <div>
            <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-[var(--border)]">
              Airbnb
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="space-y-3">
                <h4 className="font-semibold">Project Lighthouse</h4>
                <p className="text-[var(--muted)] body-text">
                  Industry-leading initiative to uncover, measure, and overcome discrimination when booking or hosting. Developed first-of-its-kind privacy-centric methodology recognized by Harvard Kennedy School&apos;s Belfer Center Tech Spotlight.
                </p>
                <Link
                  href="https://news.airbnb.com/project-lighthouse-recognized-by-the-tech-spotlight-at-harvard-kennedy-schools-belfer-center/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-[var(--accent)] hover:underline underline-offset-4"
                >
                  Read more
                </Link>
              </article>

              <article className="space-y-3">
                <h4 className="font-semibold">Community Commitment</h4>
                <p className="text-[var(--muted)] body-text">
                  Drove legal support for civil liberties efforts. When Airbnb required users to commit to non-discrimination, 1.3 million users chose to leave rather than agree—proving platforms can take a stand.
                </p>
              </article>

              <article className="space-y-3">
                <h4 className="font-semibold">Bias Mitigation Policies</h4>
                <p className="text-[var(--muted)] body-text">
                  Led policy to hide guest profile photos until after booking accepted. Expanded Instant Book feature allowing guests to book without prior approval—reducing opportunities for discrimination.
                </p>
              </article>

              <article className="space-y-3">
                <h4 className="font-semibold">Acting Regional Counsel, Africa</h4>
                <p className="text-[var(--muted)] body-text">
                  Provided legal support for Airbnb&apos;s business across Africa, navigating complex regulatory environments while maintaining commitment to civil rights principles.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Around Institutions */}
      <section className="bg-[var(--foreground)]/[0.02] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-wide uppercase text-[var(--accent)] mb-4">
              Around Institutions
            </p>
            <h2 className="headline-serif text-3xl md:text-4xl mb-4">
              Civil rights don&apos;t enforce themselves.
            </h2>
            <p className="text-lg text-[var(--muted)] max-w-2xl">
              Setting guardrails for scale. Ensuring digital systems serve everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-3">FCC Communications Equity and Diversity Council</h3>
              <p className="text-[var(--muted)] body-text">
                Appointed member representing INCOMPAS. Co-Chair of the Innovation and Access Working Group, leading national strategies for digital access and digital equity.
              </p>
            </article>

            <article className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-3">White House, Obama Administration</h3>
              <p className="text-[var(--muted)] body-text">
                Policy work in First Lady Michelle Obama&apos;s office. Advanced &quot;We Will Rise&quot; CNN documentary on girls&apos; education in Liberia.
              </p>
              <Link
                href="https://www.cnn.com/videos/tv/2016/10/09/we-will-rise-film-michelle-obama.cnn/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-[var(--accent)] hover:underline underline-offset-4"
              >
                Watch the film
              </Link>
            </article>

            <article className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-3">U.S. Department of Commerce</h3>
              <p className="text-[var(--muted)] body-text">
                Counselor and Policy Advisor. Led President Obama&apos;s manufacturing initiative around regional collaboration. Supported U.S.-Africa trade and energy agreements through Power Africa.
              </p>
            </article>

            <article className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg">
              <h3 className="font-semibold mb-3">NASA Legal Fellowship</h3>
              <p className="text-[var(--muted)] body-text">
                Where the legal career began—understanding how institutions encode their values into their structures.
              </p>
            </article>

            <article className="p-6 bg-[var(--background)] border border-[var(--border)] rounded-lg md:col-span-2">
              <h3 className="font-semibold mb-3">Tahirih Justice Center Advisory Council</h3>
              <p className="text-[var(--muted)] body-text">
                Dedicated to supporting human trafficking survivors, bringing civil rights principles to one of the most vulnerable populations.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Section 3: Across Culture */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12">
            <p className="text-sm font-semibold tracking-wide uppercase text-[var(--accent)] mb-4">
              Across Culture
            </p>
            <h2 className="headline-serif text-3xl md:text-4xl mb-4">
              Systems don&apos;t change until stories do.
            </h2>
            <p className="text-lg text-[var(--muted)] max-w-2xl">
              This is where creativity gets legitimacy—not as a side hobby, but as strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="space-y-4">
              <h3 className="font-semibold text-xl">Digital Civil Rights Coalition</h3>
              <p className="text-[var(--muted)] body-text">
                As Chairwoman, leading a global network of attorneys, artists, organizers, and technologists shaping an inclusive digital ecosystem.
              </p>
              <ul className="space-y-2 text-[var(--muted)] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)]">•</span>
                  <span>Partnership with Partnership on AI on technical paper: &quot;Eyes Off My Data: Exploring Differentially Private Federated Statistics To Support Algorithmic Bias Assessments&quot;</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)]">•</span>
                  <span>Legal convening with National Bar Association</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)]">•</span>
                  <span>&quot;Breathing Room: A Creative Coalition&quot; toolkit</span>
                </li>
              </ul>
              <div className="pt-4">
                <Link
                  href="https://digitalcivilrights.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--accent)] hover:underline underline-offset-4"
                >
                  Visit Digital Civil Rights Coalition
                </Link>
              </div>
            </article>

            <article className="space-y-4">
              <h3 className="font-semibold text-xl">Filmmaking &amp; Creative Work</h3>
              <p className="text-[var(--muted)] body-text">
                Award-winning filmmaker producing docuseries and short films centered around healing and hip hop.
              </p>
              <ul className="space-y-2 text-[var(--muted)] text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)]">•</span>
                  <span>&quot;We Will Rise&quot; — Advanced set design for Michelle Obama&apos;s CNN Film in Liberia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)]">•</span>
                  <span>The Album &amp; The Mixtape — Creative collective of dreamers, doers, storytellers, and music lovers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--accent)]">•</span>
                  <span>Podcast dissecting songs and providing calls to action through lyrics</span>
                </li>
              </ul>
            </article>

            <article className="space-y-4">
              <h3 className="font-semibold text-xl">Women in Product</h3>
              <p className="text-[var(--muted)] body-text">
                Board Member equipping women to thrive in product management careers.
              </p>
              <blockquote className="text-sm italic text-[var(--muted)] mt-4">
                &quot;Building products that shape our world is not a spectator sport. Creating a well-resourced ecosystem rich with inclusion and opportunity will lead to a world where women are recognized leaders chartering the new frontier.&quot;
              </blockquote>
            </article>

            <article className="space-y-4">
              <h3 className="font-semibold text-xl">Research &amp; Convening</h3>
              <p className="text-[var(--muted)] body-text">
                Collaborating across sectors to produce actionable insights and build coalitions for change.
              </p>
              <div className="pt-4">
                <Link
                  href="https://partnershiponai.org/paper/eyes-off-my-data/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--accent)] hover:underline underline-offset-4"
                >
                  Read the Partnership on AI paper
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[var(--foreground)] text-[var(--background)] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="headline-serif text-2xl md:text-3xl mb-6">
            Interested in collaboration?
          </h2>
          <p className="text-lg text-[var(--background)]/70 mb-8 max-w-xl mx-auto">
            I&apos;m always looking for partners who share a commitment to building technology that serves everyone.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[var(--background)] text-[var(--foreground)] font-medium rounded-sm hover:bg-[var(--background)]/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
