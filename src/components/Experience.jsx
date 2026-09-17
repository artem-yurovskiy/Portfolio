import { Calendar } from 'lucide-react'

const EXPERIENCES = [
  {
    role: 'Full-Stack Developer',
    company: 'Verbs & Vibes',
    companyUrl: 'https://verbsandvibes.vercel.app/',
    previewImage: '/VerbsAndVibes.webp',
    location: 'Manchester, NH',
    startDate: 'May 2026',
    endDate: 'Present',
    description:
      'Designed and built a production full-stack web application for a language and culture club startup, spanning a public marketing site, e-commerce and subscription payments, a booking system, and an internal admin dashboard.',
    highlights: [
      {
        text: 'Built with Next.js and the App Router, covering marketing pages, class registration, and event ticketing.',
        emphasize: ['Next.js', 'App Router'],
      },
      {
        text: 'Worked directly with the business owner to gather requirements and translate day-to-day operational needs (class scheduling, membership pricing, event capacity) into functional features.',
        emphasize: ['business owner', 'functional features'],
      },
      {
        text: 'Designed a unified Stripe checkout handling 4 product types, including course enrollment, gift cards, event tickets, and recurring memberships. Every order flows through a signed webhook handler with idempotent, atomic fulfillment to prevent duplicate charges.',
        emphasize: ['Stripe checkout', '4 product types'],
      },
      {
        text: 'Modeled a Supabase backend to store and manage bookings, orders, memberships, and user data across the entire platform.',
        emphasize: ['Supabase backend'],
      },
      {
        text: 'Built an internal admin dashboard giving staff real-time control over classes, bookings, and waitlists.',
        emphasize: ['admin dashboard'],
      },
      {
        text: 'Used Claude Code to cut development time, shipping features faster across the full-stack build.',
        emphasize: ['Claude Code'],
      },
    ],
    technologies: [
      'Next.js',
      'JavaScript',
      'Supabase/PostgreSQL',
      'Stripe API',
      'Tailwind CSS',
      'Node.js',
    ],
  },
]

function withEmphasis(text, terms) {
  if (!terms || terms.length === 0) return text

  const escaped = terms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
  const pattern = new RegExp(`(${escaped.join('|')})`, 'g')

  return text.split(pattern).map((part, index) =>
    terms.includes(part) ? (
      <strong key={index} className="font-semibold text-[#F5F7FA]">
        {part}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    ),
  )
}

function SitePreview({ experience }) {
  return (
    <a
      href={experience.companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group/preview block overflow-hidden rounded-[14px] border border-[rgba(100,150,220,0.25)] transition-colors duration-200 hover:border-[#7EAFFF]/40"
    >
      <div className="flex items-center gap-1.5 border-b border-[rgba(100,150,220,0.25)] bg-[#0A121E] px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" aria-hidden="true" />
        <span className="ml-3 truncate text-xs font-medium text-[#A8B7D0]">
          {experience.companyUrl.replace('https://', '')}
        </span>
      </div>
      <div className="aspect-[16/10] w-full overflow-hidden bg-[#0A121E]">
        <img
          src={experience.previewImage}
          alt={`${experience.company} website preview`}
          className="h-full w-full object-cover object-top transition-transform duration-300 group-hover/preview:scale-[1.02]"
        />
      </div>
    </a>
  )
}

function ExperienceCard({ experience }) {
  return (
    <div className="group mx-auto flex w-full max-w-[1300px] flex-col rounded-[18px] border border-[rgba(100,150,220,0.25)] bg-[#0D1624] p-7 shadow-[0_0_80px_-36px_rgba(126,175,255,0.3)] transition-[transform,box-shadow,border-color] duration-[250ms] hover:-translate-y-0.5 hover:border-[rgba(126,175,255,0.4)] hover:shadow-[0_0_90px_-30px_rgba(126,175,255,0.4)] sm:p-9">
      <div className="flex flex-col gap-10 md:flex-row md:items-stretch md:gap-0">
        <div className="flex flex-col gap-8 md:w-[58%] md:pr-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-[1.85rem] font-bold leading-tight text-[#F5F7FA] sm:text-[2.15rem]">
              {experience.role}
            </h3>
            <p className="text-base font-medium text-[#A8B7D0]">
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#F5F7FA] underline decoration-[rgba(126,175,255,0.4)] underline-offset-4 transition-colors hover:decoration-[#7EAFFF]"
              >
                {experience.company}
              </a>{' '}
              — {experience.location}
            </p>
            <p className="flex items-center gap-2 text-sm font-medium text-[#A8B7D0]">
              <Calendar className="h-[18px] w-[18px] text-[#A8B7D0]" strokeWidth={1.5} aria-hidden="true" />
              {experience.startDate} – {experience.endDate}
            </p>
          </div>

          <p className="max-w-[650px] text-lg leading-relaxed text-[#A8B7D0]">
            {experience.description}
          </p>

          <SitePreview experience={experience} />
        </div>

        <div
          className="h-px w-full bg-[rgba(100,150,220,0.25)] md:my-1 md:h-auto md:w-px md:self-stretch"
          aria-hidden="true"
        />

        <div className="flex flex-col md:w-[42%] md:pl-10">
          <h4 className="text-sm font-medium uppercase tracking-[0.25em] text-[#7EAFFF]">
            Highlights
          </h4>
          <ul className="mt-5 flex flex-col gap-5">
            {experience.highlights.map((highlight) => (
              <li
                key={highlight.text}
                className="flex items-start gap-3 text-[0.975rem] leading-[1.55] text-[#A8B7D0]"
              >
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7EAFFF]"
                  aria-hidden="true"
                />
                <span>{withEmphasis(highlight.text, highlight.emphasize)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-9 border-t border-[rgba(100,150,220,0.25)] pt-8">
        <h4 className="text-sm font-medium uppercase tracking-[0.25em] text-[#7EAFFF]">
          Built With
        </h4>
        <ul className="mt-4 flex flex-wrap gap-2.5">
          {experience.technologies.map((tech) => (
            <li key={tech}>
              <span className="inline-flex rounded-full border border-[rgba(100,150,220,0.25)] px-3.5 py-2 text-sm font-medium text-[#A8B7D0] transition-colors duration-200 hover:border-[#7EAFFF]/40 hover:text-[#F5F7FA]">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[var(--navy-deep)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,9rem)] scroll-mt-[var(--nav-height)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(90,120,190,0.09),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[1300px] flex-col gap-10 sm:gap-12">
        <h2 className="text-[clamp(1.85rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight text-[var(--name-warm-white)]">
          Experience
        </h2>

        {EXPERIENCES.map((experience) => (
          <ExperienceCard key={experience.company} experience={experience} />
        ))}
      </div>
    </section>
  )
}

export default Experience
