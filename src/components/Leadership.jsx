const ACTIVITIES = [
  {
    id: 'ftc-robotics',
    role: 'Lead Programmer',
    organization: 'FIRST Tech Challenge Robotics Club',
    startDate: 'Sep 2020',
    endDate: 'Apr 2023',
    description:
      'Led a team of 6 programmers building real-time robot control systems, winning 2nd Place Control Award at NH States.',
  },
]

function ActivityEntry({ activity }) {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div className="flex items-start gap-4">
          <span
            className="mt-0.5 h-9 w-[2px] shrink-0 rounded-full bg-[var(--color-accent)] sm:h-10"
            aria-hidden="true"
          />
          <div>
            <p className="text-xl font-semibold leading-snug text-[var(--color-text)]">
              {activity.role}
            </p>
            <p className="mt-1 text-base leading-snug text-[var(--color-text-muted)]">
              {activity.organization}
            </p>
          </div>
        </div>

        <p className="pl-[18px] text-sm text-[var(--color-text-muted)] sm:pl-0 sm:pt-1 sm:text-right">
          {activity.startDate} – {activity.endDate}
        </p>
      </div>

      <p className="max-w-[820px] pl-[18px] text-[15px] leading-relaxed text-[var(--color-text-muted)] sm:text-base">
        {activity.description}
      </p>
    </div>
  )
}

function Leadership() {
  return (
    <section
      id="leadership"
      className="px-[clamp(1.5rem,6vw,5rem)] pb-28 pt-[clamp(3rem,6vw,4rem)] scroll-mt-[var(--nav-height)]"
    >
      <div className="mx-auto flex max-w-[1360px] flex-col gap-7">
        <h2 className="text-[clamp(1.85rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight text-[var(--color-text)]">
          Leadership
        </h2>

        <div className="flex flex-col gap-8">
          {ACTIVITIES.map((activity) => (
            <ActivityEntry key={activity.id} activity={activity} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Leadership
