import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/logo2.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="Logo" src={Logo} alt="Logo do TibiaFlix" />
      </a>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://www.linkedin.com/in/bernardojachegou/">
          Michel Bernardo 
        </a>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
