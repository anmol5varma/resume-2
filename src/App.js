import React, { useState, useEffect } from 'react';
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';

import { PortfolioProvider } from './context/context';
import { heroData, aboutData, projectsData, contactData, footerData } from './mock/data';
import { handlePageUnload, trackScroll } from './ga';

const App = () => {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});
  const [pageStartTime, setPageStartTime] = useState(Date.now());

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
    setPageStartTime(Date.now())
    window.addEventListener('scroll', trackScroll);
    window.addEventListener('beforeunload', () => handlePageUnload(pageStartTime));

    return () => {
      window.removeEventListener('scroll', trackScroll)
      window.removeEventListener('beforeunload', () => handlePageUnload(pageStartTime))
    }
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
