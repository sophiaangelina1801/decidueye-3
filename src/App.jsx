import { useState } from "react";
import "./App.css";
import deci from "./assets/header deci.png";
import folha from "./assets/folha.png";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <header>
        <img className="deci" src={deci} alt="" />
        <h1> Decidueye </h1>
        <h2>N°0724</h2>
      </header>
      <button className="botao">
        <img className="folha" src={folha} alt="" />
        <h7>Grama</h7>
      </button>
      <h3>
        Decidueye consegue se mover enquanto oculta completamente sua presença
        dos outros. Com a distração de um oponente, Decidueye aproveita a
        oportunidade para atacá-lo de surpresa.
      </h3>
      <h4>______________________________________________</h4>
      <h5> ⚖︎ PESO</h5>
      <h6>36,6 kg</h6>
    </main>
  );
}
