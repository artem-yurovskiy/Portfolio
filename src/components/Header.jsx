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
            I am a senior at Purdue University studying Computer Science with
            a concentration in Software Engineering, a minor in Management,
            and a certificate in Entrepreneurship &amp; Innovation. I like
            building things end-to-end, from the database up through the
            interface, and I&rsquo;m especially drawn to work that blends
            technical depth with business thinking.
          </p>
        </div>

        <div className="hero__portrait-wrap">
          <div className="hero__portrait">
            <img
              src="/Headshot.jpg"
              alt="Portrait of Artem Yurovskiy"
              className="hero__portrait-img"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
