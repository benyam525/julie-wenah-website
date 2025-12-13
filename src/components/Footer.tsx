import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]" role="contentinfo">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-xl font-semibold tracking-tight hover:text-[var(--accent)] transition-colors"
            >
              Julie Wenah
            </Link>
            <p className="mt-3 text-sm text-[var(--muted)] max-w-xs">
              Working at the intersection of civil rights, technology, and culture.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold mb-4">Navigate</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/work" className="text-sm text-[var(--muted)] hover:text-[var(--accent)]">
                  My Work
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-sm text-[var(--muted)] hover:text-[var(--accent)]">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/speaking" className="text-sm text-[var(--muted)] hover:text-[var(--accent)]">
                  Speaking
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-[var(--muted)] hover:text-[var(--accent)]">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-[var(--muted)] hover:text-[var(--accent)]">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/juliewenah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://digitalcivilrights.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--muted)] hover:text-[var(--accent)]"
                >
                  Digital Civil Rights Coalition
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--muted)]">
            &copy; {currentYear} Julie Wenah. All rights reserved.
          </p>
          <p className="text-xs text-[var(--muted)]">
            Technology isn&apos;t neutral. It never has been.
          </p>
        </div>
      </div>
    </footer>
  );
}
