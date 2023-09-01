import { useParams } from "react-router-dom";
import {
  Container,
  Loading,
  Owner,
  BackButton,
  IssuesList,
  PageActions,
} from "./styled";
import { useEffect, useState } from "react";
import API from "../../Services/API";
import { FaArrowLeft } from "react-icons/fa";

const Repositorio = () => {
  const name = useParams();
  const [repositorio, setRepositorio] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

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

  useEffect(() => {
    async function loadIssue() {
      const nomeRepo = decodeURIComponent(name.repositorio);

      const response = await API.get(`/repos/${nomeRepo}/issues`, {
        params: {
          state: "open",
          page,
          per_page: 5,
        },
      });

      setIssues(response.data);
    }

    loadIssue();
  }, [name.repositorio, page]);

  function handlePage(action) {
    setPage(action === "back" ? page - 1 : page + 1);
  }

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

      <IssuesList>
        {issues.map((issue) => (
          <li key={issue.id}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />

            <div>
              <strong>
                <a
                  href={issue.html_url}
                  target='_blank'
                  rel='noopener noreferrer'>
                  {issue.title}
                </a>

                {issue.labels.map((label) => (
                  <span key={label.id}>{label.name}</span>
                ))}

                <p>{issue.user.login}</p>
              </strong>
            </div>
          </li>
        ))}
      </IssuesList>

      <PageActions>
        <button
          type='button'
          onClick={() => handlePage("back")}
          disabled={page < 2}>
          Voltar
        </button>

        <button type='button' onClick={() => handlePage("next")}>
          Próximo
        </button>
      </PageActions>
    </Container>
  );
};

export default Repositorio;
