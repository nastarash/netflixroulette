import React, { Fragment } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SearchButton from './components/searchButton/SearchButton'

function App() {
  return (
    <Fragment>
      <Header />
      <SearchButton />
      <Footer />
    </Fragment>
  );
}

export default App;
