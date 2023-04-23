import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/HomePage/Navbar';
import Home from './Components/HomePage/Home';
import About from './Components/AboutPage/About';
import Products from './Components/Products Page/Products';
import Contact from './Components/ContactPage/Contact';
import Cart from './Components/Cart Section/Cart';
import SingleProduct from './Components/SingleProductDetailsPage/SingleProduct';
import { GlobalStyle } from './Components/GlobalStyle/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import Footer from './Components/FooterSection/Footer';
 
const App = () => {

  const theme = {
    colors: {
      baseColor: "#b89f48",
      onHoverBtnBgColor: '#c5a52e',
      blackColor: '#070707',
      greyBackground: '#1b1b1b',
      lightGreyBackground: '#191818',
      lightWhite: '#ebe5e5',
    },
    media: {
      tablet: '980px',
      mobile: '768px',
      smallDevices: '560px'
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Navbar />
          <GlobalStyle />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/products' element={<Products />} />
            <Route exact path='/contact' element={<Contact />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/singleProduct/:id' element={<SingleProduct />} />
          </Routes>

          <Footer />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
