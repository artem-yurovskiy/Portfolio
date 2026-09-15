import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const PROJECTS = [
  {
    name: 'Forge',
    description:
      'Forge is a full-stack mobile fitness and social app I helped build as part of a 6-person Agile team across 3 sprints. It combines workout tracking, diet logging, social feeds, and AI-assisted fitness guidance.',
    bullets: [
      'Built 6 features end to end, including workout scheduling, accessibility settings, push notification scheduling, a friends activity feed, and AI-powered meal recommendations, owning the frontend, backend, and tests for each.',
      'Wired the OpenAI API into a FastAPI endpoint to generate structured, personalized meal recommendations, then integrated the feature into the React Native frontend.',
      'Built push notification scheduling with Expo Notifications, letting users set reminders tied to their planned workouts and meals.',
      "Contributed to the team's design document and helped define 59 user stories in the product backlog, shaping the app's core features.",
    ],
    tags: ['React Native', 'TypeScript', 'FastAPI', 'SQLAlchemy', 'OpenAI API'],
    liveUrl: null,
    githubUrl: 'https://github.com/artem-yurovskiy/Forge',
  },
  {
    name: 'Online Marketplace',
    description:
      'Online Marketplace is a Java client-server application I built to support concurrent buyers and sellers, handling store browsing, shopping carts, and purchase history through a custom multithreaded backend.',
    bullets: [
      'Designed a Swing GUI for browsing stores, managing carts, and switching between buyer and seller roles.',
      'Built a multithreaded socket server in Java, running each client connection on its own dedicated thread to support real concurrent sessions.',
      'Validated User, Seller, Customer, Product, and Store logic with JUnit tests under 1-second timeouts.',
      'Implemented persistent storage via object serialization, saving cart and purchase data across sessions without a database.',
    ],
    tags: ['Java', 'Swing', 'Socket Programming', 'Multithreading', 'JUnit'],
    liveUrl: null,
    githubUrl: 'https://github.com/artem-yurovskiy/Online-Marketplace',
  },
  {
    name: 'Custom Memory Allocator',
    description:
      "Custom Memory Allocator is a low-level systems project where I implemented my own heap allocator in C, managing memory manually instead of relying on the standard library's malloc and free.",
    bullets: [
      'Implemented a custom heap allocator in C using low-level pointer manipulation and boundary tags to track allocated and free memory blocks.',
      'Designed free list management to track available memory blocks and support efficient allocation and deallocation.',
      'Built block splitting logic to divide larger free blocks into smaller ones, reducing wasted space on small allocations.',
      'Implemented immediate coalescing to merge adjacent free blocks back together, minimizing fragmentation and improving memory reuse over time.',
    ],
    tags: ['C', 'Systems Programming', 'Memory Management'],
    liveUrl: null,
    githubUrl: null,
  },
  {
    name: 'Wordle Unlimited',
    description:
      'Wordle Unlimited is a JavaFX desktop clone of the NYT word game, where players get six guesses to find a five-letter word, complete with animated feedback and a statistics dashboard tracking performance over time.',
    bullets: [
      'Built the core game logic in Java, validating guesses letter by letter and generating a new target word each round.',
      'Implemented custom tile-flip animations in JavaFX to visually reveal correct, misplaced, and incorrect letters after each guess.',
      "Built a statistics dashboard using JavaFX's charting library to track win percentage, current streak, and guess distribution across games.",
    ],
    tags: ['Java', 'JavaFX', 'Maven'],
    liveUrl: null,
    githubUrl: 'https://github.com/artem-yurovskiy/Wordle-Unlimited',
  },
]

function ProjectLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[var(--name-warm-white)] underline decoration-[var(--portrait-border)] underline-offset-4 transition-colors hover:decoration-[var(--name-warm-white)]"
    >
      {children}
    </a>
  )
}

function slugify(name) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
}

function ProjectEntry({ project }) {
  const [open, setOpen] = useState(false)
  const highlightsId = `project-highlights-${slugify(project.name)}`

  return (
    <article className="flex flex-col gap-6 border-t border-white/10 pt-10 sm:pt-12">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
        <p className="text-xl font-bold text-[var(--name-warm-white)] sm:text-2xl">
          {project.name}
        </p>
        <div className="flex gap-5 text-base font-semibold text-[var(--body-slate)]">
          {project.liveUrl && <ProjectLink href={project.liveUrl}>Live Demo</ProjectLink>}
          {project.githubUrl && <ProjectLink href={project.githubUrl}>GitHub</ProjectLink>}
        </div>
      </div>

      <p className="max-w-[68ch] text-lg font-semibold leading-relaxed text-[var(--name-warm-white)] sm:text-xl">
        {project.description}
      </p>

      <ul className="flex flex-wrap gap-2.5">
        {project.tags.map((tag) => (
          <li key={tag}>
            <span className="inline-flex rounded-full border border-white/15 px-3.5 py-1.5 text-sm font-medium text-[var(--body-slate)]">
              {tag}
            </span>
          </li>
        ))}
      </ul>

      <div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls={highlightsId}
          className="group flex w-full items-center justify-between gap-4 border-t border-white/10 pt-6 text-left transition-colors focus-visible:rounded-sm focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--portrait-border)] focus-visible:outline-offset-4"
        >
          <span className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-[var(--name-warm-white)] sm:text-xl">
              Highlights
            </span>
            <span className="text-sm font-medium text-[var(--body-slate)]">
              {open ? 'Hide' : 'Click to view'}
            </span>
          </span>
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-[var(--body-slate)] transition-colors group-hover:border-white/35 group-hover:text-[var(--name-warm-white)]">
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 motion-reduce:transition-none ${
                open ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </span>
        </button>

        <div
          className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
            open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
        >
          <ul id={highlightsId} className="overflow-hidden pt-4 sm:columns-2 sm:gap-x-8">
            {project.bullets.map((bullet) => (
              <li
                key={bullet}
                className="mb-3 flex break-inside-avoid items-start gap-3 text-[var(--body-slate)]"
              >
                <span
                  className="mt-[0.65em] h-px w-4 shrink-0 bg-[var(--portrait-border)]"
                  aria-hidden="true"
                />
                <span className="text-[1.0625rem] font-medium leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[var(--navy-deep)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] scroll-mt-[var(--nav-height)]"
    >
      <div className="mx-auto flex max-w-[1360px] flex-col gap-14 sm:gap-16">
        <h2 className="text-[clamp(2rem,3.6vw,2.75rem)] font-bold leading-tight tracking-tight text-[var(--name-warm-white)]">
          Projects
        </h2>

        <div className="flex flex-col gap-12 sm:gap-14">
          {PROJECTS.map((project) => (
            <ProjectEntry key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
