import { useState } from 'react'
import './Nav.css'

// Add a new { href: '#section-id', label: 'Label' } entry here as new sections ship.
const LINKS = [
  { href: '#education', label: 'Education' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#contact', label: 'Contact' },
]

const RESUME_PATH = '/Artem_Yurovskiy_Resume.pdf'

function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__mark" onClick={() => setOpen(false)}>
          Artem Yurovskiy
        </a>

        <div className="nav__right">
          <ul className="nav__links">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <a href={RESUME_PATH} download="Artem_Yurovskiy_Resume.pdf" className="nav__resume">
            Resume
          </a>

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
              <a href={link.href} onClick={() => setOpen(false)}>
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
