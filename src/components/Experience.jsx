const HIGHLIGHTS = [
  'Built with Next.js and the App Router, covering marketing pages, class registration, and event ticketing.',
  'Designed a unified Stripe checkout handling 4 product types, including course enrollment, gift cards, event tickets, and recurring memberships. Every order flows through a signed webhook handler with idempotent, atomic fulfillment to prevent duplicate charges.',
  'Modeled a Supabase backend to store and manage bookings, orders, memberships, and user data across the entire platform.',
  'Built an internal admin dashboard giving staff real-time control over classes, bookings, and waitlists.',
  'Used Claude Code to cut development time, shipping features faster across the full-stack build.',
]

const STACK = [
  'Next.js',
  'React',
  'JavaScript',
  'PostgreSQL',
  'Supabase',
  'Stripe API',
  'Tailwind CSS',
  'Node.js',
  'Server Actions',
]

function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-[var(--navy-mid)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(2.5rem,6vw,4.5rem)] scroll-mt-[var(--nav-height)]"
    >
      <div className="mx-auto flex max-w-[1360px] flex-col gap-8 sm:gap-10">
        <h2 className="text-[clamp(2rem,3.6vw,2.75rem)] font-bold leading-tight tracking-tight text-[var(--name-warm-white)]">
          Experience
        </h2>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-6 sm:pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
            <p className="text-xl font-bold text-[var(--name-warm-white)] sm:text-2xl">
              Full-Stack Developer
            </p>
            <div className="flex flex-col gap-1.5 text-base font-semibold text-[var(--body-slate)] sm:items-end sm:text-right">
              <p>
                <a
                  href="https://verbsandvibes.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--name-warm-white)] underline decoration-[var(--portrait-border)] underline-offset-4 transition-colors hover:decoration-[var(--name-warm-white)]"
                >
                  Verbs &amp; Vibes
                </a>{' '}
                — Manchester, NH
              </p>
              <p>May 2026 – Present</p>
            </div>
          </div>

          <p className="max-w-[68ch] text-lg font-semibold leading-relaxed text-[var(--name-warm-white)] sm:text-xl">
            Designed and built a production full-stack web application end
            to end for a language and culture club startup, spanning a
            public site, e-commerce and subscription payments, a booking
            system, and an internal admin dashboard.
          </p>
        </div>

        <div className="border-t border-white/10 pt-6 sm:pt-8">
          <h3 className="text-lg font-bold text-[var(--name-warm-white)] sm:text-xl">
            Highlights
          </h3>
          <ul className="mt-4 sm:columns-2 sm:gap-x-8">
            {HIGHLIGHTS.map((item) => (
              <li
                key={item}
                className="mb-3 flex break-inside-avoid items-start gap-3 text-[var(--body-slate)]"
              >
                <span
                  className="mt-[0.65em] h-px w-4 shrink-0 bg-[var(--portrait-border)]"
                  aria-hidden="true"
                />
                <span className="text-[1.0625rem] font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-8 text-lg font-bold text-[var(--name-warm-white)] sm:text-xl">
            Built With
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {STACK.map((tech) => (
              <li key={tech}>
                <span className="inline-flex rounded-full border border-white/15 px-3.5 py-1.5 text-sm font-medium text-[var(--body-slate)]">
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
