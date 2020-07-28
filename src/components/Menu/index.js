import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo2.png';
import Button from '../Button';
import './Menu.css'

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Logo do TibiaFlix" />
            </Link>
            <Button as={Link} className="ButtonLink" to="cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    )
}
export default Menu