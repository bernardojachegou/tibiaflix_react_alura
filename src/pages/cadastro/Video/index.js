/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, valores } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  }, []);

  useEffect(() => {
    categoriasRepository
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <Template>
      <h1>Cadastro de vídeos</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        // eslint-disable-next-line max-len
        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === valores.categoria);

        // eslint-disable-next-line no-console
        console.log('categoriaEscolhida', categoriaEscolhida);

        videosRepository.create({
          titulo: valores.titulo,
          url: valores.url,
          categoriaId: 1,

        })
          .then(() => {
            // eslint-disable-next-line no-console
            console.log('Cadastrou com sucesso!');
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do vídeo"
          name="titulo"
          value={valores.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL"
          name="url"
          value={valores.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={valores.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastra Categoria
      </Link>
    </Template>
  );
}

export default CadastroVideo;
