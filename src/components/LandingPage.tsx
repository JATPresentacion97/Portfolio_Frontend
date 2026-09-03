import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MainPage.css';
import DarkModeToggle from './DarkModeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faCode, faGaugeHigh, faLayerGroup, faSkull } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import corenet from '../assets/ProfessionalShowcaseAssets/Themed/CoreNet.jpeg';
import encova from '../assets/ProfessionalShowcaseAssets/Themed/Encova.jpeg';
import entrego from '../assets/ProfessionalShowcaseAssets/Themed/Entrego.jpeg';
import gcrypto from '../assets/ProfessionalShowcaseAssets/Themed/Gcrypto.jpeg';
import globeCaseManagement from '../assets/ProfessionalShowcaseAssets/Themed/GlobeCaseManagement.jpeg';
import manulife from '../assets/ProfessionalShowcaseAssets/Themed/Manulife.jpeg';
import metrobank from '../assets/ProfessionalShowcaseAssets/Themed/MetroBank.jpeg';
import AccountServiceAPI from '../assets/PersonalShowcaseAssets/Themed/AccountServiceAPI.jpeg';
import BlogAPI from '../assets/PersonalShowcaseAssets/Themed/BlogAPI.jpeg';
import EcommerceManagementAPI from '../assets/PersonalShowcaseAssets/Themed/EcommerceManagementAPI.jpeg';
import PatientRecordManagementAPI from '../assets/PersonalShowcaseAssets/Themed/PatientRecordManagementAPI.jpeg';
import PatientRecordManagementFrontend from '../assets/PersonalShowcaseAssets/Themed/PatientRecordManagementFrontend.jpeg';
import PortfolioFrontend from '../assets/PersonalShowcaseAssets/Themed/PorfolioFrontend.jpeg';
import SmartParkingAPI from '../assets/PersonalShowcaseAssets/Themed/SmartParkingAPI.jpeg';
import TaskManagementAPI from '../assets/PersonalShowcaseAssets/Themed/TaskManagementAPI.jpeg';
import WalletManagementAPI from '../assets/PersonalShowcaseAssets/Themed/WalletManagementAPI.jpeg';
import WeatherAPI from '../assets/PersonalShowcaseAssets/Themed/WeatherAPI.jpeg';
import profilePortrait from '../assets/profile-portrait.png';

type Project = {
  name: string;
  image: string;
  url: string;
  category: string;
  description: string;
};

type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  project: string;
  description: string;
  technologies: string[];
};

