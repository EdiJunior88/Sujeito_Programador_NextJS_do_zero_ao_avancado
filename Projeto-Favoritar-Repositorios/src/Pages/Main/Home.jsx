import { Container, Form, SubmitButton } from "./styled";
import { FaGithub, FaPlus } from "react-icons/fa";

const Home = () => {
  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositórios
      </h1>

      <Form onSubmit={() => {}}>
        <input type='text' placeholder='Adicionar Repositório' />

        <SubmitButton type='submit'>
          <FaPlus color='#FFF' size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Home;
