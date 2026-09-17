import { Briefcase, Code2, Layers, Lightbulb, Wrench } from 'lucide-react'

const SKILL_CATEGORIES = [
  {
    id: 'languages',
    title: 'Languages',
    description: 'Core programming languages I use to build and ship software.',
    icon: Code2,
    accent: 'indigo',
    span: 'lg:col-span-2',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C', 'HTML/CSS', 'SQL', 'C++'],
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    description:
      'Modern frameworks and libraries I use to build scalable, performant applications.',
    icon: Layers,
    accent: 'blue',
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
    icon: Wrench,
    accent: 'cyan',
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
    icon: Lightbulb,
    accent: 'violet',
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
    icon: Briefcase,
    accent: 'teal',
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
  indigo: {
    iconText: 'text-[#8b9dfb]',
    iconBg: 'bg-[#8b9dfb]/10',
    iconBorder: 'border-[#8b9dfb]/25',
    hoverBorder: 'hover:border-[#8b9dfb]/35',
    hoverGlow: 'hover:shadow-[0_0_60px_-30px_rgba(139,157,251,0.5)]',
  },
  blue: {
    iconText: 'text-[#7EAFFF]',
    iconBg: 'bg-[#7EAFFF]/10',
    iconBorder: 'border-[#7EAFFF]/25',
    hoverBorder: 'hover:border-[#7EAFFF]/35',
    hoverGlow: 'hover:shadow-[0_0_60px_-30px_rgba(126,175,255,0.5)]',
  },
  cyan: {
    iconText: 'text-[#5fc9f2]',
    iconBg: 'bg-[#5fc9f2]/10',
    iconBorder: 'border-[#5fc9f2]/25',
    hoverBorder: 'hover:border-[#5fc9f2]/35',
    hoverGlow: 'hover:shadow-[0_0_60px_-30px_rgba(95,201,242,0.5)]',
  },
  violet: {
    iconText: 'text-[#c79bfa]',
    iconBg: 'bg-[#c79bfa]/10',
    iconBorder: 'border-[#c79bfa]/25',
    hoverBorder: 'hover:border-[#c79bfa]/35',
    hoverGlow: 'hover:shadow-[0_0_60px_-30px_rgba(199,155,250,0.5)]',
  },
  teal: {
    iconText: 'text-[#4fd1c0]',
    iconBg: 'bg-[#4fd1c0]/10',
    iconBorder: 'border-[#4fd1c0]/25',
    hoverBorder: 'hover:border-[#4fd1c0]/35',
    hoverGlow: 'hover:shadow-[0_0_60px_-30px_rgba(79,209,192,0.45)]',
  },
}

function SkillPill({ skill }) {
  return (
    <span className="inline-flex rounded-full border border-[rgba(100,150,220,0.25)] px-3 py-[7px] text-[13px] font-medium text-[#A8B7D0] transition-colors duration-200 hover:border-[#7EAFFF]/40 hover:bg-[#7EAFFF]/[0.06] hover:text-[#F5F7FA]">
      {skill}
    </span>
  )
}

function SkillCard({ category }) {
  const a = ACCENTS[category.accent]
  const Icon = category.icon

  return (
    <div
      className={`group flex flex-col rounded-[16px] border border-[rgba(100,150,220,0.25)] bg-[#0D1624] p-8 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 ${a.hoverBorder} ${a.hoverGlow} ${category.span}`}
    >
      <span
        className={`flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-[12px] border ${a.iconBorder} ${a.iconBg}`}
      >
        <Icon className={`h-6 w-6 ${a.iconText}`} strokeWidth={1.5} aria-hidden="true" />
      </span>

      <h3 className="mt-5 text-xl font-bold text-[#F5F7FA]">{category.title}</h3>

      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[#A8B7D0]">
        {category.description}
      </p>

      <ul className="mt-6 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li key={skill}>
            <SkillPill skill={skill} />
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
      className="relative overflow-hidden bg-[var(--navy-deep)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(4rem,10vw,9rem)] scroll-mt-[var(--nav-height)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(90,120,190,0.09),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[1300px] flex-col gap-14 sm:gap-16">
        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-[clamp(1.85rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight text-[var(--name-warm-white)]">
            Skills
          </h2>

          <p className="max-w-[650px] text-lg leading-relaxed text-[var(--body-slate)] sm:text-xl">
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
