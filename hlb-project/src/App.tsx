import Header from "./components/layout/Header";
import GlobalStyle from "./styles/GlobalStyles";
import Container from "./components/layout/Container";
import SigilsGrid from "./components/layout/SigilsGrid";

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <SigilsGrid />
    </Container>
  );
}

export default App;
