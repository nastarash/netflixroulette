import React, { Fragment } from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SearchFilter from './components/searchFilter/SearchFilter';

function App() {
  return (
    <Fragment>
      <Header />
      <SearchFilter />
      <Footer />
    </Fragment>
  );
}

export default App;
