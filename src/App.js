import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path='/' exact component={Home} />
      </Routes>
    </Router>
  );
}

export default App;
