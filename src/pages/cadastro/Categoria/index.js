import React, { useState } from 'react';
import Template from '../../../components/Template';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField';

function CadastroCategoria() {

    const defaultValues = {
        nome: '',
        descricao: '',
        cor: '',
    }

    const [categorias, setCategorias] = useState([]);
    const [valores, setValues] = useState(defaultValues);

    function handleChange(event) {
        const { getAttribute, value } = event.target;
        setValue(
            getAttribute('name'),
            value
        );
    }

    function setValue(chave, valor) {
        setValues({
            ...valores,
            [chave]: valor,
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log("Tentou enviar o form...");
        setCategorias([
            ...categorias,
            valores
        ]);
        setValues(defaultValues);
    }



    return (
        <Template>
            <h1>Cadastro de categoria: {valores.nome}</h1>

            <form onSubmit={
                handleSubmit

            }>

                <FormField
                    label="Nome da Categoria"
                    type="text"
                    name="nome"
                    value={valores.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="text"
                    name="descricao"
                    value={valores.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor"
                    value={valores.cor}
                    onChange={handleChange}
                />




                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, index) => {
                    return (
                        <li key={`${categoria}${index}`}>
                            {categoria.nome}
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