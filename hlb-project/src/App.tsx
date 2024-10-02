import { Header } from "./Components/Header/Header";
import GlobalStyle from "./style/GlobalStyle";
import { DiscsCarousel } from "./Components/Carousel/Carousel";

import { useState, useEffect } from "react";

import { Footer } from "./Components/Footer/Footer";
import { ContextProvider } from "./Components/Context/Context";
import { Container } from "./Components/Container/Container";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ContextProvider>
      <GlobalStyle />
      <Container isLoading={isLoading}>
        <Header />
        <DiscsCarousel />
        <Footer />
      </Container>
    </ContextProvider>
  );
}

export default App;
