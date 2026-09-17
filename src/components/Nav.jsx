import { useEffect, useRef, useState } from 'react'
import './Nav.css'

const LINKS = [
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
]

function scrollToHash(event, href) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
    return
  }

  const target = document.getElementById(href.slice(1))
  if (!target) return

  event.preventDefault()
  target.scrollIntoView()
}

function Nav() {
  const [open, setOpen] = useState(false)
  const [activeHref, setActiveHref] = useState(null)
  const navRef = useRef(null)

  useEffect(() => {
    const sections = LINKS.map((link) => document.getElementById(link.href.slice(1))).filter(
      Boolean,
    )
    if (sections.length === 0) return undefined

    const navHeight = navRef.current?.offsetHeight ?? 0
    const visibleSections = new Set()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.add(entry.target.id)
          } else {
            visibleSections.delete(entry.target.id)
          }
        })

        const current = sections.find((section) => visibleSections.has(section.id))
        setActiveHref(current ? `#${current.id}` : null)
      },
      { rootMargin: `-${navHeight}px 0px -66% 0px`, threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  function handleLinkClick(event, href) {
    scrollToHash(event, href)
    setOpen(false)
  }

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav__inner">
        <a
          href="#top"
          className="nav__mark"
          onClick={(event) => handleLinkClick(event, '#top')}
        >
          Artem Yurovskiy
        </a>

        <div className="nav__right">
          <ul className="nav__links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={link.href === activeHref ? 'is-active' : undefined}
                  aria-current={link.href === activeHref ? 'true' : undefined}
                  onClick={(event) => scrollToHash(event, link.href)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="nav__toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="nav-mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className={`nav__toggle-bar${open ? ' nav__toggle-bar--open' : ''}`} />
          </button>
        </div>
      </div>

      <div id="nav-mobile-menu" className={`nav__mobile${open ? ' nav__mobile--open' : ''}`}>
        <ul className="nav__mobile-list">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={link.href === activeHref ? 'is-active' : undefined}
                aria-current={link.href === activeHref ? 'true' : undefined}
                onClick={(event) => handleLinkClick(event, link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Nav
