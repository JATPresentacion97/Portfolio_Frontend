import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MainPage.css';
import DarkModeToggle, { ThemeProviderWrapper } from './DarkModeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull, faRocket, faMeteor, faCoffee, faLeaf, faCode } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faReact } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Import images for project showcase
import corenet from '../assets/CoreNet.jpeg';
import encova from '../assets/Encova.jpeg';
import entrego from '../assets/Entrego.jpeg';
import gcrypto from '../assets/Gcrypto.jpeg';
import manulife from '../assets/Manulife.jpeg';
import metrobank from '../assets/MetroBank.jpeg';

// Styled container that centers its children horizontally using flexbox
const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

// Container without flex styling, just full width
const CenteredContainerWOFlex = styled.div`
  width: 100%;
`;

// Styled div with border color based on current theme for navbar elements
const NavbarBorder = styled.div`
  border: 4px solid ${(props) => props.theme.color};
  padding: 0.5rem;
`;

// Styled div with bottom border for footer separation, theme color aware
const FootingBorder = styled.div`
  border-bottom: 4px solid ${(props) => props.theme.color};
  padding-top: 0.5rem;
`;

// Styled div with border for project showcase navigation arrows, theme color aware
const ShowcaseBorder = styled.div`
  border: 4px solid ${(props) => props.theme.color};
`;

// React Slick slider settings for project showcase
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Show 3 slides at once
  slidesToScroll: 1,
  arrows: false, // We provide custom arrows outside the slider
};

