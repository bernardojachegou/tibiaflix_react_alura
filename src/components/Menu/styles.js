/* eslint-disable linebreak-style */
import styled from 'styled-components';
import MenuBackground from '../../assets/img/tibia_background1.jpg';

const MenuStyle = styled.nav`
    width: 100%;
    height: 94px;
    z-index: 100;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;
    background-image: url(${MenuBackground});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    border-bottom: 2px solid var(--primary);
`;

const FlixLogo = styled.img`
    max-width: 168px;
`;

export {
  MenuStyle,
  FlixLogo,
};
