import { Link } from "react-router-dom";

const index = () => {
  return (
    <header>
      <h2>Header da Página</h2>
      <Link to='/'>Home</Link> <br />
      <Link to='/contato'>Contatos</Link> <br />
      <Link to='/sobre'>Sobre</Link>
    </header>
  );
};

export default index;
