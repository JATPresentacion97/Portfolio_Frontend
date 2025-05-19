import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MainPage.css'; // Import the CSS file
import DarkModeToggle from './DarkModeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { faMeteor } from '@fortawesome/free-solid-svg-icons'; // Replace with the chosen icon
import { faLinkedin, faGithub, faInstagram, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faLeaf } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { ThemeProviderWrapper } from './DarkModeToggle';
import ReactSwipe from 'react-swipe';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import SlickReact from './SlickReact';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import corenet from '../assets/CoreNet.jpeg';
import encova from '../assets/Encova.jpeg';
import entrego from '../assets/Entrego.jpeg';
import gcrypto from '../assets/Gcrypto.jpeg';
import manulife from '../assets/Manulife.jpeg';
import metrobank from '../assets/MetroBank.jpeg';


const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CenteredContainerWOFlex = styled.div`
  width: 100%;
`;

const NavbarWrapper = styled.div`
  width: 70%;
`;

const Navbar = styled.nav`
  background-color: ${(props) => props.theme.background} !important;
  color: ${(props) => props.theme.color} !important;
`;

const NavbarBorder = styled.div`
  border: 4px solid ${(props) => props.theme.color};
  padding: 0.5rem;
`;

const FootingBorder = styled.div`
  border-bottom: 4px solid ${(props) => props.theme.color};
  padding-top: 0.5rem;
`;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const LandingPage: React.FC = () => {

  const sliderRef = useRef<Slider>(null);

  const showcaseRef = useRef<HTMLDivElement>(null);

  const serviceRef = useRef<HTMLDivElement>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };


  return (
    <ThemeProviderWrapper>
      <CenteredContainer className="container-size">
        <div className="navbar-design-container">
          <div className="japanesename-design">
            <a className="nav-item nav-link active" href="#" style={{ fontSize: '180%', fontWeight: 'bold' }}><FontAwesomeIcon style={{ fontSize: '150%' }} icon={faSkull} />&nbsp;&nbsp;アルバート</a>
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
            <a className="nav-item nav-link" href="#"><DarkModeToggle /></a>
          </div>
          <div className="hire-me-navbar-designs bold-large-text">
            <NavbarBorder>
              <a className="nav-item nav-link bold-large-text" href="https://www.linkedin.com/in/john-albert-presentacion-852092188/" target="_blank" rel="noopener noreferrer">Hire Me</a>
            </NavbarBorder>
          </div>
        </div>
      </CenteredContainer>
      <br></br><br></br>
      <CenteredContainer className="container-size padding-top">
        <div className=" main-introduction-container-size">
          <div className="main-introduction-font-size">
            <p>Arigatosaimongtanan, I'm <mark>Albert(アルバート)!</mark></p>
            <p>A passionate <mark>Web Developer</mark> </p>
            <p>from the <mark>Philippines!</mark></p>
          </div>
        </div>
      </CenteredContainer>
      <CenteredContainer className="container-size">
        <div className="main-introduction-container-size">
          <br></br>
          <div className="secondary-introduction-font-size">
            <p>Unlock Your Potential: I'll solve your website woes,</p>
            <p>while you stay focused on your goals.</p>
          </div>
          <br></br>
          <br></br>
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
          <br></br>
          <p style={{ textAlign: 'left' }}>This portfolio was built with&nbsp;&nbsp;<FontAwesomeIcon icon={faReact} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCoffee} />&nbsp;&nbsp;<FontAwesomeIcon icon={faLeaf} /></p>
          <FootingBorder></FootingBorder>
          <br></br>
          <div className="secondary-introduction-font-size padding-top">
            <p>Currently, I work for <mark>PWC AC Manila</mark>  as a <mark>Senior Associate Software Engineer.</mark></p>
            <p>but I can describe myself as more as a <mark>Full Stack Developer.</mark></p>
          </div>
        </div>
      </CenteredContainer>

      <CenteredContainer className="container-size" ref={showcaseRef}>
        <div className="showcase-design-container">
          <div className="showcase-designs">
            <div className="align-left">Project Showcase.</div>
          </div>
          <div className="left-scroll-designs button-style bold-large-text">
            <a
              style={{ fontSize: '180%', fontWeight: 'bold', cursor: 'pointer' }}
              onClick={() => sliderRef.current?.slickPrev()}
              rel="noopener noreferrer"
            >
              {'<'}
            </a>
          </div>
          <div className="right-scroll-designs button-style bold-large-text">
            <a
              style={{ fontSize: '180%', fontWeight: 'bold', cursor: 'pointer' }}
              onClick={() => sliderRef.current?.slickNext()}
              rel="noopener noreferrer"
            >
              {'>'}
            </a>
          </div>
        </div>
      </CenteredContainer>

      {/* Slider */}
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
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={src} alt={alt} style={{ width: '100%', cursor: 'pointer' }} />
                      </a>
                    </h3>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </CenteredContainerWOFlex>
      </CenteredContainer>
      <CenteredContainer className="container-size container-padding-top ">
        <div className="main-introduction-container-size">

          <FootingBorder>

          </FootingBorder>

        </div>
      </CenteredContainer>
      <CenteredContainer className="container-size" ref={serviceRef}>
        <div className="main-introduction-container-size">
          <div className="showcase-font-size secondary-introduction-font-size padding-top">
            <p>Services I offer.</p>
          </div>
          <div className="secondary-introduction-font-size">
            <p>I usually work with the following technologies, though I'm framework agnostic and always open to learning new things.</p>
          </div>
        </div>
      </CenteredContainer>
      <CenteredContainer className="container-size">
        <div className="box-design-container">
          <div className="box-designs"><NavbarBorder>Angular</NavbarBorder></div>
          <div className="box-designs"><NavbarBorder>React</NavbarBorder></div>
          <div className="box-designs"><NavbarBorder>Typescript</NavbarBorder></div>
          <div className="box-designs"><NavbarBorder>Springboot</NavbarBorder></div>
          <div className="box-designs"><NavbarBorder>Java</NavbarBorder></div>
          <div className="box-designs"><NavbarBorder>Microservices</NavbarBorder></div>
          <div className="box-designs"><NavbarBorder>C#</NavbarBorder></div>
          <div className="box-designs"><NavbarBorder>GraphQl</NavbarBorder></div>
        </div>
      </CenteredContainer>
      <CenteredContainer className="card-container-size">
        <div className="card-design-container">
          <NavbarBorder>
            <div className="card-designs">
              <p className="icon-size"><FontAwesomeIcon icon={faMeteor} /></p>
              <br></br>
              <p style={{ fontSize: '125%', color: 'grey' }}>Fixed Cost</p>
              <p style={{ fontSize: '150%', fontWeight: 'bold' }}>Web Application Design & Development</p>
              <br></br>
              <p>I am an expert in creating stunning and functional</p>
              <p>web applications that bring your ideas to life. I will</p>
              <p>design and develop a customized solution tailored to</p>
              <p>your unique needs!</p>

            </div>
          </NavbarBorder>
          <NavbarBorder>
            <div className="card-designs">
              <p className="icon-size"><FontAwesomeIcon icon={faRocket} /></p>
              <br></br>
              <p style={{ fontSize: '125%', color: 'grey' }}>Fixed Cost</p>
              <p style={{ fontSize: '150%', fontWeight: 'bold' }}>Website Performance Optimization</p>
              <br></br>
              <p>Unlock the true potential of your website by</p>
              <p>enhancing its performance to new heights! With my</p>
              <p>your website loads faster, performs smoother, and</p>
              <p>delivers an exceptional user experience.</p>
            </div>
          </NavbarBorder>
          <NavbarBorder>
            <div className="card-designs">
              <p className="icon-size"><FontAwesomeIcon icon={faCode} /></p>
              <br></br>
              <p style={{ fontSize: '125%', color: 'grey' }}>Monthly Retainer</p>
              <p style={{ fontSize: '150%', fontWeight: 'bold' }}>Website Maintenance</p>
              <br></br>
              <br></br>
              <p>With my meticulous care and attention to detail</p>
              <p> , I'll ensure that your website stays in top shape,</p>
              <p>delivering a flawless experience to your visitors. From</p>
              <p>regular updates to security enhancements, I've got</p>
              <p>you covered!</p>
            </div>
          </NavbarBorder>
        </div>
      </CenteredContainer>
      <CenteredContainer className="hire-me-container">
        <NavbarBorder>
          <div className="hire-me-style">
            <a className="nav-item nav-link" href="https://www.linkedin.com/in/john-albert-presentacion-852092188/" target="_blank" rel="noopener noreferrer">Hire Me</a>
          </div>
        </NavbarBorder>
      </CenteredContainer>
      <CenteredContainer className="card-container-size">
        <div className="footer-design-container">
          <div className="footer-designs">
            <a className="nav-item nav-link active" href="#" style={{ fontSize: '180%', fontWeight: 'bold' }}><FontAwesomeIcon icon={faSkull} />&nbsp;アルバート</a>
          </div>
          <div className="footer-signature-designs">
            <p> © 2024 John Albert T Presentacion | jatp</p>
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
