import React, { Fragment, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from './components/Menu';
import Hero from './sections/Hero';
import IntroSection from './sections/IntroSection';
import ContentSection from './sections/ContentSection';
import ShowSection from './sections/ShowSection';
import GridSection from './sections/GridSection';
import CtaSection from './sections/CtaSection';
import Footer from './components/Footer';

import { ThemeProvider } from 'styled-components';

import darkTheme from './utils/themes/darkTheme';
import lightTheme from './utils/themes/lightTheme';

const App = () => {

  const storedValue = localStorage.getItem('isDarkMode');
  const [isDarkMode, setIsDarkMode] = useState(storedValue === 'true' ? true : false);

  const changeTheme = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('isDarkMode', !isDarkMode);
  }

  const [height, setHeight] = useState(0);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <Fragment>
        <CssBaseline />
        <Menu setHeight={setHeight} changeTheme={changeTheme} isDarkMode={isDarkMode} />
        <Hero menuHeight={height} />
        <IntroSection />
        <ContentSection />
        <ShowSection />
        <GridSection />
        <CtaSection />
        <Footer />
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
