import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faGaugeHigh, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import profilePortrait from '../assets/optimized/profile-portrait.avif';
import { caseStudies, experiences, skills } from '../data/portfolio';
import '../styles/MainPage.css';
import CaseStudyCard from './CaseStudyCard';
import DarkModeToggle from './DarkModeToggle';
import SectionTitle from './SectionTitle';

const emailAddress = 'johnalbertpresentacion@gmail.com';
const phoneNumber = '+63 966 768 9427';
const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}&su=Portfolio%20inquiry`;

const capabilities = [
  {
    icon: faLayerGroup,
    eyebrow: 'Architecture',
    title: 'Enterprise backend systems',
    description: 'Java, Spring Boot, and microservice solutions shaped around clear boundaries, operational resilience, and maintainable delivery.',
  },
  {
    icon: faCode,
    eyebrow: 'Integration',
    title: 'APIs & connected platforms',
    description: 'REST APIs, MuleSoft flows, service mappings, and enterprise integrations that keep complex workflows understandable and reliable.',
  },
  {
    icon: faGaugeHigh,
    eyebrow: 'Execution',
    title: 'Modernization & delivery',
    description: 'Hands-on feature delivery, defect resolution, performance work, code review, mentoring, CI/CD, and production support.',
  },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/john-albert-presentacion-852092188/', icon: faLinkedin },
  { label: 'GitHub', href: 'https://github.com/JATPresentacion97', icon: faGithub },
];

const LandingPage = () => (
  <div id="top" className="portfolio-page">
    <a className="skip-link" href="#main-content">Skip to main content</a>

    <nav className="floating-nav" aria-label="Primary navigation">
      <div className="nav-links">
        <a href="#top">Home</a>
        <a href="#work">Work</a>
        <a href="#expertise">Expertise</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </div>
      <DarkModeToggle />
    </nav>

    <main id="main-content" className="site-shell">
      <div className="portfolio-layout">
        <aside className="identity-rail" aria-label="Profile summary">
          <div className="identity-card">
            <div className="identity-art">
              <img src={profilePortrait} alt="John Albert Presentacion" width="640" height="640" />
              <span className="identity-initials" aria-hidden="true">JATP</span>
            </div>
            <div className="identity-copy">
              <p className="availability"><span aria-hidden="true" /> Open to senior engineering opportunities</p>
              <p className="identity-name">John Albert Presentacion</p>
              <p className="identity-handle">アルバート · JATP</p>
              <p>Senior solutions architect and Java backend engineer from the Philippines.</p>
              <div className="social-links">
                {socialLinks.map(({ label, href, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={`${label} (opens in a new tab)`}><FontAwesomeIcon icon={icon} /></a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="content-column">
          <header className="hero-section">
            <p className="hero-kicker">Senior Solutions Architect · Senior Java Backend Engineer</p>
            <h1>Enterprise<span>Engineer</span></h1>
            <p className="hero-lead"><mark>I turn complex systems into dependable products.</mark> From architecture and APIs to integrations and production delivery.</p>
            <p className="hero-current">Currently building telecom systems at <a href="https://www.ncs.co/en-sg/" target="_blank" rel="noopener noreferrer">NCS Group</a></p>
            <div className="hero-actions">
              <a href="#experience">Explore my experience</a>
              <a href={`${import.meta.env.BASE_URL}John_Albert_Presentacion_Resume.pdf`} download>Download résumé</a>
            </div>
          </header>

          <section className="stats-grid" aria-label="Career overview">
            <div><strong>7+</strong><span>Years in engineering</span></div>
            <div><strong>8</strong><span>Career chapters</span></div>
            <div><strong>6</strong><span>Enterprise sectors</span></div>
          </section>

          <section id="expertise" className="content-section">
            <SectionTitle number="01" first="Core" second="expertise" />
            <p className="section-intro">Backend architecture is my center of gravity. I pair it with integration depth, front-end fluency, and the delivery discipline required to ship enterprise systems.</p>
            <div className="skills-marquee" role="group" aria-label={`Core technologies: ${skills.join(', ')}`}>
              <div className="skills-track" aria-hidden="true">
                {[0, 1].map((set) => (
                  <div className="skills-set" key={set}>
                    {skills.map((skill) => <span key={skill}>{skill}<b aria-hidden="true">◆</b></span>)}
                  </div>
                ))}
              </div>
            </div>
            <div className="service-grid">
              {capabilities.map(({ icon, eyebrow, title, description }) => (
                <article key={title} className="service-card">
                  <FontAwesomeIcon icon={icon} aria-hidden="true" />
                  <div><p className="mono-label">{eyebrow}</p><h3>{title}</h3></div>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="work" className="content-section">
            <SectionTitle number="02" first="Selected" second="case studies" />
            <p className="section-intro">Five representative builds, focused on the problem, my contribution, and the result—not just the technology list.</p>
            <div className="case-study-list">
              {caseStudies.map((caseStudy, index) => <CaseStudyCard caseStudy={caseStudy} index={index} key={caseStudy.name} />)}
            </div>
          </section>

          <section id="experience" className="content-section">
            <SectionTitle number="03" first="Career" second="timeline" />
            <p className="section-intro">Seven-plus years delivering enterprise software across telecommunications, insurance, government, logistics, fintech, and banking.</p>
            <div className="experience-timeline">
              {experiences.map((experience, index) => (
                <article className="experience-card" key={`${experience.company}-${experience.period}`}>
                  <div className="experience-marker" aria-hidden="true"><span>{String(experiences.length - index).padStart(2, '0')}</span></div>
                  <div className="experience-meta">
                    <p className="mono-label">{experience.period}</p>
                    <h3>{experience.company}</h3>
                    <p>{experience.location}</p>
                  </div>
                  <div className="experience-details">
                    <p className="experience-project">{experience.project}</p>
                    <h4>{experience.role}</h4>
                    <p className="experience-description">{experience.description}</p>
                    <ul className="technology-list" aria-label={`Technologies used at ${experience.company}`}>
                      {experience.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
            <aside className="education-card" aria-label="Education">
              <p className="mono-label">Education · 2014 — 2019</p>
              <div><h3>Far Eastern University Institute of Technology</h3><p>Bachelor of Science in Computer Science<br />Specialization in Software Engineering</p></div>
            </aside>
          </section>

          <section className="contact-section" id="contact">
            <p className="mono-label">Architecture, backend, or integration challenge?</p>
            <h2>Let's build something dependable.</h2>
            <address className="contact-details">
              <span>Email: <a href={`mailto:${emailAddress}`}>{emailAddress}</a></span>
              <span>Phone: <a href="tel:+639667689427">{phoneNumber}</a></span>
            </address>
            <div className="contact-actions">
              <a href={gmailComposeUrl} target="_blank" rel="noopener noreferrer">Compose in Gmail</a>
              <a href="https://wa.me/639667689427" target="_blank" rel="noopener noreferrer">Message on WhatsApp</a>
              <a href={`${import.meta.env.BASE_URL}John_Albert_Presentacion_Resume.pdf`} download>Download résumé</a>
            </div>
          </section>

          <footer className="site-footer">
            <a href="#top">JATP · Home</a>
            <p>© {new Date().getFullYear()} John Albert T. Presentacion</p>
            <a href="#top">Back to top ↑</a>
          </footer>
        </div>
      </div>
    </main>
  </div>
);

export default LandingPage;
