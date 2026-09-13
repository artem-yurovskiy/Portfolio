// Add future entries here once completed, e.g.:
// { name: 'React Native Certification', issuer: '[issuer TBD]', date: '', image: '' },
// { name: 'AI Agentic Development Certification', issuer: '[issuer TBD]', date: '', image: '' },
const CERTIFICATIONS = [
  {
    name: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy (Dr. Angela Yu)',
    detail: '62 hours',
    date: 'Aug 2026',
    image: '/certificates/The Complete Full-Stack Web Development Bootcamp.jpg',
  },
  {
    name: 'Java Programming I',
    issuer: 'University of Helsinki (MOOC.fi), Dept. of Computer Science',
    date: '',
    image: '/certificates/Java Programming I.png',
  },
  {
    name: 'Java Programming II',
    issuer: 'University of Helsinki (MOOC.fi), Dept. of Computer Science',
    date: '',
    image: '/certificates/Java Programming II.png',
  },
]

function Certifications() {
  return (
    <section
      id="certifications"
      className="bg-[var(--navy-deep)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(2.5rem,6vw,4rem)] scroll-mt-[var(--nav-height)]"
    >
      <div className="mx-auto flex max-w-[1360px] flex-col gap-6 sm:gap-7">
        <h2 className="text-xl font-semibold text-[var(--name-warm-white)] sm:text-2xl">
          Certifications
        </h2>

        <div className="flex flex-col divide-y divide-white/10 border-t border-white/10">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.name} className="flex items-start gap-4 py-4 sm:items-center sm:gap-6 sm:py-5">
              <a
                href={cert.image}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 overflow-hidden rounded-md border border-white/10 transition-colors hover:border-white/30"
                aria-label={`View ${cert.name} certificate`}
              >
                <img
                  src={cert.image}
                  alt={`${cert.name} certificate`}
                  className="h-16 w-24 object-cover sm:h-20 sm:w-28"
                />
              </a>

              <div className="flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                <div>
                  <p className="text-base font-semibold text-[var(--name-warm-white)]">
                    {cert.name}
                  </p>
                  <p className="text-sm text-[var(--body-slate)]">
                    {cert.issuer}
                    {cert.detail ? ` · ${cert.detail}` : ''}
                  </p>
                </div>
                {cert.date && (
                  <p className="text-sm text-[var(--body-slate)] sm:text-right">{cert.date}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
