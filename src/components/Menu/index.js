/* eslint-disable linebreak-style */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo2.png';
import Button from '../Button/styles';
import { MenuStyle, FlixLogo } from './styles';

function Menu() {
  return (
    <MenuStyle>
      <Link exact to="/">
        <FlixLogo className="Logo" src={Logo} alt="Logo do TibiaFlix" />
      </Link>
      <Button as={Link} className="ButtonLink" to="cadastro/video">
        Novo vídeo
      </Button>
    </MenuStyle>
  );
}
export default Menu;
