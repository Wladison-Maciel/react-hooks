import { use, useState } from "react";
import './App.css'

export default function App() {
  const [backgroundColorValor, setBackgroundColor] = useState(true);

  function mudarCor() {
    setBackgroundColor(!backgroundColorValor);
  }

  return (
    <div style={{ backgroundColor: backgroundColorValor ? 'blue' : 'red' }}>
      <button style={{backgroundColor: backgroundColorValor? 'red' : 'blue'}} onClick={mudarCor}>Mudar Cor</button>
    </div>
  );
}