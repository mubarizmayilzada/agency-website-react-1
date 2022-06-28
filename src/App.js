import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { InfoSection, Navbar } from './components';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path='/' index element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
