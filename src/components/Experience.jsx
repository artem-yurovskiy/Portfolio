const HIGHLIGHTS = [
  'Built the Stripe integration end-to-end — one-time checkouts and recurring subscriptions, a signed webhook handler with idempotent order fulfillment so retried webhooks never double-charge or double-fulfill, and rollback-on-failure to keep orders consistent.',
  'Designed a polymorphic order and fulfillment system: one database table cleanly handles four distinct product types — course enrollment, event tickets, memberships, and gift cards.',
  'Built a custom calendar-based booking system for placement tests and event registration, with real-time slot availability.',
  'Built the internal admin dashboard staff use to manage classes, bookings, instructors, and waitlists — aggregating live data across six-plus database tables.',
  'Treated accessibility (WCAG 2.1 AA target) and mobile-first responsive design as engineering requirements from day one, not late-stage fixes.',
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
      className="relative bg-[var(--navy-mid)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] scroll-mt-[var(--nav-height)]"
    >
      <div className="mx-auto flex max-w-[1360px] flex-col gap-14 sm:gap-16">
        <h2 className="text-[clamp(2rem,3.6vw,2.75rem)] font-bold leading-tight tracking-tight text-[var(--name-warm-white)]">
          Experience
        </h2>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:pt-10">
          <p className="text-xl font-semibold text-[var(--name-warm-white)] sm:text-2xl">
            Full-Stack Developer
          </p>
          <div className="flex flex-col gap-1.5 text-base text-[var(--body-slate)] sm:items-end sm:text-right">
            <p>Verbs &amp; Vibes — Manchester, NH</p>
            <p>Summer 2026</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-10 sm:pt-12">
          <p className="max-w-[68ch] text-lg leading-relaxed text-[var(--name-warm-white)] sm:text-xl">
            Designed and built a production full-stack web application
            end-to-end for a real business — a public site, e-commerce and
            subscription payments, a booking system, and an internal admin
            dashboard.
          </p>
          <p className="max-w-[68ch] text-base leading-relaxed text-[var(--body-slate)]">
            Roughly 14,000 lines of code across 98 components and 28 routes,
            with 8 versioned database migrations tracking real schema
            evolution as the product grew.
          </p>
        </div>

        <div className="border-t border-white/10 pt-10 sm:pt-12">
          <h3 className="text-lg font-semibold text-[var(--name-warm-white)] sm:text-xl">
            Highlights
          </h3>
          <ul className="mt-6 flex max-w-[70ch] flex-col gap-4">
            {HIGHLIGHTS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[var(--body-slate)]">
                <span
                  className="mt-[0.65em] h-px w-4 shrink-0 bg-[var(--portrait-border)]"
                  aria-hidden="true"
                />
                <span className="text-[1.0625rem] leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-t border-white/10 pt-10 sm:pt-12">
          <h3 className="text-lg font-semibold text-[var(--name-warm-white)] sm:text-xl">
            Built With
          </h3>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {STACK.map((tech) => (
              <li key={tech}>
                <span className="inline-flex rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-[var(--body-slate)]">
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
