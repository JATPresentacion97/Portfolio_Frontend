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

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
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
  padding: 0.5rem;
`;




const LandingPage: React.FC = () => {

  const reactSwipeEl = useRef<ReactSwipe | null>(null);

  return (
    <ThemeProviderWrapper>
      <CenteredContainer className="container-size">
        <NavbarWrapper>
          <Navbar className="navbar navbar-expand-lg navbar-light padding-top">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="mr-auto">
                <a className="nav-item nav-link active large-text" href="#" style={{ fontSize: '300%' }}><FontAwesomeIcon icon={faSkull} /></a>
              </div>
              <div>
                <a className="nav-item nav-link active bold-large-text" href="#" style={{ fontSize: '200%', paddingLeft: '5%', width: '150%' }}>アルバート</a>
              </div>
            </div>
            <div className="padding-right">
              <a className="nav-item nav-link bold-large-text" href="#">SHOWCASE</a>
            </div>
            <div className="padding-right">
              <a className="nav-item nav-link bold-large-text" href="#">SERVICES</a>
            </div>
            <div className=" padding-right">
              <a className="nav-item nav-link" href="#"><DarkModeToggle /></a>
            </div>
            <NavbarBorder className="padding-around">
              <a className="nav-item nav-link bold-large-text" href="https://www.linkedin.com/in/john-albert-presentacion-852092188/" target="_blank" rel="noopener noreferrer">HIRE ME</a>
            </NavbarBorder>
          </Navbar>
        </NavbarWrapper>
      </CenteredContainer>
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
          <div className="secondary-introduction-font-size">
            <p>Unlock Your Potential: I'll solve your website woes,</p>
            <p>while you stay focused on your goals.</p>
          </div>
          <div className="secondary-introduction-font-size">
            <p><FontAwesomeIcon icon={faLinkedin} />&nbsp;&nbsp;<FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;<FontAwesomeIcon icon={faInstagram} /></p>
          </div>
          <FootingBorder>
            <p>This portfolio was built with&nbsp;&nbsp;<FontAwesomeIcon icon={faReact} />&nbsp;&nbsp;<FontAwesomeIcon icon={faCoffee} />&nbsp;&nbsp;<FontAwesomeIcon icon={faLeaf} /></p>
          </FootingBorder>
          <div className="secondary-introduction-font-size padding-top">
            <p>Currently, I work for <mark>Accenture</mark>  as a <mark>Senior Backend Software Engineer.</mark></p>
            <p>but I can describe myself as more as a <mark>Full Stack Developer.</mark></p>
          </div>
        </div>
      </CenteredContainer>
      <CenteredContainer className="container-size">
        <div className="main-introduction-container-size">
          <div className="showcase-font-size padding-top">
            <div className="align-left">Project Showcase.</div>
            <div className="align-right button-container">
              <div className="align-left button-style margin-right">
                <a onClick={() => reactSwipeEl.current?.prev()} rel="noopener noreferrer">{'<'}</a>
              </div>
              <div className="align-right button-style">
                <a onClick={() => reactSwipeEl.current?.next()} rel="noopener noreferrer">{'>'}</a>
              </div>
            </div>
          </div>

        </div>

      </CenteredContainer>
      <CenteredContainer>
        <div className="padding-top">
          <ReactSwipe
            className="carousel"
            swipeOptions={{ continuous: false }}
            ref={reactSwipeEl}
          >
            <div>PANE 1</div>
            <div>PANE 2</div>
            <div>PANE 3</div>
          </ReactSwipe>

        </div>
      </CenteredContainer>
      <CenteredContainer className="container-size">
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
          <div className="box-designs">Angular</div>
          <div className="box-designs">React</div>
          <div className="box-designs">Typescript</div>
          <div className="box-designs">Springboot</div>
          <div className="box-designs">Java</div>
          <div className="box-designs">Microservices</div>
          <div className="box-designs">C#</div>
          <div className="box-designs">GraphQl</div>
        </div>
      </CenteredContainer>
      <CenteredContainer className="card-container-size">
        <div className="card-design-container">
          <div className="card-designs">
            <p className="icon-size"><FontAwesomeIcon icon={faMeteor} /></p>
            <p>Fixed Cost</p>
            <p>Web Application Design & Development</p>
            <p>I am an expert in creating stunning and functional</p>
            <p>web applications that bring your ideas to life. I will</p>
            <p>design and develop a customized solution tailored to</p>
            <p>your unique needs!</p>
          </div>
          <div className="card-designs">
            <p className="icon-size"><FontAwesomeIcon icon={faRocket} /></p>
            <p>Fixed Cost</p>
            <p>Website Performance Optimization</p>
            <p>Unlock the true potential of your website by</p>
            <p>enhancing its performance to new heights! With my</p>
            <p>your website loads faster, performs smoother, and</p>
            <p>delivers an exceptional user experience.</p>
          </div>
          <div className="card-designs">
            <p className="icon-size"><FontAwesomeIcon icon={faCode} /></p>
            <p>Monthly Retainer</p>
            <p>Website Maintenance</p>
            <p>With my meticulous care and attention to detail, I'll</p>
            <p>ensure that your website stays in top shape,</p>
            <p>delivering a flawless experience to your visitors. From</p>
            <p>regular updates to security enhancements, I've got</p>
            <p>you covered!</p>
          </div>
        </div>
      </CenteredContainer>
      <CenteredContainer className="hire-me-container">
        <NavbarBorder className="padding-around">
          <a className="nav-item nav-link bold-large-text" href="https://www.linkedin.com/in/john-albert-presentacion-852092188/" target="_blank" rel="noopener noreferrer">HIRE ME</a>
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
            <p><FontAwesomeIcon icon={faLinkedin} />&nbsp;&nbsp;<FontAwesomeIcon icon={faGithub} />&nbsp;&nbsp;<FontAwesomeIcon icon={faInstagram} /></p>
          </div>
        </div>
      </CenteredContainer>
    </ThemeProviderWrapper >
  );
};

export default LandingPage;
