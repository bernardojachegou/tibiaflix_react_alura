import React from 'react';
import Template from '../../../components/Template';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <Template>
            <h1>Cadastro de vídeos</h1>

            <Link to="/cadastro/categoria">
                Cadastra Categoria
            </Link>
        </Template>
    )
}

export default CadastroVideo;