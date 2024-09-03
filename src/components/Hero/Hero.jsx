import React, { useContext, useState, useEffect, useMemo } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import optionsConfig from './linkOptions';
import { handleButtonClick, handlePageView } from '../../ga';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
    handlePageView(isDesktop ? "Desktop" : "Mobile")
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    })
  }, []);

  const options = useMemo(
    () => (optionsConfig(isMobile)),
    [isMobile],
  );


  return (
    <section id="hero" className="jumbotron">
      <Particles
        className="particle-js"
        options={options}
      />
      <Container style={{ zIndex: 10 }}>
        <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
          <h1 className="hero-title">
            {title} <span className="text-color-main">{name}</span>
            <br />
            {subtitle}
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={500} delay={500} distance="30px">
          <Link className="hero-cta" to="about" smooth duration={500} onClick={() => handleButtonClick('know-more')}>
            <p>
              <span className="cta-btn cta-btn--hero">{cta || 'Know more'}</span>
            </p>
          </Link>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
