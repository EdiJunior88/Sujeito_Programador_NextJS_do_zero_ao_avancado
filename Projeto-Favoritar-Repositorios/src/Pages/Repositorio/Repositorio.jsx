import { useParams } from 'react-router-dom'

const Repositorio = ({ match }) => {
  const name = useParams();

  return <h1>{decodeURIComponent(name.repositorio)}</h1>;
};

export default Repositorio;
