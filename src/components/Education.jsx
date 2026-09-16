import { Award, Briefcase, Lightbulb } from 'lucide-react'

const TECHNICAL_COURSES = [
  'Software Engineering',
  'Data Structures & Algorithms',
  'Software Testing',
  'Systems Programming',
  'Object-Oriented Programming',
  'Computer Security',
  'Operating Systems',
  'Computer Architecture',
  'Analysis of Algorithms',
  'Programming in C',
]

const BUSINESS_COURSES = [
  'Entrepreneurship & Innovation',
  'Marketing Management for New Ventures',
  'Financial Management',
  'Managerial Accounting',
  'Microeconomics',
]

const ACCENTS = {
  technical: {
    text: 'text-[#8b9dfb]',
    border: 'border-[#8b9dfb]/20',
    hoverBorder: 'hover:border-[#8b9dfb]/40',
    glow: 'shadow-[0_0_60px_-32px_rgba(139,157,251,0.5)]',
    hoverGlow: 'hover:shadow-[0_0_70px_-26px_rgba(139,157,251,0.6)]',
    pillHover:
      'hover:border-[#8b9dfb]/40 hover:bg-[#8b9dfb]/[0.07] hover:text-[#e6eaff]',
  },
  business: {
    text: 'text-[#4fd1c0]',
    border: 'border-[#4fd1c0]/20',
    hoverBorder: 'hover:border-[#4fd1c0]/40',
    glow: 'shadow-[0_0_60px_-32px_rgba(79,209,192,0.45)]',
    hoverGlow: 'hover:shadow-[0_0_70px_-26px_rgba(79,209,192,0.55)]',
    pillHover:
      'hover:border-[#4fd1c0]/40 hover:bg-[#4fd1c0]/[0.07] hover:text-[#e1faf5]',
  },
}

function CourseworkPanel({ title, description, courses, accent, className = '' }) {
  const a = ACCENTS[accent]

  return (
    <div
      className={`w-full rounded-[20px] border ${a.border} bg-[var(--navy-panel)] p-8 transition-[transform,box-shadow,border-color] duration-300 ${a.glow} hover:-translate-y-0.5 ${a.hoverBorder} ${a.hoverGlow} sm:p-10 ${className}`}
    >
      <h4 className={`text-sm font-medium uppercase tracking-[0.3em] ${a.text}`}>
        {title}
      </h4>
      <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-[var(--body-slate)]">
        {description}
      </p>
      <ul className="mt-7 flex flex-wrap gap-2.5">
        {courses.map((course) => (
          <li key={course}>
            <span
              className={`inline-flex rounded-full border border-white/15 px-3.5 py-1.5 text-sm font-medium text-[var(--body-slate)] transition-colors duration-200 ${a.pillHover}`}
            >
              {course}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[var(--navy-deep)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] scroll-mt-[var(--nav-height)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(90,120,190,0.09),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[1360px] flex-col gap-14 sm:gap-16">
        <div className="flex flex-col gap-8 sm:gap-10">
          <div className="flex items-center gap-[0.85rem]">
            <span className="text-[0.8rem] font-light uppercase tracking-[0.28em] text-[var(--body-slate)]">
              Education
            </span>
            <span
              className="h-px w-40 shrink-0 bg-gradient-to-r from-[var(--portrait-border)] to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="flex items-center gap-4 sm:gap-5">
            <img
              src="/Purdue_Logo.png"
              alt=""
              aria-hidden="true"
              className="h-9 w-auto opacity-90 sm:h-11"
            />
            <h2 className="text-[clamp(2.5rem,5.5vw,4rem)] font-bold leading-tight tracking-tight text-[var(--name-warm-white)]">
              Purdue University
            </h2>
          </div>

          <div className="flex flex-col gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-[1.5rem] font-bold leading-tight tracking-[-0.01em] text-[var(--name-warm-white)] sm:text-[1.75rem]">
                B.S. in Computer Science
              </p>
              <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-base font-medium text-[var(--body-slate)]">
                <span className="text-[var(--name-warm-white)]">GPA 3.53</span>
                <span className="text-[var(--portrait-icon)]" aria-hidden="true">
                  &middot;
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Award
                    className="h-4 w-4 text-[var(--portrait-icon)]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  Dean&rsquo;s List, Semester Honors
                </span>
              </p>
            </div>
            <div className="flex flex-col gap-3 text-base font-medium text-[var(--body-slate)] sm:flex-row sm:items-center sm:gap-6">
              <span className="inline-flex items-center gap-2">
                <Briefcase
                  className="h-4 w-4 text-[var(--portrait-icon)]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                Minor in Management
              </span>
              <span className="inline-flex items-center gap-2">
                <Lightbulb
                  className="h-4 w-4 text-[var(--portrait-icon)]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                Certificate in Entrepreneurship &amp;&nbsp;Innovation
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-white/10 pt-10 sm:pt-12 md:flex-row md:items-start">
          <CourseworkPanel
            title="Technical Coursework"
            description="Core courses that shaped my technical foundation and problem-solving skills."
            courses={TECHNICAL_COURSES}
            accent="technical"
            className="md:w-[58%]"
          />
          <CourseworkPanel
            title={'Business & Entrepreneurship'}
            description="Business and entrepreneurial coursework complementing my technical background."
            courses={BUSINESS_COURSES}
            accent="business"
            className="md:w-[42%]"
          />
        </div>
      </div>
    </section>
  )
}

export default Education
