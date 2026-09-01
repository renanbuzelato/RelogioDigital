import React, { useState, useEffect } from 'react';

function Relogio() {
  const [hora, setHora] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setHora(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log('Relógio parado e temporizador limpo.');
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'sans-serif' }}>
      <h2>Relógio Digital</h2>
      <h1 style={{ fontSize: '3rem', color: '#2b2b2b' }}>{hora}</h1>
    </div>
  );
}

export default Relogio;