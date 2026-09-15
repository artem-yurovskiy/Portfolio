const SKILL_GROUPS = [
  {
    title: 'Languages',
    items: ['Python', 'JavaScript', 'TypeScript', 'Java', 'C', 'C++', 'SQL', 'HTML/CSS'],
  },
  {
    title: 'Product & Business',
    items: [
      'Customer Discovery',
      'Market Research',
      'Financial Modeling',
      'Competitive Analysis',
      'Agile/Scrum',
    ],
  },
  {
    title: 'Frameworks & Tools',
    items: [
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
      'Git/GitHub',
      'Supabase',
      'Stripe API',
      'Vercel',
      'Expo',
      'JUnit',
      'Postgres',
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
    title: 'Concepts & Practices',
    items: [
      'Socket Programming',
      'Multithreading',
      'RESTful APIs',
      'Full-Stack Development',
      'Database Schema Design',
      'Payment Systems Integration',
      'Web Accessibility (WCAG)',
    ],
  },
]

function SkillGroup({ title, items }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-[var(--name-warm-white)] sm:text-xl">{title}</h3>
      <ul className="mt-5 flex flex-wrap gap-2.5">
        {items.map((item) => (
          <li key={item}>
            <span className="inline-flex rounded-full border border-white/15 px-3.5 py-1.5 text-sm text-[var(--body-slate)]">
              {item}
            </span>
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
      className="bg-[var(--navy-mid)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] scroll-mt-[var(--nav-height)]"
    >
      <div className="mx-auto flex max-w-[1360px] flex-col gap-14 sm:gap-16">
        <h2 className="text-[clamp(2rem,3.6vw,2.75rem)] font-bold leading-tight tracking-tight text-[var(--name-warm-white)]">
          Skills
        </h2>

        <div className="grid grid-cols-1 gap-x-16 gap-y-12 border-t border-white/10 pt-10 sm:pt-12 md:grid-cols-2">
          {SKILL_GROUPS.map((group) => (
            <SkillGroup key={group.title} title={group.title} items={group.items} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
