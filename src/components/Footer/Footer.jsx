import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import { handleSocialClick } from '../../ga';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a
                  key={id}
                  href={url || 'https://github.com/anmol5varma'}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={name}
                  onClick={() => handleSocialClick(name)}
                >
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr style={{ width: '100%' }} />
        <p className="footer__text">
          © {new Date().getFullYear()} - developed by{' '}
          <a onClick={() => handleSocialClick('github')} href="https://github.com/anmol5varma" target="_blank" rel="noopener noreferrer">
            Anmol Varma
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
