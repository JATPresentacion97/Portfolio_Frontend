import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MainPage.css';
import DarkModeToggle from './DarkModeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCode, faGaugeHigh, faLayerGroup, faSkull } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import corenet from '../assets/ProfessionalShowcaseAssets/CoreNet.jpeg';
import encova from '../assets/ProfessionalShowcaseAssets/Encova.jpeg';
import entrego from '../assets/ProfessionalShowcaseAssets/Entrego.jpeg';
import gcrypto from '../assets/ProfessionalShowcaseAssets/Gcrypto.jpeg';
import manulife from '../assets/ProfessionalShowcaseAssets/Manulife.jpeg';
import metrobank from '../assets/ProfessionalShowcaseAssets/MetroBank.jpeg';
import AccountServiceAPI from '../assets/PersonalShowcaseAssets/AccountServiceAPI.jpeg';
import BlogAPI from '../assets/PersonalShowcaseAssets/BlogAPI.jpeg';
import EcommerceManagementAPI from '../assets/PersonalShowcaseAssets/EcommerceManagementAPI.jpeg';
import PatientRecordManagementAPI from '../assets/PersonalShowcaseAssets/PatientRecordManagementAPI.jpeg';
import PatientRecordManagementFrontend from '../assets/PersonalShowcaseAssets/PatientRecordManagementFrontend.jpeg';
import PortfolioFrontend from '../assets/PersonalShowcaseAssets/PorfolioFrontend.jpeg';
import SmartParkingAPI from '../assets/PersonalShowcaseAssets/SmartParkingAPI.jpeg';
import TaskManagementAPI from '../assets/PersonalShowcaseAssets/TaskManagementAPI.jpeg';
import WalletManagementAPI from '../assets/PersonalShowcaseAssets/WalletManagementAPI.jpeg';
import WeatherAPI from '../assets/PersonalShowcaseAssets/WeatherAPI.jpeg';

type Project = {
  name: string;
  image: string;
  url: string;
  category: string;
  description: string;
};

const professionalProjects: Project[] = [
  { name: 'CoreNet', image: corenet, url: 'https://www.corenet.gov.sg/general/e-info.aspx', category: 'Government platform', description: 'A professional delivery supporting digital services and complex public-sector workflows.' },
  { name: 'Encova Insurance', image: encova, url: 'https://www.encova.com/', category: 'Insurance technology', description: 'Customer-facing insurance experiences built for clarity, resilience, and long-term maintainability.' },
  { name: 'Entrego', image: entrego, url: 'https://trackmypackage.net/c/entrego-tracking', category: 'Logistics', description: 'Digital logistics work focused on reliable flows and a smooth customer experience.' },
  { name: 'GCrypto', image: gcrypto, url: 'https://new.gcash.com/', category: 'Fintech', description: 'Product engineering for secure, high-traffic financial technology experiences.' },
  { name: 'Manulife', image: manulife, url: 'https://www.manulife.com.ph/', category: 'Financial services', description: 'Scalable customer experiences for a multi-market financial services organization.' },
  { name: 'Metrobank', image: metrobank, url: 'https://www.metrobank.com.ph/services/mb-app', category: 'Digital banking', description: 'Modern banking experiences with an emphasis on usability, performance, and trust.' },
];

