// app/page.jsx
import Image from 'next/image';
import Link from 'next/link';
import profileImange from './profile.png'
import About from './about/page';
import Experience from './experience/page';
import Projects from './projects/page';
import Contact from './contact/page';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="profile-container" id="home">
        <Image src={profileImange} alt="Abhijith PN" className="profile-photo" />
        <div className="ttext">
          <p className="intro-text">Hello, I'm</p>
          <h1 className="name">Abhijith PN</h1>
          <h2 className="title">Frontend Developer</h2>
          <div className="buttons">
           <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn outline"> Download CV</a>

            <a href="#contact" className="btn filled">Contact Info</a>
          </div>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Imported Sections */}
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
