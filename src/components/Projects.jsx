import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, X } from 'lucide-react'
import { TECHNICAL_PROJECTS } from '../data/projects'
import { BUSINESS_PROJECTS } from '../data/businessProjects'

const MODAL_TRANSITION_MS = 250

function TechTags({ technologies, limit }) {
  const list = limit ? technologies.slice(0, limit) : technologies

  return (
    <ul className="flex flex-wrap gap-2">
      {list.map((tech) => (
        <li key={tech}>
          <span className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-3 py-1 text-[13px] font-medium text-[var(--color-text-muted)]">
            {tech}
          </span>
        </li>
      ))}
    </ul>
  )
}

function ProjectCard({ project, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="group flex flex-col overflow-hidden rounded-[18px] border border-[var(--color-border)] bg-[var(--color-surface)] text-left shadow-[0_1px_2px_rgba(0,0,0,0.4)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/40 hover:shadow-[0_28px_56px_-32px_rgba(59,130,246,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-4"
    >
      {project.image && (
        <div className="flex h-[200px] w-full shrink-0 items-center justify-center overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface-strong)] p-6">
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            loading="lazy"
            className="h-auto max-h-full w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-7 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-bold text-[var(--color-text)] sm:text-[1.375rem]">
            {project.title}
          </h3>
          <ArrowRight
            className="mt-1.5 h-5 w-5 shrink-0 text-[var(--color-accent)] transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </div>

        <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-[var(--color-text-muted)]">
          {project.shortDescription}
        </p>

        <div className="mt-7 border-t border-[var(--color-border)] pt-5">
          <h4 className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[var(--color-text-muted)]">
            Built With
          </h4>
          <div className="mt-3">
            <TechTags
              technologies={project.technologies}
              limit={project.title === 'Forge' ? undefined : 4}
            />
          </div>
        </div>
      </div>
    </button>
  )
}

function BusinessProjectEntry({ project }) {
  return (
    <div className="flex flex-col gap-4 rounded-[18px] border border-[rgba(245,158,11,0.18)] bg-[var(--color-surface)] p-7 shadow-[0_1px_2px_rgba(0,0,0,0.4)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[var(--color-secondary)]/40 hover:shadow-[0_28px_56px_-32px_rgba(245,158,11,0.4)] sm:p-8">
      <div className="flex flex-col gap-1">
        <h4 className="text-2xl font-bold leading-tight text-[var(--color-text)] sm:text-[1.75rem]">
          {project.title}
        </h4>
        <p className="text-base font-medium text-[var(--color-text-muted)]">{project.subtitle}</p>
      </div>

      <ul className="flex flex-col gap-3">
        {project.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-start gap-3 text-[15px] leading-relaxed text-[var(--color-text-muted)] sm:text-base"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-secondary)]"
              aria-hidden="true"
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-3 border-t border-[rgba(245,158,11,0.18)] pt-5">
        <h5 className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[var(--color-text-muted)]">
          Skills Applied
        </h5>
        <div className="mt-3">
          <TechTags technologies={project.skills} />
        </div>
      </div>
    </div>
  )
}

function ProjectModal({ project, onRequestClose }) {
  const [visible, setVisible] = useState(false)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const closingRef = useRef(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(frame)
  }, [])

  function handleClose() {
    if (closingRef.current) return
    closingRef.current = true
    setVisible(false)
    window.setTimeout(onRequestClose, MODAL_TRANSITION_MS)
  }

  useEffect(() => {
    const previouslyFocused = document.activeElement
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        event.stopPropagation()
        handleClose()
        return
      }

      if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable || focusable.length === 0) return

        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown, true)
    return () => {
      document.removeEventListener('keydown', handleKeyDown, true)
      document.body.style.overflow = previousOverflow
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const hasLinks = Boolean(project.liveUrl || project.githubUrl)

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6">
      <div
        className={`absolute inset-0 bg-[var(--color-bg)]/80 backdrop-blur-sm transition-opacity duration-[250ms] ease-out ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className={`relative flex w-full max-w-[900px] flex-col overflow-hidden rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[0_40px_100px_-32px_rgba(59,130,246,0.35)] transition-all duration-[250ms] ease-out sm:rounded-[22px] ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        style={{ maxHeight: '95vh' }}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[var(--color-border)] p-5 sm:p-8">
          <div className="flex flex-col gap-2">
            <span className="text-[0.75rem] font-medium uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
              Project
            </span>
            <h3
              id="project-modal-title"
              className="text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-tight tracking-tight text-[var(--color-text)]"
            >
              {project.title}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            aria-label="Close project details"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-muted)] transition-colors duration-200 hover:border-[var(--color-border-strong)] hover:text-[var(--color-text)]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-8">
          <p className="text-[1.0625rem] leading-relaxed text-[var(--color-text-muted)] sm:text-lg">
            {project.description}
          </p>

          <div className="mt-9">
            <h4 className="text-[0.75rem] font-medium uppercase tracking-[0.3em] text-[var(--color-accent)]">
              Highlights
            </h4>
            <ul className="mt-5 flex flex-col gap-4">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span
                    className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                    aria-hidden="true"
                  />
                  <span className="text-[15px] leading-relaxed text-[var(--color-text-muted)] sm:text-base">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9">
            <h4 className="text-[0.75rem] font-medium uppercase tracking-[0.3em] text-[var(--color-text-muted)]">
              Built With
            </h4>
            <div className="mt-5">
              <TechTags technologies={project.technologies} />
            </div>
          </div>

          {hasLinks && (
            <div className="mt-9 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/[0.08]"
                >
                  View Project
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors duration-200 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-accent)]/[0.08]"
                >
                  GitHub
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const lastTriggerRef = useRef(null)

  function openProject(project, event) {
    lastTriggerRef.current = event.currentTarget
    setSelectedProject(project)
  }

  function closeProject() {
    setSelectedProject(null)
    lastTriggerRef.current?.focus()
  }

  return (
    <section
      id="projects"
      className="relative overflow-hidden px-[clamp(1.5rem,6vw,5rem)] py-[clamp(2.5rem,6vw,4.5rem)] scroll-mt-[var(--nav-height)]"
    >
      <div className="relative mx-auto flex max-w-[1300px] flex-col gap-14 sm:gap-16">
        <h2 className="text-[clamp(1.85rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight text-[var(--color-text)]">
          Projects
        </h2>

        <div className="flex flex-col gap-10 sm:gap-12">
          <div className="flex flex-col gap-4 sm:gap-5">
            <h3 className="text-2xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-[1.75rem]">
              Technical Projects
            </h3>

            <p className="max-w-[750px] text-lg leading-relaxed text-[var(--color-text-muted)] sm:text-xl">
              Here are some of the projects I&rsquo;ve worked on, ranging from
              full-stack web platforms to mobile apps and low-level systems
              programming in C. Each project helped me develop new skills,
              solve real problems, and push my understanding of technology
              further.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
            {TECHNICAL_PROJECTS.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                onOpen={(event) => openProject(project, event)}
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10 pt-6 sm:gap-12 sm:pt-8">
          <div className="flex flex-col gap-4 sm:gap-5">
            <h3 className="text-2xl font-bold leading-tight tracking-tight text-[var(--color-text)] sm:text-[1.75rem]">
              Business Projects
            </h3>

            <p className="max-w-[750px] text-lg leading-relaxed text-[var(--color-text-muted)] sm:text-xl">
              Business and product-focused work exploring strategy,
              entrepreneurship, and real-world opportunities.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:gap-7">
            {BUSINESS_PROJECTS.map((project) => (
              <BusinessProjectEntry key={project.title} project={project} />
            ))}
          </div>
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onRequestClose={closeProject} />
      )}
    </section>
  )
}

export default Projects
