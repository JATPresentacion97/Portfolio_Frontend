import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MainPage.css'; // Import the CSS file
import DarkModeToggle from './DarkModeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faInstagram, faReact } from '@fortawesome/free-brands-svg-icons';
import { faCoffee, faLeaf } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { ThemeProviderWrapper } from './DarkModeToggle';
import ReactSwipe from 'react-swipe';
import { Button } from 'react-bootstrap';

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
    </ThemeProviderWrapper >
  );
};

export default LandingPage;
