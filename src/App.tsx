import React from 'react';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router } from "react-router-dom";
import { Routes } from './Routes';
import { Search } from './pages/Search';

function App() {
  return (
    <Router>
      <Container>
        <Search />
        <Routes />
      </Container>
    </Router>
  );
}

export default App;
