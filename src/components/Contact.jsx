import { ArrowUp, ArrowUpRight, Mail } from 'lucide-react'

// lucide-react dropped brand/logo marks, so GitHub and LinkedIn are authored
// inline as the standard flat brand glyphs (viewBox 0 0 24 24, fill: currentColor).
function GithubIcon({ size = 16, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.754-1.333-1.754-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function LinkedinIcon({ size = 16, ...props }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

const CONTACT_LINKS = [
  {
    id: 'email',
    label: 'Email',
    value: 'artembedford@gmail.com',
    href: 'mailto:artembedford@gmail.com',
    Icon: Mail,
    external: false,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/artem-yurovskiy/',
    Icon: LinkedinIcon,
    external: true,
  },
  {
    id: 'github',
    label: 'GitHub',
    value: 'View my projects',
    href: 'https://github.com/artem-yurovskiy',
    Icon: GithubIcon,
    external: true,
  },
]

function ContactCard({ link }) {
  const { label, value, href, Icon, external } = link

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group relative flex min-h-[150px] flex-col justify-between rounded-[18px] border border-[rgba(100,150,220,0.2)] bg-[#0D1624] p-6 text-left transition-[transform,border-color,background-color] duration-200 hover:-translate-y-1 hover:border-[#7EAFFF]/35 hover:bg-[#101a2c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7EAFFF] focus-visible:outline-offset-4 sm:min-h-[160px] sm:p-7"
    >
      <span className="flex h-10 w-10 items-center justify-center rounded-[10px] border border-[#7EAFFF]/25 bg-[#7EAFFF]/10 text-[#7EAFFF]">
        <Icon size={18} aria-hidden="true" />
      </span>

      <span className="mt-5 flex flex-col gap-1 pr-6">
        <span className="text-[1.05rem] font-semibold text-[var(--name-warm-white)]">
          {label}
        </span>
        <span className="truncate text-sm text-[var(--body-slate)]">{value}</span>
      </span>

      <ArrowUpRight
        className="absolute bottom-6 right-6 h-4 w-4 text-[var(--body-slate)] transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#7EAFFF] sm:bottom-7 sm:right-7"
        aria-hidden="true"
      />
    </a>
  )
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[var(--navy-mid)] px-[clamp(1.5rem,6vw,5rem)] pb-[clamp(3.5rem,8vw,5rem)] pt-[clamp(6rem,14vw,10rem)] scroll-mt-[var(--nav-height)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_50%_20%,rgba(126,175,255,0.07),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[850px] flex-col items-center gap-8 text-center sm:gap-10">
        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center justify-center gap-[0.85rem]">
            <span className="text-[0.8rem] font-light uppercase tracking-[0.28em] text-[var(--body-slate)]">
              Contact
            </span>
            <span
              className="h-px w-[140px] shrink-0 bg-gradient-to-r from-[var(--portrait-border)] to-transparent"
              aria-hidden="true"
            />
          </div>

          <h2 className="text-[clamp(2.25rem,6vw,4rem)] font-bold leading-tight tracking-tight text-[var(--name-warm-white)]">
            Let&rsquo;s Connect
          </h2>

          <p className="max-w-[650px] text-base leading-relaxed text-[var(--body-slate)] sm:text-lg">
            I&rsquo;m always open to connecting, discussing opportunities, or
            talking about interesting projects and ideas.
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">
          {CONTACT_LINKS.map((link) => (
            <ContactCard key={link.id} link={link} />
          ))}
        </div>

        <div className="mt-8 flex w-full flex-col items-center gap-8 sm:mt-10">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--body-slate)] transition-colors duration-200 hover:text-[var(--name-warm-white)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--portrait-border)] focus-visible:outline-offset-4"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            Back to top
          </button>

          <div className="h-px w-full bg-white/10" aria-hidden="true" />

          <div className="flex w-full flex-col items-center gap-2 text-sm text-[var(--body-slate)] sm:flex-row sm:justify-between">
            <span>&copy; 2026 Artem Yurovskiy</span>
            <span>Built with React</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
