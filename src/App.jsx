import React from 'react';
import './index.css'; 
import { AppRouter } from './Components/AppRouter/AppRouter';
import { Header } from './Components/Partials/Header';
import Footer from './Components/Partials/Footer';
import { ContentWrapper } from './Components/ContentWrapper/ContentWrapper'

const App = () => {
  return (
    <ContentWrapper maxwidth={1024}>
      <Header />
      <AppRouter />
      <Footer />
    </ContentWrapper>
  );
}

export default App;
