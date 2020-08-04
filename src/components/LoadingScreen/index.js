/* eslint-disable linebreak-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable linebreak-style */
import React from 'react';
import { LoadingScreen, LoadingIcon } from './styles';

function Loading() {
  return (
    <LoadingScreen>
      <LoadingIcon>
        <div className="iconCircle"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </LoadingIcon>
    </LoadingScreen>
  );
}

export default Loading;
