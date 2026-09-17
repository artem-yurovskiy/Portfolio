import { Award, Briefcase, Calendar, Lightbulb } from "lucide-react";

const TECHNICAL_COURSES = [
  "Software Engineering",
  "Data Structures & Algorithms",
  "Software Testing",
  "Systems Programming",
  "Object-Oriented Programming",
  "Computer Security",
  "Operating Systems",
  "Computer Architecture",
  "Analysis of Algorithms",
  "Programming in C",
];

const BUSINESS_COURSES = [
  "Entrepreneurship & Innovation",
  "Marketing Management for New Ventures",
  "Financial Management",
  "Managerial Accounting",
  "Microeconomics",
];

const ACCENTS = {
  technical: {
    text: "text-[var(--color-accent)]",
    border: "border-[var(--color-border)]",
    hoverBorder: "hover:border-[var(--color-border-strong)]",
    glow: "shadow-[0_1px_2px_rgba(0,0,0,0.4)]",
    hoverGlow: "hover:shadow-[0_28px_56px_-32px_rgba(59,130,246,0.45)]",
    pillHover:
      "hover:border-[var(--color-accent)]/45 hover:bg-[var(--color-accent)]/[0.08] hover:text-[var(--color-text)]",
  },
  business: {
    text: "text-[var(--color-secondary)]",
    border: "border-[rgba(245,158,11,0.18)]",
    hoverBorder: "hover:border-[rgba(245,158,11,0.4)]",
    glow: "shadow-[0_1px_2px_rgba(0,0,0,0.4)]",
    hoverGlow: "hover:shadow-[0_28px_56px_-32px_rgba(245,158,11,0.4)]",
    pillHover:
      "hover:border-[var(--color-secondary)]/45 hover:bg-[var(--color-secondary)]/[0.08] hover:text-[var(--color-text)]",
  },
};

function CourseworkPanel({
  title,
  description,
  courses,
  accent,
  className = "",
}) {
  const a = ACCENTS[accent];

  return (
    <div
      className={`w-full rounded-[20px] border ${a.border} bg-[var(--color-surface)] p-8 transition-[transform,box-shadow,border-color] duration-300 ${a.glow} hover:-translate-y-1 ${a.hoverBorder} ${a.hoverGlow} sm:p-10 ${className}`}
    >
      <h4
        className={`text-sm font-medium uppercase tracking-[0.3em] ${a.text}`}
      >
        {title}
      </h4>
      <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-[var(--color-text-muted)]">
        {description}
      </p>
      <ul className="mt-7 flex flex-wrap gap-2.5">
        {courses.map((course) => (
          <li key={course}>
            <span
              className={`inline-flex rounded-full border border-[var(--color-border)] px-3.5 py-1.5 text-sm font-medium text-[var(--color-text-muted)] transition-colors duration-200 ${a.pillHover}`}
            >
              {course}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden px-[clamp(1.5rem,6vw,5rem)] py-[clamp(2.25rem,5vw,3.75rem)] scroll-mt-[var(--nav-height)]"
    >
      <div className="relative mx-auto flex max-w-[1360px] flex-col gap-8 sm:gap-10">
        <div className="flex flex-col gap-8 sm:gap-10">
          <div className="flex flex-col gap-6 sm:gap-8">
            <h2 className="text-[clamp(1.85rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight text-[var(--color-text)]">
              Education
            </h2>

            <div className="flex items-center gap-3 sm:gap-4">
              <img
                src="/Purdue_Logo.png"
                alt=""
                aria-hidden="true"
                className="h-7 w-auto opacity-90 sm:h-9"
              />
              <h3 className="text-[clamp(1.5rem,3vw,2rem)] font-bold leading-tight tracking-tight text-[var(--color-text)]">
                Purdue University
              </h3>
            </div>
          </div>

          <div className="flex flex-col gap-5 border-t border-[var(--color-border)] pt-8 xl:flex-row xl:items-start xl:justify-between xl:gap-10">
            <div className="flex flex-col gap-2">
              <p className="text-[1.5rem] font-bold leading-tight tracking-[-0.01em] text-[var(--color-text)] sm:text-[1.75rem]">
                B.S. in Computer Science
              </p>
              <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-base font-medium text-[var(--color-text-muted)]">
                <span className="text-[var(--color-text)]">GPA 3.53</span>
                <span className="text-[var(--color-accent)]" aria-hidden="true">
                  &middot;
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Award
                    className="h-4 w-4 text-[var(--color-accent)]"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  Dean&rsquo;s List, Semester Honors
                </span>
              </p>
              <span className="mt-1 inline-flex items-center gap-2 text-base font-medium text-[var(--color-text-muted)]">
                <Calendar
                  className="h-4 w-4 text-[var(--color-accent)]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                Expected Graduation: May 2028
              </span>
            </div>
            <div className="flex flex-col gap-2.5 text-base font-medium text-[var(--color-text-muted)]">
              <span className="inline-flex items-center gap-2">
                <Briefcase
                  className="h-4 w-4 text-[var(--color-secondary)]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                Minor in Management
              </span>
              <span className="inline-flex items-center gap-2">
                <Lightbulb
                  className="h-4 w-4 text-[var(--color-secondary)]"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                Certificate in Entrepreneurship &amp;&nbsp;Innovation
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-[var(--color-border)] pt-6 sm:pt-8 md:flex-row md:items-start">
          <CourseworkPanel
            title="Technical Coursework"
            description="Core courses that shaped my technical foundation and problem-solving skills."
            courses={TECHNICAL_COURSES}
            accent="technical"
            className="md:w-[58%]"
          />
          <CourseworkPanel
            title="Business & Entrepreneurship"
            description="Business and entrepreneurial coursework complementing my technical background."
            courses={BUSINESS_COURSES}
            accent="business"
            className="md:w-[42%]"
          />
        </div>
      </div>
    </section>
  );
}

export default Education;
