import Header from "./components/layout/Header";
import GlobalStyle from "./styles/GlobalStyles";
import Container from "./components/layout/Container";
import SigilsGrid from "./components/layout/SigilsGrid";
import ParticleBackground from "./components/three/ParticleBackground";
import { SectionInfo } from "./components/layout/SectionInfo";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <SigilsGrid />
      <ParticleBackground />
      <SectionInfo />
    </Container>
  );
}

export default App;
