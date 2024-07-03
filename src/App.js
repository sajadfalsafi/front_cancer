import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Container, Box } from '@mui/material';
import Navbar from './components/navbar';
import Cancer from './components/concer';
import Footer from './components/footer';
import About from './components/about-model';
import Contact from './components/contact';
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Box sx={{ mt: 8 }}>
        <Container>
          <Routes>
            <Route path="/" element={<Cancer />} />
            <Route path='/model-details' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />

          </Routes>
        </Container>
      </Box>
  <Footer/>    
    </BrowserRouter>

  );
};

export default App;
