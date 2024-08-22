import { Header } from "./Components/Header/Header";
import GlobalStyle from "./style/GlobalStyle";
import { DiscsCarousel } from "./Components/Carousel/Carousel";

import { useState, useEffect } from "react";

import { PulseLoader } from "react-spinners";
import { Footer } from "./Components/Footer/Footer";
import { ContextProvider } from "./Components/Context/Context";
import { Container } from "./Components/Container/Container";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ContextProvider>
        <GlobalStyle />
        <Container>
        {isLoading ? (
            <PulseLoader style={{ 
                 position: "absolute",
                 top: "50%",
                 left: "50%",
                 transform: "translate(-50%, -50%)",
                 padding: "2rem",
               }} 
               color={"#959067"} 
               loading={true}  />
        ) : (
          <>
            <Header />
            <DiscsCarousel />
            <Footer />
          </>
        )}
        </ Container>
    </ContextProvider>
  );
}

export default App;
