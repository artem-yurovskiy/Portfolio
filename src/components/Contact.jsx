import { ArrowUp, Mail } from 'lucide-react'

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
    value: 'artembedford@gmail.com',
    href: 'mailto:artembedford@gmail.com',
    Icon: Mail,
    external: false,
  },
  {
    id: 'linkedin',
    value: 'linkedin.com/in/artem-yurovskiy',
    href: 'https://www.linkedin.com/in/artem-yurovskiy/',
    Icon: LinkedinIcon,
    external: true,
  },
  {
    id: 'github',
    value: 'github.com/artem-yurovskiy',
    href: 'https://github.com/artem-yurovskiy',
    Icon: GithubIcon,
    external: true,
  },
]

function ContactLink({ link }) {
  const { value, href, Icon, external } = link

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex w-full items-center gap-4 rounded-[12px] border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4 shadow-[0_1px_2px_rgba(0,0,0,0.4)] transition-[transform,border-color,background-color,box-shadow] duration-[180ms] ease-out hover:-translate-y-0.5 hover:border-[var(--color-accent)]/40 hover:shadow-[0_20px_40px_-24px_rgba(59,130,246,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-4 sm:w-auto"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border border-[var(--color-accent)]/25 bg-[var(--color-accent)]/10 text-[var(--color-accent)] transition-colors duration-[180ms]">
        <Icon size={20} aria-hidden="true" />
      </span>
      <span className="truncate text-[15px] text-[var(--color-text-muted)] transition-colors duration-[180ms] group-hover:text-[var(--color-text)] sm:text-base">
        {value}
      </span>
    </a>
  )
}

function Contact() {
  return (
    <>
      <section
        id="contact"
        className="bg-[var(--color-contact-bg)] px-[clamp(1.5rem,6vw,5rem)] pb-[clamp(48px,5vw,64px)] pt-[clamp(90px,10vw,120px)] scroll-mt-[var(--nav-height)]"
      >

        <div className="relative mx-auto flex max-w-[1300px] flex-col items-center gap-8 text-center sm:gap-10">
          <div className="flex flex-col items-center gap-4">
            <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight tracking-tight text-[var(--color-text)]">
              Get in Touch
            </h2>

            <p className="max-w-[650px] text-base leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
              I&rsquo;m always open to connecting, discussing opportunities, or
              talking about interesting projects and ideas.
            </p>
          </div>

          <div className="flex w-full max-w-[420px] flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-10 sm:gap-y-4">
            {CONTACT_LINKS.map((link) => (
              <ContactLink key={link.id} link={link} />
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[var(--color-contact-border)] bg-[var(--color-contact-bg)] px-[clamp(1.5rem,6vw,5rem)] py-6">
        <div className="mx-auto flex max-w-[1300px] justify-end">
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[var(--color-text-muted)] transition-colors duration-200 hover:text-[var(--color-accent)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-4 sm:text-sm"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </footer>
    </>
  )
}

export default Contact
