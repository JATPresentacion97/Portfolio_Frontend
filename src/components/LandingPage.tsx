import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MainPage.css'; // Import the CSS file
import DarkModeToggle from './DarkModeToggle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSkull } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { ThemeProviderWrapper } from './DarkModeToggle';
import { left } from '@popperjs/core';

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

const LandingPage: React.FC = () => {
  return (
    <ThemeProviderWrapper>
      <CenteredContainer className="navbar-border container-size">
        <NavbarWrapper>
          <Navbar className="navbar navbar-expand-lg navbar-light padding-top">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav mr-auto">
                <a className="nav-item nav-link active large-text" href="#" style={{ fontSize: '300%' }}><FontAwesomeIcon icon={faSkull} /></a>
              </div>
              <div>
                <a className="nav-item nav-link active bold-large-text" href="#" style={{ fontSize: '200%', paddingLeft: '5%', width: '150%' }}>アルバート</a>
              </div>
            </div>
            <div className="navbar-nav padding-right">
              <a className="nav-item nav-link bold-large-text" href="#">SHOWCASE</a>
            </div>
            <div className="navbar-nav padding-right">
              <a className="nav-item nav-link bold-large-text" href="#">SERVICES</a>
            </div>
            <div className="navbar-nav padding-right">
              <a className="nav-item nav-link" href="#"><DarkModeToggle /></a>
            </div>
            <div className="navbar-nav navbar-border padding-around">
              <a className="nav-item nav-link bold-large-text" href="https://www.linkedin.com/in/john-albert-presentacion-852092188/" target="_blank" rel="noopener noreferrer">HIRE ME</a>
            </div>
          </Navbar>
        </NavbarWrapper>
      </CenteredContainer>
      <CenteredContainer className="navbar-border container-size">
        <div className="main-introduction-size">
          <p>Arigatosaimongtanan,</p>
          <p>I'm Albert (アルバート)!</p>
          <p>A passionate Web Developer </p>
          <p>from the Philippines!</p>
        </div>
      </CenteredContainer>
    </ThemeProviderWrapper >
  );
};

export default LandingPage;
