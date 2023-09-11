import React from 'react';

const Retangulo = () => {
  const style = {
    width: '247px',
    height: '115.035px',
    flexShrink: 0,
    fill: '#0984E3',
    strokeWidth: '1px',
    stroke: '#000',
    background: '#0984E3',
    borderRadius: '10px',
    border: '0.50px black solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#FFF',
    fontSize: '16px',
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    marginTop: '-30vh', 
  };

  return (
    <div style={containerStyle}>
      <div style={style}>
        <span>Cliente</span>
      </div>
    </div>
  );
};

export default Retangulo;
