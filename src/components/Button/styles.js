/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Button = styled.button`
    color: var(--backEnd);
    border: 2px solid var(--primary);
    background-color: var(--background); 
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 12px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    margin-bottom: 14px;
    &:hover, 
    &:focus {
    opacity: .5;
    }
`;

export default Button;
