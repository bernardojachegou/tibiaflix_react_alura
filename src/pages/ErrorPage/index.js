/* eslint-disable linebreak-style */
import React from 'react';
import Template from '../../components/Template';
import { ErrorPageDiv, ErrorImage } from './styles';
import GiantSpider from '../../assets/img/GiantSpider.gif';

function ErrorPage() {
  return (
    <Template>
      <ErrorPageDiv>
        <h1>Error 404: O mapa desta rota ainda não foi explorado.</h1>
        <ErrorImage src={GiantSpider} alt="Giant Spider" />
      </ErrorPageDiv>
    </Template>
  );
}

export default ErrorPage;