const professionalProjects: Project[] = [
  { name: 'Globe Case Management System', image: globeCaseManagement, url: 'https://www.ncs.co/en-sg/', category: 'Telecommunications · NCS', description: 'Backend services and integrations for Globe Telecom trouble-ticket workflows covering service outages and customer concerns.' },
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

const experiences: Experience[] = [
  {
    company: 'NCS Group',
    role: 'Senior Solutions Architect',
    period: 'Oct 2025 — Present',
    location: 'BGC, Taguig',
    project: 'Globe Telecom · Case Management System',
    description: 'Designing Java and Spring Boot services and enterprise integrations for end-to-end trouble-ticket workflows. I work across API lifecycle design, validation, service mappings, defect resolution, and production-ready delivery with QA, architecture, and business teams.',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'REST APIs', 'System Integration'],
  },
  {
    company: 'PwC Acceleration Center Manila',
    role: 'Senior Software Engineer',
    period: 'Dec 2024 — Sep 2025',
    location: 'BGC, Taguig',
    project: 'Encova · Guidewire PolicyCenter',
    description: 'Developed insurance product models and application functionality in Guidewire PolicyCenter. Partnered with PwC Shanghai engineers on solution design, implementation, testing, reviews, troubleshooting, and mentoring junior developers.',
    technologies: ['Guidewire', 'PolicyCenter', 'Gosu', 'Java', 'XML'],
  },
  {
    company: 'Pan Asia Resources',
    role: 'Senior Software Engineer',
    period: 'Jan 2024 — Dec 2024',
    location: 'BGC, Taguig',
    project: 'Singapore Government · ACRA',
    description: 'Built and maintained enterprise functionality for Singapore’s ACRA system, translating client requirements into reliable features, resolving defects, optimizing code, reviewing pull requests, and supporting junior engineers through Agile delivery.',
    technologies: ['Java', 'Spring Boot MVC', 'React', 'TypeScript', 'REST APIs'],
  },
  {
    company: 'Yondu',
    role: 'Senior Software Engineer',
    period: 'May 2023 — Dec 2023',
    location: 'Makati',
    project: 'Entrego · Rider Tracking',
    description: 'Delivered real-time rider-tracking backend functionality and optimized service flows for reliable logistics data, coordinating implementation, testing, deployment, and post-release support.',
    technologies: ['Java', 'Spring Boot', 'Microservices', 'REST APIs'],
  },
  {
    company: 'Collabera Tech Inc.',
    role: 'Senior Software Engineer',
    period: 'Jan 2022 — May 2023',
    location: 'Makati',
    project: 'GCash · GCrypto',
    description: 'Developed services and APIs for cryptocurrency transactions and account management. Integrated backend services with the GCash ecosystem and supported security, monitoring, troubleshooting, and testing.',
    technologies: ['MuleSoft', 'Java', 'APIs', 'System Integration', 'Security'],
  },
  {
    company: 'Novare Tech Inc.',
    role: 'Senior Software Engineer',
    period: 'Jan 2021 — Jan 2022',
    location: 'Taguig',
    project: 'Metrobank · Mobile Banking',
    description: 'Developed Java and Spring Boot backend features for the Metrobank mobile app, including easy-loan journeys. Led root-cause analysis, performance improvements, security collaboration, and critical production support.',
    technologies: ['Java', 'Spring Boot', 'Node.js', 'Performance', 'Security'],
  },
  {
    company: 'Manulife Philippines',
    role: 'Backend Java Engineer / DevOps Support',
    period: 'May 2020 — Jan 2021',
    location: 'Makati',
    project: 'EPOS · E-Insurance',
    description: 'Improved the stability of the EPOS insurance platform through backend fixes, production troubleshooting, Jenkins deployments, AWS DevOps support, and automated health monitoring.',
    technologies: ['Java', 'Jenkins', 'AWS', 'DevOps', 'Monitoring'],
  },
  {
    company: 'NovaSolutions Technology',
    role: 'Junior Java Developer',
    period: 'Jan 2019 — May 2020',
    location: 'Ortigas',
    project: 'Singapore Government · CoreNet',
    description: 'Started my career building Java backend components for the CoreNet1-to-CoreNet2 migration, alongside system testing, validation, technical documentation, deployment support, and integration work.',
    technologies: ['Java', 'Web Development', 'System Testing', 'Integration'],
  },
];

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
              <img src={profilePortrait} alt="" />
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
            <p className="hero-current">Currently building telecom systems at <a href="https://www.ncs.co/en-sg/" target="_blank" rel="noopener noreferrer">NCS Group</a></p>
          </header>

          <section className="stats-grid" aria-label="Portfolio statistics">
            <div><strong>6+</strong><span>Years in engineering</span></div>
            <div><strong>8</strong><span>Career chapters</span></div>
            <div><strong>10</strong><span>Independent builds</span></div>
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
            <p className="section-intro">Professional products delivered across telecommunications, government, logistics, insurance, fintech, and digital banking.</p>
            <div className="project-grid">{professionalProjects.map((project) => <ProjectCard key={project.name} project={project} />)}</div>
            <div className="subsection-heading"><p className="mono-label">Independent practice</p><h3>Personal builds & API experiments</h3></div>
            <div className="project-grid project-grid--compact">{personalProjects.map((project) => <ProjectCard key={project.name} project={project} compact />)}</div>
          </section>

          <section id="experience" className="content-section">
            <SectionTitle number="03" first="Career" second="timeline" />
            <p className="section-intro">Six-plus years delivering enterprise software across telecommunications, insurance, government, logistics, fintech, and banking.</p>
            <div className="experience-timeline">
              {experiences.map((experience, index) => (
                <article className="experience-card" key={`${experience.company}-${experience.period}`}>
                  <div className="experience-marker" aria-hidden="true">
                    <span>{String(experiences.length - index).padStart(2, '0')}</span>
                  </div>
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
            <aside className="education-card">
              <p className="mono-label">Education · 2014 — 2019</p>
              <div><h3>Far Eastern University Institute of Technology</h3><p>Bachelor of Science in Computer Science<br />Specialization in Software Engineering</p></div>
            </aside>
          </section>

          <section className="contact-section">
            <p className="mono-label">Have a project in mind?</p>
            <h2>Let's build something that lasts.</h2>
            <div className="contact-actions">
              <a href="https://wa.me/639667689427?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer">Start a conversation</a>
              <a href={`${process.env.PUBLIC_URL}/John_Albert_Presentacion_Resume.pdf`} download>Download résumé</a>
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
