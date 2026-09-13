import './Header.css'

function Header() {
  return (
    <header className="hero" id="top">
      <div className="hero__glow" aria-hidden="true" />

      <div className="hero__inner">
        <div className="hero__content">
          <div className="hero__eyebrow">
            <span>Hi, I&rsquo;m</span>
            <span className="hero__eyebrow-line" aria-hidden="true" />
          </div>

          <h1 className="hero__name">Artem Yurovskiy</h1>

          <p className="hero__bio">
            I&rsquo;m a senior Computer Science student at Purdue University,
            passionate about building useful products, solving real-world
            problems, and turning ideas into impact. I enjoy working on
            challenging projects, learning new technologies, and exploring
            opportunities at the intersection of tech, business, and
            innovation.
          </p>
        </div>

        <div className="hero__portrait-wrap">
          {/* TODO: replace with Artem's real photo; this is an intentional synthetic placeholder */}
          <div className="hero__portrait" role="img" aria-label="Portrait placeholder for Artem Yurovskiy">
            <svg
              className="hero__portrait-mark"
              viewBox="0 0 200 200"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="100" cy="78" r="34" stroke="currentColor" strokeWidth="2" />
              <path
                d="M40 172c6-38 32-60 60-60s54 22 60 60"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