const personalProjects: Project[] = [
  { name: 'Patient Records', image: PatientRecordManagementFrontend, url: 'https://github.com/JATPresentacion97/PatientRecordManagementSystem-Frontend', category: 'React application', description: 'A front-end for managing patient information and day-to-day clinical workflows.' },
  { name: 'Portfolio Frontend', image: PortfolioFrontend, url: 'https://github.com/JATPresentacion97/Portfolio_Frontend', category: 'React · TypeScript', description: 'The source for this responsive portfolio and its evolving design system.' },
  { name: 'Weather API', image: WeatherAPI, url: 'https://github.com/JATPresentacion97/Weather_API', category: 'Backend API', description: 'A focused service for retrieving and presenting useful weather data.' },
  { name: 'Blog API', image: BlogAPI, url: 'https://github.com/JATPresentacion97/Blog_Management_API', category: 'Spring Boot API', description: 'Content management endpoints for posts, authors, and publishing workflows.' },
  { name: 'Task Management API', image: TaskManagementAPI, url: 'https://github.com/JATPresentacion97/Task_Management_API', category: 'Backend API', description: 'Structured task, status, and assignment management for productive teams.' },
  { name: 'Ecommerce API', image: EcommerceManagementAPI, url: 'https://github.com/JATPresentacion97/Ecommerce_Management_API', category: 'Commerce platform', description: 'A commerce service covering the foundations of products, orders, and customers.' },
  { name: 'Account Service API', image: AccountServiceAPI, url: 'https://github.com/JATPresentacion97/Account_Service_API', category: 'Microservice', description: 'A dedicated account service designed around clear boundaries and secure access.' },
  { name: 'Wallet API', image: WalletManagementAPI, url: 'https://github.com/JATPresentacion97/Wallet_Management_API', category: 'Fintech API', description: 'Wallet and transaction capabilities packaged as a maintainable backend service.' },
  { name: 'Patient Records API', image: PatientRecordManagementAPI, url: 'https://github.com/JATPresentacion97/PatientRecordManagementSystem-Backend', category: 'Healthcare API', description: 'The backend supporting secure patient data and healthcare operations.' },
  { name: 'Smart Parking API', image: SmartParkingAPI, url: 'https://github.com/JATPresentacion97/SmartPark_API', category: 'Smart systems', description: 'Parking availability and management capabilities built as a focused API.' },
];

const services = [
  { icon: faLayerGroup, eyebrow: 'Fixed cost', title: 'Application design & development', description: 'From the first system boundary to the final interface, I build complete web applications around your real business needs.' },
  { icon: faGaugeHigh, eyebrow: 'Focused engagement', title: 'Performance & modernization', description: 'I untangle slow paths, improve maintainability, and modernize systems without losing the behavior your users depend on.' },
  { icon: faCode, eyebrow: 'Monthly retainer', title: 'Ongoing engineering support', description: 'Reliable maintenance, code review, feature delivery, and technical guidance that keep your product moving forward.' },
];

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/john-albert-presentacion-852092188/', icon: faLinkedin },
  { label: 'GitHub', href: 'https://github.com/JATPresentacion97', icon: faGithub },
  { label: 'Instagram', href: 'https://www.instagram.com/j.albs/', icon: faInstagram },
];

const skills = ['Angular', 'React', 'TypeScript', 'Spring Boot', 'Java', 'Microservices', 'C#', 'GraphQL'];

const SectionTitle: React.FC<{ number: string; first: string; second: string }> = ({ number, first, second }) => (
  <div className="section-heading">
    <span>{number}</span>
    <h2>{first}<br /><em>{second}</em></h2>
  </div>
);

