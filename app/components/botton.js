import React from 'react';

const Botton = ({ text }) => { // Adicionado um parâmetro 'text'
  const style = {
    width: '348px',
    height: '48px',
    fill: '#0984E3',
    strokeWidth: '1px',
    stroke: '#000',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '10px',
    border: '0.50px black solid',
    background: '#0984E3',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: '16px',
    margin: '-22vh 0 0 0', // Ajustado para alinhar à esquerda
    marginLeft:'2vh',
  };

  return (
    <div style={style}>
      {text} {/* Renderiza o texto recebido como propriedade */}
    </div>
  );
};

export default Botton;

