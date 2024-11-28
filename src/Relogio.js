import React, { useState, useEffect } from 'react';

const Relogio = () => {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  const formatarHora = (data) => {
    return data.toLocaleTimeString('pt-BR', {
      hour12: false,
      timeZone: 'UTC'
    });
  };

  return (
    <div>
      <h1>{formatarHora(hora)}</h1>
    </div>
  );
};

export default Relogio;