const ProjectCard: React.FC<{ project: Project; compact?: boolean }> = ({ project, compact = false }) => (
  <article className={`project-card${compact ? ' project-card--compact' : ''}`}>
    <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.name}`}>
      <div className="project-image-wrap">
        <img src={project.image} alt={`${project.name} project`} loading="lazy" />
      </div>
      <div className="project-copy">
        <div><p className="mono-label">{project.category}</p><h3>{project.name}</h3></div>
        <FontAwesomeIcon icon={faArrowUpRightFromSquare} aria-hidden="true" />
      </div>
      <p className="project-description">{project.description}</p>
    </a>
  </article>
);

const LandingPage: React.FC = () => (
  <div id="top" className="portfolio-page">
    <nav className="floating-nav" aria-label="Primary navigation">
      <a className="nav-mark" href="#top" aria-label="Back to top"><FontAwesomeIcon icon={faSkull} /></a>
      <div className="nav-links">
        <a href="#work">Work</a>
        <a href="#services">Services</a>
        <a href="#experience">Experience</a>
      </div>
      <DarkModeToggle />
      <a className="nav-hire" href="https://www.linkedin.com/in/john-albert-presentacion-852092188/" target="_blank" rel="noopener noreferrer">Hire me</a>
    </nav>

    <main className="site-shell">
      <div className="portfolio-layout">
        <aside className="identity-rail">
          <div className="identity-card">
            <div className="identity-art" aria-hidden="true">
              <span className="identity-grid" />
              <FontAwesomeIcon icon={faSkull} />
              <span className="identity-initials">JATP</span>
            </div>
            <div className="identity-copy">
              <p className="availability"><span /> Available for selected projects</p>
              <h2>John Albert Presentacion</h2>
              <p className="identity-handle">アルバート · JATP</p>
              <p>A full-stack software engineer from the Philippines building useful, durable digital products.</p>
              <div className="social-links">
                {socialLinks.map(({ label, href, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}><FontAwesomeIcon icon={icon} /></a>
                ))}
              </div>
            </div>
          </div>
        </aside>

        <div className="content-column">
          <header className="hero-section">
            <p className="hero-kicker">Arigatosaimongtanan — I'm Albert (アルバート), from the Philippines</p>
            <h1>Software<span>Engineer</span></h1>
            <p className="hero-lead"><mark>I turn complex requirements into clear products.</mark> From thoughtful interfaces to dependable APIs.</p>
            <p className="hero-current">Currently building at <a href="https://www.pwc.com/ph/en.html" target="_blank" rel="noopener noreferrer">PwC AC Manila</a></p>
          </header>

          <section className="stats-grid" aria-label="Portfolio statistics">
            <div><strong>6</strong><span>Professional deliveries</span></div>
            <div><strong>10</strong><span>Personal builds</span></div>
            <div><strong>Full</strong><span>Stack perspective</span></div>
          </section>

          <section id="services" className="content-section">
            <SectionTitle number="01" first="What" second="I do" />
            <p className="section-intro">Frameworks are tools. I bring product thinking, sound architecture, and hands-on delivery across the stack.</p>
            <div className="skills-marquee" aria-label="Core technologies">
              <div>
                {[...skills, ...skills].map((skill, index) => (
                  <React.Fragment key={`${skill}-${index}`}><span>{skill}</span><b aria-hidden="true">◆</b></React.Fragment>
                ))}
              </div>
            </div>
            <div className="service-grid">
              {services.map(({ icon, eyebrow, title, description }) => (
                <article key={title} className="service-card">
                  <FontAwesomeIcon icon={icon} />
                  <div><p className="mono-label">{eyebrow}</p><h3>{title}</h3></div>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="work" className="content-section">
            <SectionTitle number="02" first="Selected" second="work" />
            <p className="section-intro">Professional products delivered across government, logistics, insurance, fintech, and digital banking.</p>
            <div className="project-grid">{professionalProjects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
            <div className="subsection-heading"><p className="mono-label">Independent practice</p><h3>Personal builds & API experiments</h3></div>
            <div className="project-grid project-grid--compact">{personalProjects.map((project) => <ProjectCard key={project.name} project={project} compact />)}</div>
          </section>

          <section id="experience" className="content-section">
            <SectionTitle number="03" first="How" second="I work" />
            <div className="experience-list">
              <article>
                <div><p className="mono-label">Current chapter</p><h3>PwC AC Manila</h3></div>
                <div><h4>Senior Associate Software Engineer</h4><p>Building full-stack solutions and helping teams turn complex requirements into maintainable software.</p></div>
              </article>
              <article>
                <div><p className="mono-label">Engineering approach</p><h3>End-to-end ownership</h3></div>
                <div><h4>From interface to infrastructure</h4><p>I work across front-end, APIs, integrations, databases, performance, and the practical details needed to ship.</p></div>
              </article>
              <article>
                <div><p className="mono-label">Toolbox</p><h3>Stack agnostic</h3></div>
                <div><h4>Choose the right tool</h4><p>React, Angular, TypeScript, Java, Spring Boot, C#, GraphQL, and microservice architecture.</p></div>
              </article>
            </div>
          </section>

          <section className="contact-section">
            <p className="mono-label">Have a project in mind?</p>
            <h2>Let's build something that lasts.</h2>
            <div className="contact-actions">
              <a href="mailto:johnalbertpresentacion@gmail.com">Start a conversation</a>
              <a href={`${process.env.PUBLIC_URL}/Resume_JATPresentacion.pdf`} download>Download résumé</a>
            </div>
          </section>

          <footer className="site-footer">
            <a href="#top"><FontAwesomeIcon icon={faSkull} /> アルバート</a>
            <p>© {new Date().getFullYear()} John Albert T. Presentacion</p>
            <a href="#top">Back to top ↑</a>
          </footer>
        </div>
      </div>
    </main>
  </div>
);

export default LandingPage;
