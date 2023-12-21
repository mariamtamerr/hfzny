import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './context/Theme';
// import { useState } from 'react';
import NavbarItem from './components/NavbarItem/NavbarItem';
// import Router from './router/Router';
import HeroItem from './components/HeroItem/HeroItem';
import Cards from './components/Cards/Cards';
import Testimonial from './components/Testimonial/Testimonial';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from './components/Footer/Footer';

function App() {
  // const [contextTheme, setContextTheme] = useState('light');

  return (
    <div className='App'>
      <BrowserRouter>
        {/* <div className={contextTheme === 'dark' ? 'bg-dark text-light' : 'bg-white text-dark'}>
          <ThemeContext.Provider value={{ contextTheme, setContextTheme }}> */}
            <NavbarItem />
            <HeroItem />
            {/* <Routes>
              <Route path='whoarewe' element={<Cards />} />
              <Route path='testimonials' element={<Testimonial />} />
              <Route path='contact-us' element={<ContactUs />} />
            </Routes> */}



            <div id='whoarewe'>
              <Cards />
            </div>

            <div id='testimonials'>
              <Testimonial />
            </div>


            <div id={'contact-us'}>
              <ContactUs id={'contact-us'} />
            </div>


            <Footer />
            <div className='container my-5 h-100'>
              {/* <Router /> */}
            {/* </div>
          </ThemeContext.Provider> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
