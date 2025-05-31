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
import PorfolioFrontend from '../assets/PersonalShowcaseAssets/PorfolioFrontend.jpeg';
import TaskManagementAPI from '../assets/PersonalShowcaseAssets/TaskManagementAPI.jpeg';
import WalletManagementAPI from '../assets/PersonalShowcaseAssets/WalletManagementAPI.jpeg';
import WeatherAPI from '../assets/PersonalShowcaseAssets/WeatherAPI.jpeg';
import SmartParkingAPI from '../assets/PersonalShowcaseAssets/SmartParkingAPI.jpeg';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

// Container with full width but no flexbox centering applied
const CenteredContainerWOFlex = styled.div`
  width: 100%;
`;

// Navbar wrapper with a solid border and padding, using theme color
const NavbarBorder = styled.div`
  border: 4px solid ${(props) => props.theme.color};
  padding: 0.5rem;
`;

// Footer wrapper with a bottom border and some padding on top, using theme color
const FootingBorder = styled.div`
  border-bottom: 4px solid ${(props) => props.theme.color};
  padding-top: 0.5rem;
`;

// Showcase section wrapper with a solid border, themed color
const ShowcaseBorder = styled.div`
  border: 4px solid ${(props) => props.theme.color};
`;

// Settings for the react-slick carousel slider component
const settings = {
  dots: false,          // Hide navigation dots
  infinite: true,       // Enable infinite scrolling
  speed: 500,           // Transition speed in milliseconds
  slidesToShow: 3,      // Number of slides visible at once
  slidesToScroll: 1,    // Number of slides to scroll on each action
  arrows: false,        // Hide left/right arrows
};

