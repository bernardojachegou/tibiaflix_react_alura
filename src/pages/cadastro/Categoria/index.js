import React from 'react';
import Template from '../../../components/Template';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <Template>
            <h1>Cadastro de categoria</h1>

            <form>
                <label>
                    Nome da Categoria:
                    <input
                        type="text"
                    />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <Link to="/">
                Ir para a home
            </Link>
        </Template>
    )
}

export default CadastroCategoria;