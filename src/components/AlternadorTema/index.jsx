import { useState } from "react";
import './AlternadorTema.css'

export default function AlternadorTema() {
    const [isEscuro, setIsEscuro] = useState(false);
    const [mostrarDica, setMostrarDica] = useState(false)

    function AlternadorTema() {
        setIsEscuro(anterior => !anterior);
    }

    function AlterarDica() {
        setMostrarDica(anterior => !anterior);
    }
    return (
        <main className='main-container'>
            <article className={`card-exemplo ${isEscuro ? 'tema-escuro-card' : ''}
                `}>
                <header className='card-header'>
                    <span className='badge'>
                        2.Estado Booleano
                    </span>
                    <h3>Alternador de Tema & Visibilidade</h3>
                </header>

                <div className="status-tema" aria-live="polite">
                    Modo atual: <strong>
                        {isEscuro ? '🌙 Escuro' : '☀️ Claro'}
                    </strong>
                </div>
                <div className='botoes-grupo'>
                    <button type='button'
                     className='btn btn-tema'
                     onClick={ AlternadorTema }>
                        {isEscuro ? 'mudar para claro' : 'mudar para escuro'}                    
                    </button>

                    <button type='button'
                    className='btn btn-dica'
                    onClick={ AlterarDica }
                    aria-expanded = { mostrarDica }
                    aria-controls='painel-dica-id'>
                        {mostrarDica ? 'Ocultar Dica' : 'Mostrar Dica'}
                    </button>
                </div>
                {mostrarDica && (
                    <div id='painel-dica-id' className='painel-dica' role='region'>
                    <strong>Dica de Estado Booleano:</strong> Estados booleanos
                     são perfeitos para alternar entre dois estados como ligado
                    /desligado, aberto/fechado ou visível/oculto usando <code>!estadoAnterior</code>
                    </div>
                )}

                <footer className='explicacao-box'>
                    <code>
                        const [isEscuro, setIsEscuro] = useState(false)
                    </code>
                    <p>
                        Alterna classes CSS dinamicamente com base em um valor
                        true/false
                    </p>
                </footer>

            </article>
        </main>
    )
}