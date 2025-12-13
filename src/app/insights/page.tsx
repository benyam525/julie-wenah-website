import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights | Julie Wenah",
  description: "Thoughts on power, technology, and the stories we tell ourselves about both. Essays and reflections from Julie Wenah on civil rights in the digital age.",
};

const samplePosts = [
  {
    title: "Technology Isn't Neutral—And Neither Are the People Building It",
    excerpt: "Every product decision is a choice about who benefits and who bears the cost. We need to stop pretending otherwise.",
    category: "Technology isn't neutral",
    date: "Coming Soon",
    slug: "#",
  },
  {
    title: "What I Learned Leading Civil Rights Work at Two Tech Giants",
    excerpt: "Reflections on building anti-discrimination systems at Airbnb and Meta—and why the work is never done.",
    category: "Power & Design",
    date: "Coming Soon",
    slug: "#",
  },
  {
    title: "The Digital Divide Is a Civil Rights Issue",
    excerpt: "My parents emigrated from a village with no broadband. That reality shapes everything I do in tech policy.",
    category: "Civil Rights in the Digital Age",
    date: "Coming Soon",
    slug: "#",
  },
  {
    title: "Why Stories Matter in the Fight for Tech Accountability",
    excerpt: "Policy and law set the rules. But culture determines whether those rules stick. Here's why I make films.",
    category: "Culture as Infrastructure",
    date: "Coming Soon",
    slug: "#",
  },
];

const categories = [
  "Technology isn't neutral",
  "Power & Design",
  "Civil Rights in the Digital Age",
  "Culture as Infrastructure",
];

export default function InsightsPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold tracking-wide uppercase text-[var(--muted)] mb-6">
            Insights
          </p>
          <h1 className="headline-serif text-4xl md:text-5xl mb-8">
            This is where I think out loud about power, technology, and the stories we tell ourselves about both.
          </h1>
        </div>
      </section>

      {/* Categories */}
      <section className="border-t border-[var(--border)] py-8">
        <div className="max-w-6xl mx-auto px-6">
          <nav aria-label="Blog categories">
            <ul className="flex flex-wrap gap-4">
              <li>
                <button className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--accent)] transition-colors">
                  All
                </button>
              </li>
              {categories.map((category) => (
                <li key={category}>
                  <button className="text-sm font-medium text-[var(--muted)] hover:text-[var(--accent)] transition-colors">
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {samplePosts.map((post, index) => (
              <article
                key={index}
                className="group p-6 border border-[var(--border)] rounded-lg hover:border-[var(--accent)] transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-medium text-[var(--accent)]">
                    {post.category}
                  </span>
                  <span className="text-xs text-[var(--muted)]">{post.date}</span>
                </div>
                <h2 className="font-semibold text-xl mb-3 group-hover:text-[var(--accent)] transition-colors">
                  <Link href={post.slug}>{post.title}</Link>
                </h2>
                <p className="text-[var(--muted)] body-text">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Coming Soon Section */}
      <section className="bg-[var(--foreground)]/[0.02] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="headline-serif text-2xl md:text-3xl mb-4">
              More insights coming soon
            </h2>
            <p className="text-[var(--muted)] mb-8">
              I&apos;m building this space to share deeper thinking on civil rights, technology, and culture. In the meantime, you can find my latest thoughts on LinkedIn.
            </p>
            <a
              href="https://www.linkedin.com/in/juliewenah/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[var(--foreground)] text-[var(--background)] font-medium rounded-sm hover:bg-[var(--foreground)]/90 transition-colors"
            >
              Follow on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Featured Quote */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl headline-serif italic">
              &ldquo;The question is who technology serves—and who it leaves behind.&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
