const RESUME_PATH = '/Artem_Yurovskiy_Resume.pdf'

function Resume() {
  return (
    <section
      id="resume"
      className="bg-[var(--navy-mid)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] scroll-mt-[var(--nav-height)]"
    >
      <div className="mx-auto grid max-w-[1360px] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
        <div className="flex flex-col items-start gap-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-[clamp(2rem,3.6vw,2.75rem)] font-bold leading-tight tracking-tight text-[var(--name-warm-white)]">
              Resume
            </h2>
            <p className="text-base text-[var(--body-slate)] sm:text-lg">
              View or download my full resume.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={RESUME_PATH}
              download="Artem_Yurovskiy_Resume.pdf"
              className="inline-flex items-center rounded-full bg-[var(--name-warm-white)] px-6 py-3 text-sm font-semibold text-[var(--navy-deep)] transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--portrait-border)] focus-visible:outline-offset-4"
            >
              Download Resume
            </a>
            <a
              href={RESUME_PATH}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-[var(--name-warm-white)] transition-colors hover:border-white/35 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--portrait-border)] focus-visible:outline-offset-4"
            >
              View Resume
            </a>
          </div>
        </div>

        <a
          href={RESUME_PATH}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full max-w-[420px] overflow-hidden rounded-lg border border-white/10 transition-colors hover:border-white/30 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--portrait-border)] focus-visible:outline-offset-4 lg:justify-self-end"
          aria-label="Open full resume PDF in a new tab"
        >
          <img
            src="/resume-preview.webp"
            alt="Resume preview — first page"
            className="aspect-[8.5/11] w-full object-cover object-top"
          />
        </a>
      </div>
    </section>
  )
}

export default Resume
