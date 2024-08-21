import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";
import Skills from "./components/Skills";
import Swiper from "./components/ImageSlider ";
import DigiAutomate from "./components/DigiAutomate";
import { Route, Routes } from "react-router-dom";
import ProjectHeader from "./components/ProjectHeader";


function App() {
  return (
    <ChakraProvider>
    <AlertProvider>

      <Routes>
        <Route 
          path="/" 
          element={
            <>
              <Header />
              <LandingSection />
              <ProjectsSection />
              <Skills />
              <Swiper />
              <ContactMeSection />
              <Alert />
            </>
          } 
        />
        <Route path="/digiAutomate" element={
          <>
          <ProjectHeader />
          <DigiAutomate />
          </>
        } />
      </Routes>
      <Footer />
    </AlertProvider>
  </ChakraProvider>
  );
}

export default App;
