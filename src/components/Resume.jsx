import { useEffect, useState } from 'react'
import { Download, Loader2 } from 'lucide-react'
import { DEFAULT_RESUME, RESUMES } from '../data/resumes'

const LOADING_TIMEOUT_MS = 3500

function ResumeSelector({ selectedResume, onSelect }) {
  return (
    <div
      role="group"
      aria-label="Choose which resume to view"
      className="inline-flex w-full gap-1 rounded-full border border-[rgba(100,150,220,0.22)] bg-[#0D1624] p-1.5 sm:w-auto sm:min-w-[420px]"
    >
      {Object.entries(RESUMES).map(([key, resume]) => {
        const isActive = key === selectedResume
        return (
          <button
            key={key}
            type="button"
            aria-pressed={isActive}
            onClick={() => onSelect(key)}
            className={`flex-1 rounded-full px-4 py-3 text-sm font-medium transition-colors duration-200 sm:text-[0.9rem] ${
              isActive
                ? 'bg-[#7EAFFF]/15 text-[#F5F7FA]'
                : 'text-[#A8B7D0] hover:text-[#F5F7FA]'
            }`}
          >
            {resume.label}
          </button>
        )
      })}
    </div>
  )
}

function PdfFrame({ resume }) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  // Some browsers never fire `load` for an embedded PDF, so don't let the
  // spinner hide a resume that actually rendered underneath it.
  useEffect(() => {
    const timeout = window.setTimeout(() => setIsLoading(false), LOADING_TIMEOUT_MS)
    return () => window.clearTimeout(timeout)
  }, [])

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-[rgba(100,150,220,0.22)] bg-[#0D1624] shadow-[0_0_60px_-30px_rgba(126,175,255,0.35)]"
      style={{ height: 'clamp(480px, 80vh, 1100px)' }}
    >
      {!hasError && (
        <iframe
          src={resume.path}
          title={`${resume.label} resume`}
          className="absolute inset-0 h-full w-full motion-reduce:transition-none"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false)
            setHasError(true)
          }}
        />
      )}

      {isLoading && !hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-[#0D1624] text-[#A8B7D0]">
          <Loader2 className="h-6 w-6 animate-spin" aria-hidden="true" />
          <span className="text-sm">Loading resume…</span>
        </div>
      )}

      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0D1624] px-6 text-center text-[#A8B7D0]">
          <p className="text-base text-[#F5F7FA]">Having trouble viewing the resume?</p>
          <a
            href={resume.path}
            download={resume.fileName}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-[var(--name-warm-white)] transition-colors duration-200 hover:border-[#7EAFFF]/40"
          >
            Download the PDF instead
          </a>
        </div>
      )}
    </div>
  )
}

function ResumeViewer({ resume }) {
  return (
    <div className="w-full">
      <PdfFrame key={resume.path} resume={resume} />
    </div>
  )
}

function Resume() {
  const [selectedResume, setSelectedResume] = useState(DEFAULT_RESUME)
  const currentResume = RESUMES[selectedResume]

  return (
    <section
      id="resume"
      className="bg-[var(--navy-mid)] px-[clamp(1.5rem,6vw,5rem)] py-[clamp(3rem,8vw,6rem)] scroll-mt-[var(--nav-height)]"
    >
      <div className="mx-auto flex w-full max-w-[900px] flex-col items-center gap-8 text-center sm:gap-10">
        <h2 className="text-[clamp(1.85rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight text-[var(--name-warm-white)]">
          Resume
        </h2>

        <p className="max-w-[560px] text-base leading-relaxed text-[var(--body-slate)] sm:text-lg">
          I tailor my resume depending on the type of role — pick whichever
          fits what you&rsquo;re looking for.
        </p>

        <div className="flex w-full flex-col items-center gap-5">
          <ResumeSelector selectedResume={selectedResume} onSelect={setSelectedResume} />

          <a
            href={currentResume.path}
            download={currentResume.fileName}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--name-warm-white)] px-6 py-3 text-sm font-semibold text-[var(--navy-deep)] transition-[opacity,transform] duration-200 hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--portrait-border)] focus-visible:outline-offset-4 sm:w-auto"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download Resume
          </a>
        </div>

        <ResumeViewer resume={currentResume} />
      </div>
    </section>
  )
}

export default Resume
