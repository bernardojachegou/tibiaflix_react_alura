/* eslint-disable linebreak-style */
import React from 'react';
import Template from '../../components/Template';
import { WatchContainer, ResponsiveIframe } from './styles';

function Watch() {
  return (
    <Template>
      <WatchContainer>
        <ResponsiveIframe
          title="Titulo do Iframe"
          src="#"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </WatchContainer>
    </Template>

  );
}

export default Watch;
