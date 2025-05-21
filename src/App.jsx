import { useState } from "react";
import Contador from "./components/Contador/Contador";

export default function App() {

  // const [situacao, setSituacao] = useState(true)

  // function alternarSituacao() {
  //   setSituacao(!situacao)
  // }

  


  return (
    <>
      {/* <h2>Situação: {situacao ? "Ativo" : "Inativo"}</h2>
      <button onClick={alternarSituacao}>Mudar Situação</button> */}
      <Contador></Contador>

    </>
  );
}