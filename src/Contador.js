import React, { useState, useEffect } from 'react';

const Contador = () => {
    const [numeroHomens, setNumeroHomens] = useState(0);
    const [numeroMulheres, setNumeroMulheres] = useState(0);

    const atualizarTotal = () => {
        return numeroHomens + numeroMulheres;
    };

    const criarContador = (nome, numero, setNumero, imgSrc) => {
        return (
            <div className="button-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <button onClick={() => {
                    setNumero(numero + 1);
                }}>+</button>
                <img src={imgSrc} alt={nome} style={{ width: '30px', margin: '0 10px' }} />
                <div className="numero">{`${nome}: ${numero}`}</div>
                <button onClick={() => {
                    if (numero > 0) {
                        setNumero(numero - 1);
                    }
                }}>-</button>
            </div>
        );
    };

    return (
        <div className="contador" style={{
            textAlign: 'center',
            padding: '20px',
            border: '2px solid #007BFF',
            borderRadius: '10px',
            backgroundColor: 'white',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        }}>
            {criarContador('Homens', numeroHomens, setNumeroHomens, 'https://img.myloview.com.br/quadros/desenho-de-rosto-de-homem-bonito-700-148564000.jpg')}
            {criarContador('Mulheres', numeroMulheres, setNumeroMulheres, 'https://img.myloview.com.br/fotomurais/desenho-de-rosto-de-mulher-bonita-700-148662413.jpg')}
            <div className="total" style={{ fontSize: '32px', fontWeight: 'bold', margin: '20px 0' }}>{`Total: ${atualizarTotal()}`}</div>
            <button onClick={() => {
                setNumeroHomens(0);
                setNumeroMulheres(0);
            }}>Atualizar</button>
            <button onClick={() => window.history.back()}>Voltar</button>
        </div>
    );
};

export default Contador;
