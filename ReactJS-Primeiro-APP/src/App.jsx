import "./App.css";
import { BemVindo, Container, Head, Titulo } from "./styles";

const App = () => {
  return (
    <Container>
      <Head>
        <Titulo>Projeto Styled</Titulo>
      </Head>

      <BemVindo cor='0000FF' tamanho={35}>
        Bem vindo ao Sistema!
      </BemVindo>
    </Container>
  );
};

export default App;