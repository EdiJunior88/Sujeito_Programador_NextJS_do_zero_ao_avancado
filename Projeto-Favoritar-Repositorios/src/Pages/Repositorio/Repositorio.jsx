import { useParams } from "react-router-dom";
import { Container } from "./styled";
import { useEffect } from "react";
import API from "../../Services/API";
import { useState } from "react";

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

  return <Container></Container>;
};

export default Repositorio;
