import { Container, Form, SubmitButton } from "./styled";
import { FaGithub, FaPlus } from "react-icons/fa";
import { useCallback, useState } from "react";
import API from "../../Services/API";

const Home = () => {
  const [newRepo, setNewRepo] = useState("");
  const [repositorios, setRepositorios] = useState([]);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();

      async function submit() {
        const response = await API.get(`/repos/${newRepo}`);

        const data = {
          name: response.data.full_name,
        };

        setRepositorios([...repositorios, data]);
        setNewRepo("");
      }

      submit();
    },
    [newRepo, repositorios]
  );

  function handleInputChange(event) {
    setNewRepo(event.target.value);
  }

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        Meus Repositórios
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Adicionar Repositório'
          value={newRepo}
          onChange={handleInputChange}
        />

        <SubmitButton>
          <FaPlus color='#FFF' size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
};

export default Home;
