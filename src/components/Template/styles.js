/* eslint-disable linebreak-style */
import styled, { css } from 'styled-components';
import Background from '../../assets/img/tibia_background3.jpg';

const Main = styled.main`
    background-image: url(${Background});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-color: var(--black);
    color: var(--white);
    flex: 1;
    padding-top: 50px;
    padding-left: 5%;
    padding-right: 5%;
    ${({ paddingAll }) => css`
        padding: ${paddingAll};
    `}
`;

export default Main;
