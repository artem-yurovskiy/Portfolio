// TODO: replace placeholder names, copy, tags, links, and images with real projects.
const PROJECTS = [
  {
    name: 'Project One',
    description:
      'A one-sentence description of the problem this project solves, in plain language.',
    role: 'Solo project — designed, built, and deployed end-to-end.',
    detail:
      'Replace with one concrete technical detail: an algorithm, optimization, or hard problem solved.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    image: '/project_placeholder.webp',
  },
  {
    name: 'Project Two',
    description: 'A one-sentence description of what this project does and who it is for.',
    role: 'Team of three — built the [specific component] you owned.',
    detail: 'Replace with one concrete technical detail specific to this project.',
    tags: ['Python', 'Flask', 'Docker'],
    liveUrl: null,
    githubUrl: '#',
    image: '/project_placeholder.webp',
  },
  {
    name: 'Project Three',
    description: 'A one-sentence description of the problem this project solves.',
    role: 'Solo project — built and shipped independently.',
    detail: 'Replace with one concrete technical detail worth highlighting.',
    tags: ['Python', 'Pandas', 'scikit-learn'],
    liveUrl: '#',
    githubUrl: '#',
    image: '/project_placeholder.webp',
  },
]

function ProjectCard({ project }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[var(--navy-panel)]">
      <img
        src={project.image}
        alt={`${project.name} preview`}
        className="aspect-[16/10] w-full object-cover"
      />

      <div className="flex flex-1 flex-col gap-4 p-6 sm:p-7">
        <div className="flex flex-col gap-2">
          <h3 className="text-xl font-bold text-[var(--name-warm-white)]">{project.name}</h3>
          <p className="text-[1.0625rem] leading-relaxed text-[var(--name-warm-white)]">
            {project.description}
          </p>
          <p className="text-sm leading-relaxed text-[var(--body-slate)]">{project.role}</p>
          <p className="text-sm leading-relaxed text-[var(--body-slate)]">{project.detail}</p>
        </div>

        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag}>
              <span className="inline-flex rounded-full border border-white/15 px-3 py-1 text-xs text-[var(--body-slate)]">
                {tag}
              </span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap gap-3 pt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-[var(--name-warm-white)] transition-colors hover:border-white/35"
            >
              Live Demo
            </a>
          )}
          <a
            href={project.githubUrl}
            className="inline-flex rounded-full border border-white/15 px-4 py-2 text-sm text-[var(--name-warm-white)] transition-colors hover:border-white/35"
          >
            GitHub
          </a>
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

        <div className="grid grid-cols-1 gap-8 border-t border-white/10 pt-10 sm:pt-12 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
