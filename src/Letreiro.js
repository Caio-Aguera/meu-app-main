import React, { useState, useEffect } from 'react';

const Letreiro = () => {
  const textoCompleto = "Conheça a Fatec";
  const [textoAtual, setTextoAtual] = useState("");
  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (indice < textoCompleto.length) {
        setTextoAtual((prev) => prev + textoCompleto[indice]);
        setIndice(indice + 1);
      } else {
        
        setTextoAtual("");
        setIndice(0);
      }
    }, 200); 

    return () => clearInterval(intervalId); 
  }, [indice]); 

  return (
    <div>
      <h1>{textoAtual}</h1>
    </div>
  );
};
export default Letreiro;
