import React from 'react';
import Template from '../../../components/Template';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <Template>
            <h1>Cadastro de vídeos</h1>

            

            <Link to="/">
                Ir para a home
            </Link>
        </Template>
    )
}

export default CadastroCategoria;