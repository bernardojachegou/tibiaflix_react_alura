/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const defaultValues = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [valores, setValues] = useState(defaultValues);

  function setValue(chave, valor) {
    setValues({
      ...valores,
      [chave]: valor,
    });
  }

  function handleChange(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([
      ...categorias,
      valores,
    ]);
    setValues(defaultValues);
  }

  return (
    <Template>
      <h1>
        Cadastro de categoria:
        {' '}
        {valores.nome}
      </h1>

      <form onSubmit={
                handleSubmit
        }
      >

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

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.nome}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para a home
      </Link>
    </Template>
  );
}

export default CadastroCategoria;
