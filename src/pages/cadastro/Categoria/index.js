import React, { useState } from 'react';
import Template from '../../../components/Template';
import { Link } from 'react-router-dom';

function CadastroCategoria() {

    const [nomeDaCategoria, setNomeDaCategoria] = useState('Default');
    const [categorias, setCategorias] = useState(["Teste"]);

    function handleInputValue(event) {
        setNomeDaCategoria(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Tentou enviar o form...");
        setCategorias([
            ...categorias,
            nomeDaCategoria
        ])
    }

    return (
        <Template>
            <h1>Cadastro de categoria: {nomeDaCategoria}</h1>

            <form onSubmit={handleSubmit}>
                <label>
                    Nome da Categoria:
                    <input
                        type="text"
                        value={nomeDaCategoria}
                        onChange={handleInputValue}
                    />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}>
                            {categoria}
                        </li>
                    )
                })}
            </ul>

            <Link to="/">
                Ir para a home
            </Link>
        </Template>
    )
}

export default CadastroCategoria;