const LandingPage: React.FC = () => {
  // Ref to control slider component programmatically if needed
  const sliderRef = useRef<Slider>(null);
  // Ref to control slider component programmatically if needed
  const personalSliderRef = useRef<Slider>(null);
  // Ref for the showcase div, possibly for scrolling or DOM manipulation
  const showcaseRef = useRef<HTMLDivElement>(null);
  // Ref for the showcase div, possibly for scrolling or DOM manipulation
  const personalShowcaseRef = useRef<HTMLDivElement>(null);
  // Ref for the services section div
  const serviceRef = useRef<HTMLDivElement>(null);

  return (
    <ThemeProviderWrapper>
      {/* Navbar */}
      <CenteredContainer className="container-size">
        <div className="navbar-design-container">
          <div className="japanesename-design">
            <a className="nav-item nav-link active" href="#" style={{ fontSize: '180%', fontWeight: 'bold' }}>
              <FontAwesomeIcon style={{ fontSize: '150%' }} icon={faSkull} />
              &nbsp;&nbsp;アルバート
            </a>
          </div>
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
          <div className="navbar-designs  bold-large-text">
            <a className="nav-item nav-link" href="#">
              <DarkModeToggle />
            </a>
          </div>
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

      {/* Main Introduction */}
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

      {/* Secondary Introduction */}
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

      {/* Professional Showcase Section */}
      <CenteredContainer className="container-size" ref={showcaseRef}>
        <div className="showcase-design-container">
          <div className="showcase-designs">
            <div className="align-left">Professional Project Showcase.</div>
          </div>

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

      {/* Professional Showcase Slider */}
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
                    <h3>
                      <ShowcaseBorder>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          <img src={src} alt={alt} style={{ width: '100%', cursor: 'pointer' }} />
                        </a>
                      </ShowcaseBorder>
                    </h3>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </CenteredContainerWOFlex>
      </CenteredContainer>

      {/* Personal Showcase Section */}
      <CenteredContainer className="container-size" ref={personalShowcaseRef}>
        <div className="showcase-design-container">
          <div className="showcase-designs">
            <div className="align-left">Personal Project Showcase.</div>
          </div>

          <div className="left-scroll-designs button-style bold-large-text">
            <ShowcaseBorder>
              <a
                style={{ fontSize: '180%', fontWeight: 'bold', cursor: 'pointer' }}
                onClick={() => personalSliderRef.current?.slickPrev()}
                rel="noopener noreferrer"
              >
                {'<'}
              </a>
            </ShowcaseBorder>
          </div>
          <div className="right-scroll-designs button-style bold-large-text">
            <ShowcaseBorder>
              <a
                style={{ fontSize: '180%', fontWeight: 'bold', cursor: 'pointer' }}
                onClick={() => personalSliderRef.current?.slickNext()}
                rel="noopener noreferrer"
              >
                {'>'}
              </a>
            </ShowcaseBorder>
          </div>
        </div>
      </CenteredContainer>

      {/* Personal Showcase Slider */}
      <CenteredContainer>
        <CenteredContainerWOFlex>
          <div style={{ width: '70%', margin: '0 auto' }}>
            <div className="slider-container slider-padding">
              <Slider ref={personalSliderRef} {...settings}>
                {[
                  { src: PatientRecordManagementFrontend, alt: 'Patient Record Management Frontend', url: 'https://github.com/JATPresentacion97/PatientRecordManagementSystem-Frontend' },
                  { src: PorfolioFrontend, alt: 'Portfolio Front End', url: 'https://github.com/JATPresentacion97/Portfolio_Frontend' },
                  { src: WeatherAPI, alt: 'Weather API', url: 'https://github.com/JATPresentacion97/Weather_API' },
                  { src: BlogAPI, alt: 'Blog API', url: 'https://github.com/JATPresentacion97/Blog_Management_API' },
                  { src: TaskManagementAPI, alt: 'Task Management API', url: 'https://github.com/JATPresentacion97/Task_Management_API' },
                  { src: EcommerceManagementAPI, alt: 'Ecommerce Management API', url: 'https://github.com/JATPresentacion97/Ecommerce_Management_API' },
                  { src: AccountServiceAPI, alt: 'Account Service API', url: 'https://github.com/JATPresentacion97/Account_Service_API' },
                  { src: WalletManagementAPI, alt: 'Wallet Management API', url: 'https://github.com/JATPresentacion97/Wallet_Management_API' },
                  { src: PatientRecordManagementAPI, alt: 'Patient Record Management API', url: 'https://github.com/JATPresentacion97/PatientRecordManagementSystem-Backend' },
                  { src: SmartParkingAPI, alt: 'Smart Parking API', url: 'https://github.com/JATPresentacion97/SmartPark_API' },
                ].map(({ src, alt, url }, index) => (
                  <div key={index}>
                    <h3>
                      <ShowcaseBorder>
                        <a href={url} target="_blank" rel="noopener noreferrer">
                          <img src={src} alt={alt} style={{ width: '100%', cursor: 'pointer' }} />
                        </a>
                      </ShowcaseBorder>
                    </h3>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </CenteredContainerWOFlex>
      </CenteredContainer>

      {/* Service Section */}
      <CenteredContainer className="container-size container-padding-top ">
        <div className="main-introduction-container-size">
          <FootingBorder></FootingBorder>
        </div>
      </CenteredContainer>
      <CenteredContainer className="container-size" ref={serviceRef}>
        <div className="main-introduction-container-size">
          <div className="showcase-font-size secondary-introduction-font-size padding-top">
            <p>Services I offer.</p>
          </div>
          <div className="secondary-introduction-font-size">
            <p>
              I usually work with the following technologies, though I'm framework agnostic and always open to learning
              new things.
            </p>
          </div>
        </div>
      </CenteredContainer>
      <CenteredContainer className="container-size">
        <div className="box-design-container">
          {[
            { name: 'Angular', url: 'https://angular.io/' },
            { name: 'React', url: 'https://reactjs.org/' },
            { name: 'Typescript', url: 'https://www.typescriptlang.org/' },
            { name: 'Springboot', url: 'https://spring.io/projects/spring-boot' },
            { name: 'Java', url: 'https://www.oracle.com/java/' },
            { name: 'Microservices', url: 'https://microservices.io/' },
            { name: 'C#', url: 'https://learn.microsoft.com/en-us/dotnet/csharp/' },
            { name: 'GraphQl', url: 'https://graphql.org/' },
          ].map(({ name, url }, i) => (
            <div className="box-designs" key={i}>
              <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <NavbarBorder>{name}</NavbarBorder>
              </a>
            </div>
          ))}
        </div>
      </CenteredContainer>

      {/* Cards Section */}
      <CenteredContainer className="card-container-size">
        <div className="card-design-container">
          <NavbarBorder>
            <div className="card-designs">
              <p className="icon-size">
                <FontAwesomeIcon icon={faMeteor} />
              </p>
              <br />
              <p style={{ fontSize: '125%', color: 'grey' }}>Fixed Cost</p>
              <p style={{ fontSize: '150%', fontWeight: 'bold' }}>Web Application Design & Development</p>
              <br />
              <p>I am an expert in creating stunning and functional</p>
              <p>web applications that bring your ideas to life. I will</p>
              <p>design and develop a customized solution tailored to</p>
              <p>your unique needs!</p>
            </div>
          </NavbarBorder>
          <NavbarBorder>
            <div className="card-designs">
              <p className="icon-size">
                <FontAwesomeIcon icon={faRocket} />
              </p>
              <br />
              <p style={{ fontSize: '125%', color: 'grey' }}>Fixed Cost</p>
              <p style={{ fontSize: '150%', fontWeight: 'bold' }}>Website Performance Optimization</p>
              <br />
              <p>Unlock the true potential of your website by</p>
              <p>enhancing its performance to new heights! With my</p>
              <p>your website loads faster, performs smoother, and</p>
              <p>delivers an exceptional user experience.</p>
            </div>
          </NavbarBorder>
          <NavbarBorder>
            <div className="card-designs">
              <p className="icon-size">
                <FontAwesomeIcon icon={faCode} />
              </p>
              <br />
              <p style={{ fontSize: '125%', color: 'grey' }}>Monthly Retainer</p>
              <p style={{ fontSize: '150%', fontWeight: 'bold' }}>Website Maintenance</p>
              <br />
              <br />
              <p>With my meticulous care and attention to detail</p>
              <p> , I'll ensure that your website stays in top shape,</p>
              <p>delivering a flawless experience to your visitors. From</p>
              <p>regular updates to security enhancements, I've got</p>
              <p>you covered!</p>
            </div>
          </NavbarBorder>
        </div>
      </CenteredContainer>

      {/* Download Resume */}
      <CenteredContainer className="hire-me-container">
        {[{
          href: "Resume_JATPresentacion.pdf",
          text: "Resume Download",
          download: true
        }, {
          href: "https://www.hackerrank.com/profile/johnalbertprese1",
          text: "HackerRank"
        }, {
          href: "https://github.com/JATPresentacion97",
          text: "Github"
        }].map(({ href, text, download = false }, i) => (
          <NavbarBorder key={i} style={{ marginRight: '1%', width: '280px' }}>
            <div
              className="hire-me-style"
              style={{ textAlign: 'center', width: '100%' }}
            >
              <a
                className="nav-item nav-link"
                href={href}
                {...(download ? { download: true } : {})}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block', width: '100%' }}
              >
                <p style={{ fontSize: '150%', fontWeight: 'bold', margin: 0 }}>
                  {text}
                </p>
              </a>
            </div>
          </NavbarBorder>
        ))}
      </CenteredContainer>


      {/* Footer */}
      <CenteredContainer className="card-container-size">
        <div className="footer-design-container">
          <div className="footer-designs">
            <a className="nav-item nav-link active" href="#" style={{ fontSize: '180%', fontWeight: 'bold' }}>
              <FontAwesomeIcon icon={faSkull} />
              &nbsp;アルバート
            </a>
          </div>
          <div className="footer-signature-designs">
            <p> © 2024 John Albert T Presentacion | +639667689427(Globe) | johnalbertpresentacion@gmail.com</p>
          </div>
          <div className="footer-icons-designs" style={{ fontSize: '180%', fontWeight: 'bold' }}>
            <p>
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
        </div>
      </CenteredContainer>
    </ThemeProviderWrapper >
  );
};

export default LandingPage;