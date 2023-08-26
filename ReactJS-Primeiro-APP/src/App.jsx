import { useState } from "react";

const App = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [user, setUser] = useState([]);

  function handleRegister(e) {
    e.preventDefault();

    alert("Usuário registrado com sucesso!");

    setUser({
      nome: nome,
      idade: idade,
      email: email,
    });
  }

  return (
    <div>
      <h1>Cadastrando usuário</h1>

      <form onSubmit={handleRegister}>
        <label>Name:</label>
        <br />
        <input
          placeholder='Digite seu nome'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type='text'
        />
        <br />

        <label>Email:</label>
        <br />
        <input
          placeholder='Digite seu email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
        />
        <br />

        <label>Idade:</label>
        <br />
        <input
          placeholder='Digite sua idade'
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          type='number'
        />
        <br />

        <button type='submit'>Registrar</button>
      </form>

      <br />
      <br />

      <div>
        <span>Bem-vindo: {user.nome}</span>
        <br />
        <span>Idade: {user.idade}</span>
        <br />
        <span>Email: {user.email}</span>
        <br />
      </div>
    </div>
  );
};

export default App;
