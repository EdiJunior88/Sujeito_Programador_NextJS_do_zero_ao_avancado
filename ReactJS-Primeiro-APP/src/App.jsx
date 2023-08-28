import { useEffect, useState } from "react";
import "./style.css";

const App = () => {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadAPi() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";

      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setNutri(json);
        });
    }

    loadAPi();
  }, []);

  return (
    <div className='container'>
      <header>
        <strong>React Nutri</strong>
      </header>

      {nutri.map((item) => {
        return (
          <article key={item.id} className='post'>
            <strong className='titulo'>{item.title}</strong>
            <img src={item.capa} alt={item.title} className='capa' />
            <p className='subtitulo'>{item.subtitulo}</p>
            {/* <h1>Categoria: {item.categoria}</h1> */}
            <a className='botao'>Acessar</a>
          </article>
        );
      })}
    </div>
  );
};

export default App;
