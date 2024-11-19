import Header from "./components/layout/Header";
import GlobalStyle from "./styles/GlobalStyles";
import Container from "./components/layout/Container";
import SigilsGrid from "./components/layout/SigilsGrid";
import ParticleBackground from "./components/three/ParticleBackground";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <SigilsGrid />
      <ParticleBackground />
    </Container>
  );
}

export default App;
