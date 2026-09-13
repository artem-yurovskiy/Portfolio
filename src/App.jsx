import Nav from './components/Nav'
import Header from './components/Header'
import Education from './components/Education'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Resume from './components/Resume'
import Leadership from './components/Leadership'
import Contact from './components/Contact'
import './App.css'

function App() {
  return (
    <main className="app">
      <Nav />
      <Header />
      <Education />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Resume />
      <Leadership />
      <Contact />
    </main>
  )
}

export default App
