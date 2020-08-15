import React, { useRef } from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from './Routes';
import { Search } from './pages/Search';

import { SearchContext } from './context';

import { SearchWrapper } from './styled';

function App() {
  const searchRef: any = useRef(null);
  return (
    <Router>
      <Container>
        <SearchWrapper ref={searchRef}>
          <Search />
        </SearchWrapper>
        <SearchContext.Provider value={searchRef}>
          <Routes />
        </SearchContext.Provider>
      </Container>
    </Router>
  );
}

export default App;
