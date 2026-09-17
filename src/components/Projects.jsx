import { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, X } from 'lucide-react'
import { PROJECTS } from '../data/projects'

const MODAL_TRANSITION_MS = 250

function TechTags({ technologies, limit }) {
  const list = limit ? technologies.slice(0, limit) : technologies

  return (
    <ul className="flex flex-wrap gap-2">
      {list.map((tech) => (
        <li key={tech}>
          <span className="inline-flex rounded-full border border-white/15 bg-[var(--navy-mid)] px-3 py-1 text-[13px] font-medium text-[var(--body-slate)]">
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
      className="group flex flex-col rounded-[18px] border border-white/10 bg-[var(--navy-panel)] p-7 text-left transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[#7EAFFF]/35 hover:shadow-[0_0_60px_-28px_rgba(126,175,255,0.5)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7EAFFF] focus-visible:outline-offset-4 sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-bold text-[var(--name-warm-white)] sm:text-[1.375rem]">
          {project.title}
        </h3>
        <ArrowRight
          className="mt-1.5 h-5 w-5 shrink-0 text-[#7EAFFF] transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      </div>

      <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-[var(--body-slate)]">
        {project.shortDescription}
      </p>

      <div className="mt-7 border-t border-white/10 pt-5">
        <h4 className="text-[0.7rem] font-medium uppercase tracking-[0.25em] text-[var(--body-slate)]">
          Built With
        </h4>
        <div className="mt-3">
          <TechTags
            technologies={project.technologies}
            limit={project.title === 'Forge' ? undefined : 4}
          />
        </div>
      </div>
    </button>
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
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-[250ms] ease-out ${
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
        className={`relative flex w-full max-w-[900px] flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[var(--navy-panel)] shadow-[0_0_120px_-40px_rgba(126,175,255,0.4)] transition-all duration-[250ms] ease-out sm:rounded-[22px] ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        style={{ maxHeight: '95vh' }}
      >
        <div className="flex items-start justify-between gap-4 border-b border-white/10 p-5 sm:p-8">
          <div className="flex flex-col gap-2">
            <span className="text-[0.75rem] font-medium uppercase tracking-[0.3em] text-[var(--body-slate)]">
              Project
            </span>
            <h3
              id="project-modal-title"
              className="text-[clamp(1.75rem,4.5vw,2.5rem)] font-bold leading-tight tracking-tight text-[var(--name-warm-white)]"
            >
              {project.title}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            aria-label="Close project details"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 text-[var(--body-slate)] transition-colors duration-200 hover:border-white/30 hover:text-[var(--name-warm-white)]"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-8">
          <p className="text-[1.0625rem] leading-relaxed text-[var(--body-slate)] sm:text-lg">
            {project.description}
          </p>

          <div className="mt-9">
            <h4 className="text-[0.75rem] font-medium uppercase tracking-[0.3em] text-[#7EAFFF]">
              What I Built
            </h4>
            <ul className="mt-5 flex flex-col gap-4">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span
                    className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#7EAFFF]"
                    aria-hidden="true"
                  />
                  <span className="text-[15px] leading-relaxed text-[var(--body-slate)] sm:text-base">
                    {highlight}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-9">
            <h4 className="text-[0.75rem] font-medium uppercase tracking-[0.3em] text-[var(--body-slate)]">
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--name-warm-white)] transition-colors duration-200 hover:border-[#7EAFFF]/40 hover:bg-[#7EAFFF]/[0.07]"
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
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--name-warm-white)] transition-colors duration-200 hover:border-[#7EAFFF]/40 hover:bg-[#7EAFFF]/[0.07]"
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
      className="relative overflow-hidden bg-[var(--navy-deep)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,9rem)] scroll-mt-[var(--nav-height)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(90,120,190,0.09),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[1300px] flex-col gap-14 sm:gap-16">
        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-[clamp(1.85rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight text-[var(--name-warm-white)]">
            Projects
          </h2>

          <p className="max-w-[750px] text-lg leading-relaxed text-[var(--body-slate)] sm:text-xl">
            Here are some of the projects I&rsquo;ve worked on, ranging from
            full-stack web platforms to mobile apps and low-level systems
            programming in C. Each project helped me develop new skills,
            solve real problems, and push my understanding of technology
            further.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
              onOpen={(event) => openProject(project, event)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} onRequestClose={closeProject} />
      )}
    </section>
  )
}

export default Projects
