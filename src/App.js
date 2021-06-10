import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    if (contador > 9) {
      return;
    }
    setContador(contador + 1);
  };
  const restar = () => {
    if (contador < 1) {
      return;
    }
    setContador(contador - 1);
  };

  return (
    <div className="contenedor">
      <div>
        <button onClick={restar}>-</button>
        <input type="number" value={contador} readOnly="true"></input>
        <button onClick={sumar}>+</button>
      </div>
    </div>
  );
}

export default App;
