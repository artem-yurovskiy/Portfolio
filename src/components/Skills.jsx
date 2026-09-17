const SKILL_CATEGORIES = [
  {
    id: 'languages',
    title: 'Languages',
    description: 'Core programming languages I use to build and ship software.',
    accent: 'technical',
    span: 'lg:col-span-2',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'HTML/CSS', 'SQL', 'C++'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    description:
      'Modern frameworks and libraries I use to build scalable, performant applications.',
    accent: 'technical',
    span: 'lg:col-span-2',
    skills: [
      'React',
      'React Native',
      'Next.js',
      'FastAPI',
      'SQLAlchemy',
      'Node.js',
      'Express',
      'Tailwind CSS',
      'Bootstrap',
      'JavaFX',
      'Java Swing',
      'JUnit',
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    description: 'Tools and platforms that help me build, deploy, and manage applications.',
    accent: 'technical',
    span: 'lg:col-span-2',
    skills: [
      'Git/GitHub',
      'Supabase',
      'Stripe API',
      'OpenAI API',
      'Agile/Scrum',
      'Vercel',
      'Expo',
      'VSCode',
      'IntelliJ',
      'Eclipse',
      'Linux',
      'Postman',
      'GDB',
      'Valgrind',
    ],
  },
  {
    id: 'concepts',
    title: 'Concepts',
    description:
      'Core computer science and software engineering concepts I apply to solve real problems.',
    accent: 'technical',
    span: 'lg:col-span-3',
    skills: [
      'Full-Stack Development',
      'RESTful APIs',
      'Database Schema Design',
      'Payment Systems Integration',
      'Multithreading',
      'Socket Programming',
      'Web Accessibility (WCAG)',
    ],
  },
  {
    id: 'business',
    title: 'Business & Product',
    description:
      'Business skills and product thinking that help me build solutions with real-world impact.',
    accent: 'business',
    span: 'sm:col-span-2 lg:col-span-3',
    skills: [
      'Customer Discovery',
      'Market Research',
      'Financial Modeling',
      'Competitive Analysis',
    ],
  },
]

const ACCENTS = {
  technical: {
    border: 'border-[var(--color-border)]',
    hoverBorder: 'hover:border-[var(--color-border-strong)]',
    hoverGlow: 'hover:shadow-[0_28px_56px_-32px_rgba(59,130,246,0.45)]',
    pillHover:
      'hover:border-[var(--color-accent)]/45 hover:bg-[var(--color-accent)]/[0.08] hover:text-[var(--color-text)]',
  },
  business: {
    border: 'border-[rgba(245,158,11,0.18)]',
    hoverBorder: 'hover:border-[var(--color-secondary)]/40',
    hoverGlow: 'hover:shadow-[0_28px_56px_-32px_rgba(245,158,11,0.4)]',
    pillHover:
      'hover:border-[var(--color-secondary)]/45 hover:bg-[var(--color-secondary)]/[0.08] hover:text-[var(--color-text)]',
  },
}

function SkillPill({ skill, accent }) {
  const a = ACCENTS[accent]
  return (
    <span
      className={`inline-flex rounded-full border border-[var(--color-border)] px-3 py-[7px] text-[13px] font-medium text-[var(--color-text-muted)] transition-colors duration-200 ${a.pillHover}`}
    >
      {skill}
    </span>
  )
}

function SkillCard({ category }) {
  const a = ACCENTS[category.accent]

  return (
    <div
      className={`group flex flex-col rounded-[16px] border ${a.border} bg-[var(--color-surface)] p-8 shadow-[0_1px_2px_rgba(0,0,0,0.4)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 ${a.hoverBorder} ${a.hoverGlow} ${category.span}`}
    >
      <h3 className="text-xl font-bold text-[var(--color-text)]">{category.title}</h3>

      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[var(--color-text-muted)]">
        {category.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li key={skill}>
            <SkillPill skill={skill} accent={category.accent} />
          </li>
        ))}
      </ul>
    </div>
  )
}

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden px-[clamp(1.5rem,6vw,5rem)] py-[clamp(2.5rem,6vw,4.5rem)] scroll-mt-[var(--nav-height)]"
    >
      <div className="relative mx-auto flex max-w-[1300px] flex-col gap-14 sm:gap-16">
        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-[clamp(1.85rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight text-[var(--color-text)]">
            Skills
          </h2>

          <p className="max-w-[650px] text-lg leading-relaxed text-[var(--color-text-muted)] sm:text-xl">
            A combination of technical expertise and business thinking, built
            through hands-on experience and continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-6">
          {SKILL_CATEGORIES.map((category) => (
            <SkillCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
