function Leadership() {
  return (
    <section
      id="leadership"
      className="bg-[var(--navy-deep)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(2.5rem,6vw,4rem)] scroll-mt-[var(--nav-height)]"
    >
      <div className="mx-auto flex max-w-[1360px] flex-col gap-6 sm:gap-7">
        <h2 className="text-xl font-semibold text-[var(--name-warm-white)] sm:text-2xl">
          Leadership &amp; Activities
        </h2>

        <div className="flex flex-col gap-2 border-t border-white/10 pt-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
          <p className="text-base font-semibold text-[var(--name-warm-white)]">
            Lead Programmer
          </p>
          <div className="flex flex-col text-sm text-[var(--body-slate)] sm:items-end sm:text-right">
            <p>FIRST Tech Challenge Robotics Club — Team #12758, Derryfield Binary Bots</p>
            <p>Sep 2020 – Apr 2023</p>
          </div>
        </div>

        <p className="max-w-[68ch] text-sm leading-relaxed text-[var(--body-slate)]">
          Led a team of 6 programmers designing real-time control systems for
          competitive robotics; awarded 2nd Place Control Award at the NH
          State Championship for autonomous software performance.
        </p>
      </div>
    </section>
  )
}

export default Leadership
