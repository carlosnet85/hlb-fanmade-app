import Header from "./components/layout/Header";
import GlobalStyle from "./styles/GlobalStyles";
import Container from "./components/layout/Container";

import { AppRouter } from "./components/routes/AppRouter";
import Layerer from "./components/three/Layerer";

function App() {

  return (
    <Container>
      <GlobalStyle />
      <Header />
      <AppRouter />
      <Layerer  />
    </Container>
  );
}

export default App;
