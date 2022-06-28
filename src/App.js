import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import Home from './pages/HomePage/Home';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Routes>
        <Route path='/' index element={<Home />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
