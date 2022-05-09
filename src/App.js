import  {useEffect } from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Form from "./components/Form";
import './App.css';

const App= () => {
  const handleFirstTab = (e) => {
    if(e.key === 'Tab') {
      document.body.classList.add('user-is-tabbing')
  
      window.removeEventListener('keydown', handleFirstTab)
      window.addEventListener('mousedown', handleMouseDownOnce)
    }
  
  }
  
  const handleMouseDownOnce = () => {
    document.body.classList.remove('user-is-tabbing')
  
    window.removeEventListener('mousedown', handleMouseDownOnce)
    window.addEventListener('keydown', handleFirstTab)
  }
  
  window.addEventListener('keydown', handleFirstTab)
  
 let backToTopButton;
 useEffect (() => {
  backToTopButton = document.querySelector(".back-to-top");
}, []);

let isBackToTopRendered = false;

  let alterStyles = (isBackToTopRendered) => {
    backToTopButton.style.visibility = isBackToTopRendered ? "visible" : "hidden";
    backToTopButton.style.opacity = isBackToTopRendered ? 1 : 0;
    backToTopButton.style.transform = isBackToTopRendered ? "scale(1)" : "scale(0)";
  };
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 700) {
      isBackToTopRendered = true;
      alterStyles(isBackToTopRendered);
    } else {
      isBackToTopRendered = false;
      alterStyles(isBackToTopRendered);
    }
  });
  return (
    <div>
      <Header />
      <Work />
      <About />
      <Contact />
      <Form />
      <Footer />
    </div>
  )
}

export default App