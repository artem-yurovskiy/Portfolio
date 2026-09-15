const CS_COURSES = [
  'Object-Oriented Programming',
  'Computer Architecture',
  'Data Structures & Algorithms',
  'Systems Programming',
  'Operating Systems',
  'Software Testing',
  'Software Engineering',
  'Intro to Analysis of Algorithms',
]

const BUSINESS_COURSES = [
  'Intro to Entrepreneurship & Innovation',
  'Marketing Management for New Ventures',
  'Intro to Financial Management',
  'Managerial Accounting',
  'Microeconomics',
]

function CourseList({ title, courses }) {
  return (
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-[#f5f6f8] sm:text-xl">{title}</h3>
      <ul className="mt-5 flex flex-col gap-3">
        {courses.map((course) => (
          <li key={course} className="flex items-baseline gap-3 text-[#a6aebb]">
            <span
              className="h-px w-4 shrink-0 -translate-y-[0.35em] bg-[#94a3b8]/40"
              aria-hidden="true"
            />
            <span className="text-[1.0625rem] leading-relaxed">{course}</span>
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
      className="relative overflow-hidden bg-[#080d16] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] scroll-mt-[var(--nav-height)]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(90,120,190,0.09),transparent_65%)]"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-[1360px] flex-col gap-14 sm:gap-16">
        <h2 className="text-[clamp(2rem,3.6vw,2.75rem)] font-bold leading-tight tracking-tight text-[#f5f6f8]">
          Education
        </h2>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 sm:pt-10">
          <p className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-bold leading-tight tracking-[-0.02em] text-[#f5f6f8]">
            B.S. in Computer Science
          </p>
          <div className="flex flex-col gap-1.5 text-base text-[#a6aebb] sm:items-end sm:text-right">
            <p>Minor in Management</p>
            <p>Certificate in Entrepreneurship &amp; Innovation</p>
          </div>
        </div>

        <div className="flex flex-col gap-10 border-t border-white/10 pt-10 sm:flex-row sm:gap-16 sm:pt-12">
          <CourseList title="Computer Science" courses={CS_COURSES} />
          <div className="hidden w-px self-stretch bg-white/10 sm:block" aria-hidden="true" />
          <CourseList title="Business & Entrepreneurship" courses={BUSINESS_COURSES} />
        </div>
      </div>
    </section>
  )
}

export default Education
