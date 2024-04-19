import { Header } from "./Components/Header/Header";
import GlobalStyle from "./style/GlobalStyle";
import { DemoCarousel } from "./Components/Carousel/Carousel";
import { HelpWindowButton } from "./Components/HelpWindowButton/HelpWindowButton";

import { useState, useEffect } from "react";

import { PropagateLoader } from "react-spinners";
import { Footer } from "./Components/Footer/Footer";


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
        <GlobalStyle />
        <HelpWindowButton />
        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <PropagateLoader color={"#509046"} loading={true} size={15} />
          </div>
        ) : (
          <>
            <Header />
            <DemoCarousel />
            <Footer />
          </>
        )}
    </>
  );
}

export default App;