const LandingPage: React.FC = () => {
  // Refs to control slider and scroll to sections smoothly
  const sliderRef = useRef<Slider>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const serviceRef = useRef<HTMLDivElement>(null);

  return (
    // Wrap everything inside ThemeProviderWrapper to enable dark mode toggle and theming
    <ThemeProviderWrapper>
      {/* Navbar Section */}
      <CenteredContainer className="container-size">
        <div className="navbar-design-container">
          {/* Japanese name logo with icon */}
          <div className="japanesename-design">
            <a className="nav-item nav-link active" href="#" style={{ fontSize: '180%', fontWeight: 'bold' }}>
              <FontAwesomeIcon style={{ fontSize: '150%' }} icon={faSkull} />
              &nbsp;&nbsp;アルバート
            </a>
          </div>

          {/* Navigation links scroll to sections smoothly */}
          <div className="navbar-designs  bold-large-text">
            <a
              className="nav-item nav-link bold-large-text"
              style={{ cursor: 'pointer' }}
              onClick={() => showcaseRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              Showcase
            </a>
          </div>
          <div className="navbar-designs bold-large-text">
            <a
              className="nav-item nav-link bold-large-text"
              style={{ cursor: 'pointer' }}
              onClick={() => serviceRef.current?.scrollIntoView({ behavior: 'smooth' })}
            >
              Service
            </a>
          </div>

          {/* Dark mode toggle button */}
          <div className="navbar-designs  bold-large-text">
            <a className="nav-item nav-link" href="#">
              <DarkModeToggle />
            </a>
          </div>

          {/* Hire Me button with themed border */}
          <div className="hire-me-navbar-designs bold-large-text">
            <NavbarBorder>
              <a
                className="nav-item nav-link bold-large-text"
                href="https://www.linkedin.com/in/john-albert-presentacion-852092188/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire Me
              </a>
            </NavbarBorder>
          </div>
        </div>
      </CenteredContainer>

      {/* Main Introduction Section */}
      <br />
      <br />
      <CenteredContainer className="container-size padding-top">
        <div className="main-introduction-container-size">
          <div className="main-introduction-font-size">
            <p>
              Arigatosaimongtanan, I'm <mark>Albert(アルバート)!</mark>
            </p>
            <p>A passionate <mark>Web Developer</mark> </p>
            <p>from the <mark>Philippines!</mark></p>
          </div>
        </div>
      </CenteredContainer>

      {/* Secondary Introduction with social links */}
      <CenteredContainer className="container-size">
        <div className="main-introduction-container-size">
          <br />
          <div className="secondary-introduction-font-size">
            <p>Unlock Your Potential: I'll solve your website woes,</p>
            <p>while you stay focused on your goals.</p>
          </div>
          <br />
          <br />
          <div className="secondary-introduction-font-size">
            <p>
              {/* Social icons linking to profiles */}
              <a href="https://www.linkedin.com/in/john-albert-presentacion-852092188/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              &nbsp;&nbsp;
              <a href="https://github.com/JATPresentacion97" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              &nbsp;&nbsp;
              <a href="https://www.instagram.com/j.albs/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </p>
          </div>
          <br />
          {/* Technologies used to build portfolio */}
          <p style={{ textAlign: 'left' }}>
            This portfolio was built with&nbsp;&nbsp;
            <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
              <FontAwesomeIcon icon={faReact} />
            </a>
            &nbsp;&nbsp;
            <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
              <FontAwesomeIcon icon={faCoffee} />
            </a>
            &nbsp;&nbsp;
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
              <FontAwesomeIcon icon={faLeaf} />
            </a>
          </p>
          <FootingBorder></FootingBorder>
          <br />
          <div className="secondary-introduction-font-size padding-top">
            <p>
              Currently, I work for <mark>PWC AC Manila</mark> as a <mark>Senior Associate Software Engineer.</mark>
            </p>
            <p>but I can describe myself as more as a <mark>Full Stack Developer.</mark></p>
          </div>
        </div>
      </CenteredContainer>

      {/* Project Showcase Section */}
      <CenteredContainer className="container-size" ref={showcaseRef}>
        <div className="showcase-design-container">
          <div className="showcase-designs">
            <div className="align-left">Project Showcase.</div>
          </div>

          {/* Custom left scroll button */}
          <div className="left-scroll-designs button-style bold-large-text">
            <ShowcaseBorder>
              <a
                style={{ fontSize: '180%', fontWeight: 'bold', cursor: 'pointer' }}
                onClick={() => sliderRef.current?.slickPrev()}
                rel="noopener noreferrer"
              >
                {'<'}
              </a>
            </ShowcaseBorder>
          </div>

          {/* Custom right scroll button */}
          <div className="right-scroll-designs button-style bold-large-text">
            <ShowcaseBorder>
              <a
                style={{ fontSize: '180%', fontWeight: 'bold', cursor: 'pointer' }}
                onClick={() => sliderRef.current?.slickNext()}
                rel="noopener noreferrer"
              >
                {'>'}
              </a>
            </ShowcaseBorder>
          </div>
        </div>
      </CenteredContainer>

      {/* Showcase Slider */}
      <CenteredContainer>
        <CenteredContainerWOFlex>
          <div style={{ width: '70%', margin: '0 auto' }}>
            <div className="slider-container slider-padding">
              <Slider ref={sliderRef} {...settings}>
                {[
                  { src: corenet, alt: 'corenet', url: 'https://www.corenet.gov.sg/general/e-info.aspx' },
                  { src: encova, alt: 'encova', url: 'https://www.encova.com/' },
                  { src: entrego, alt: 'entrego', url: 'https://trackmypackage.net/c/entrego-tracking' },
                  { src: gcrypto, alt: 'gcrypto', url: 'https://new.gcash.com/' },
                  { src: manulife, alt: 'manulife', url: 'https://www.manulife.com.ph/' },
                  { src: metrobank, alt: 'metrobank', url: 'https://www.metrobank.com.ph/services/mb-app' },
                ].map(({ src, alt, url }, index) => (
                  <div key={index}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                      <img className="image-size" src={src} alt={alt} />
                    </a>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </CenteredContainerWOFlex>
      </CenteredContainer>

      {/* Services Section */}
      <CenteredContainer className="container-size" ref={serviceRef}>
        <div className="services-design-container">
          <div className="services-designs">
            <div className="align-left">Services.</div>
          </div>
          <br />
          <br />
          <div className="services-card-container">
            {/* Service Card Example */}
            <div className="card-container">
              <FontAwesomeIcon icon={faRocket} size="2x" />
              <div className="card-text">
                <h2>Web Development</h2>
                <p>Build fast, responsive, and scalable web applications.</p>
              </div>
            </div>
            <div className="card-container">
              <FontAwesomeIcon icon={faMeteor} size="2x" />
              <div className="card-text">
                <h2>API Integration</h2>
                <p>Integrate third-party APIs to enhance app functionalities.</p>
              </div>
            </div>
            <div className="card-container">
              <FontAwesomeIcon icon={faCode} size="2x" />
              <div className="card-text">
                <h2>Full Stack Development</h2>
                <p>Expertise in frontend and backend technologies.</p>
              </div>
            </div>
          </div>
        </div>
      </CenteredContainer>

      {/* Footer Section */}
      <CenteredContainer className="container-size">
        <br />
        <FootingBorder>
          <p style={{ textAlign: 'center' }}>
            © 2024 John Albert Presentacion. All rights reserved.
          </p>
        </FootingBorder>
      </CenteredContainer>
    </ThemeProviderWrapper>
  );
};

export default LandingPage;
