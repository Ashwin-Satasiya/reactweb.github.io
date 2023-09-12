import HeaderApp from "./components/Header";

import CarouselApp from "./components/Slider";

import AboutApp from "./components/About";

import ContactApp from "./components/Contact";

import FooterApp from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <HeaderApp />
      <CarouselApp />
      <AboutApp />
      <ContactApp />
      <FooterApp />
    </div>
  );
}

export default App;
