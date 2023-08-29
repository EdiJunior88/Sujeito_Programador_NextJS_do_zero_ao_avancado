import { Link } from "react-router-dom";

const Erro = () => {
  return (
    <div>
      <h1>Ooops!</h1>
      <p>Hum... Parece que essa página não existe!</p>

      <br />
      <br />

      <span>Você pode estar procurando:</span> 
      <br />
      <Link to='/'>Home</Link>
      <br />
      <Link to='/contato'>Contato</Link>
    </div>
  );
};

export default Erro;
