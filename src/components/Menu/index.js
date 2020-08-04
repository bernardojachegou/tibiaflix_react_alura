/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo2.png';
import Button from '../Button/styles';
import { MenuStyle, FlixLogo } from './styles';

function Menu() {
  let buttonRoute = '';
  let buttonText = '';

  if (window.location.href.includes('/video')) {
    buttonRoute = '/cadastro/categoria';
    buttonText = 'Nova Categoria';
  } else if (window.location.href.includes('/categoria') || (window.location.href.includes('/watch'))) {
    buttonRoute = '/';
    buttonText = 'Home';
  } else {
    buttonRoute = '/cadastro/video';
    buttonText = 'Novo Vídeo';
  }

  return (
    <MenuStyle>
      <Link to="/">
        <FlixLogo className="Logo" src={Logo} alt="Logo do TibiaFlix" />
      </Link>
      <Button as={Link} className="ButtonLink" to={buttonRoute}>{buttonText}</Button>
    </MenuStyle>
  );
}
export default Menu;
