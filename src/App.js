import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import Home from './pages/HomePage/Home';
import Services from './pages/Services/Services';
import SignUp from './pages/SignUp/Signup';
import Products from './pages/Products/Product';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
        <Route path='/' index element={<Home />} />
        <Route path='/services'  element={<Services />} />
        <Route path='/products'  element={<Products />} />
        <Route path='/sign-up'  element={<SignUp />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
