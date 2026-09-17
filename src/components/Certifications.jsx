import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowRight, X } from 'lucide-react'

const CERTIFICATIONS = [
  {
    id: 'java-programming-i',
    title: 'Java Programming I',
    issuer: 'University of Helsinki (MOOC.fi), Dept. of Computer Science',
    detail: '',
    date: 'June 2022',
    image: '/certificates/Java Programming I.png',
  },
  {
    id: 'java-programming-ii',
    title: 'Java Programming II',
    issuer: 'University of Helsinki (MOOC.fi), Dept. of Computer Science',
    detail: '',
    date: 'July 2022',
    image: '/certificates/Java Programming II.png',
  },
  {
    id: 'full-stack-web-development-bootcamp',
    title: 'The Complete Full-Stack Web Development Bootcamp',
    issuer: 'Udemy (Dr. Angela Yu)',
    detail: '62 hours',
    date: 'August 2026',
    image: '/certificates/The Complete Full-Stack Web Development Bootcamp.jpg',
  },
]

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

function CertificationCard({ certification, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(certification)}
      aria-haspopup="dialog"
      className="group flex flex-col overflow-hidden rounded-[16px] border border-[var(--color-border)] bg-[var(--color-surface)] text-left shadow-[0_1px_2px_rgba(0,0,0,0.4)] transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-[3px] hover:border-[var(--color-accent)]/45 hover:shadow-[0_24px_48px_-28px_rgba(59,130,246,0.45)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-4"
    >
      <div className="flex h-[240px] w-full items-center justify-center overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface-strong)]">
        <img
          src={certification.image}
          alt={`${certification.title} certificate`}
          loading="lazy"
          className="max-h-full max-w-full object-contain transition-[filter] duration-200 group-hover:brightness-[1.04]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-7">
        <h3 className="text-xl font-bold leading-snug text-[var(--color-text)]">
          {certification.title}
        </h3>

        {(certification.issuer || certification.detail) && (
          <p className="text-sm text-[var(--color-text-muted)]">
            {certification.issuer}
            {certification.issuer && certification.detail ? ' · ' : ''}
            {certification.detail}
          </p>
        )}

        <div className="mt-auto flex flex-col gap-3 pt-4">
          {certification.date && (
            <p className="text-sm text-[var(--color-text-muted)]">Received {certification.date}</p>
          )}

          <span className="flex items-center gap-1.5 text-sm font-medium text-[var(--color-accent)]">
            View Certificate
            <ArrowRight
              className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </span>
        </div>
      </div>
    </button>
  )
}

function CertificateModal({ certification, onClose }) {
  const [visible, setVisible] = useState(false)
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)

  const handleClose = useCallback(() => {
    setVisible(false)
    window.setTimeout(onClose, 200)
  }, [onClose])

  useEffect(() => {
    const raf = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(raf)
  }, [])

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    document.body.classList.add('modal-open')
    closeButtonRef.current?.focus()
    return () => {
      document.body.style.overflow = previousOverflow
      document.body.classList.remove('modal-open')
    }
  }, [])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        handleClose()
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = Array.from(
        dialogRef.current.querySelectorAll(FOCUSABLE_SELECTOR),
      )
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [handleClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      role="presentation"
    >
      <div
        className={`fixed inset-0 bg-[var(--color-bg)]/90 transition-opacity duration-200 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={`${certification.title} certificate`}
        className={`relative flex max-h-[90vh] max-w-[90vw] flex-col items-center transition-[opacity,transform] duration-200 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={handleClose}
          aria-label="Close certificate"
          className="absolute -top-4 -right-4 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-strong)] bg-[var(--color-surface)] text-[var(--color-text-muted)] transition-colors hover:border-[var(--color-accent)]/45 hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--color-accent)] focus-visible:outline-offset-2 sm:-top-5 sm:-right-5"
        >
          <X className="h-5 w-5" aria-hidden="true" />
        </button>

        <img
          src={certification.image}
          alt={`${certification.title} certificate`}
          className="max-h-[85vh] max-w-[90vw] rounded-[8px] object-contain shadow-[0_40px_100px_-32px_rgba(59,130,246,0.35)]"
        />
      </div>
    </div>
  )
}

function Certifications() {
  const [activeCertification, setActiveCertification] = useState(null)
  const triggerRef = useRef(null)

  const handleOpen = useCallback((certification) => {
    triggerRef.current = document.activeElement
    setActiveCertification(certification)
  }, [])

  const handleClose = useCallback(() => {
    setActiveCertification(null)
    if (triggerRef.current instanceof HTMLElement) triggerRef.current.focus()
  }, [])

  return (
    <section
      id="certifications"
      className="relative overflow-hidden px-[clamp(1.5rem,6vw,5rem)] py-[clamp(2.5rem,6vw,4.5rem)] scroll-mt-[var(--nav-height)]"
    >
      <div className="relative mx-auto flex max-w-[1300px] flex-col gap-14 sm:gap-16">
        <div className="flex flex-col gap-4 sm:gap-5">
          <h2 className="text-[clamp(1.85rem,3.5vw,2.5rem)] font-bold leading-tight tracking-tight text-[var(--color-text)]">
            Certifications
          </h2>

          <p className="max-w-[650px] text-lg leading-relaxed text-[var(--color-text-muted)] sm:text-xl">
            Certifications that complement my academic and hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3">
          {CERTIFICATIONS.map((certification) => (
            <CertificationCard
              key={certification.id}
              certification={certification}
              onOpen={handleOpen}
            />
          ))}
        </div>
      </div>

      {activeCertification && (
        <CertificateModal certification={activeCertification} onClose={handleClose} />
      )}
    </section>
  )
}

export default Certifications
