import { useParams } from "react-router-dom";
import { Container, Loading, Owner, BackButton } from "./styled";
import { useEffect, useState } from "react";
import API from "../../Services/API";
import { FaArrowLeft } from "react-icons/fa";

const Repositorio = () => {
  const name = useParams();
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const nomeRepo = decodeURIComponent(name.repositorio);

      const [repositorioData, issuesData] = await Promise.all([
        API.get(`/repos/${nomeRepo}`),
        API.get(`/repos/${nomeRepo}/issues`, {
          params: {
            state: "open",
            per_page: 5,
          },
        }),
      ]);

      setRepositorio(repositorioData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }

    load();
  }, [name.repositorio]);

  if (loading) {
    return (
      <Loading>
        <h1>Carregando...</h1>
      </Loading>
    );
  }

  return (
    <Container>
      <BackButton to='/'>
        <FaArrowLeft color='#000' size={30} />
      </BackButton>
      <Owner>
        <img src={repositorio.owner.avatar_url} alt={repositorio.owner.login} />
        <h1>{repositorio.name}</h1>
        <p>{repositorio.description}</p>
      </Owner>
    </Container>
  );
};

export default Repositorio;
