import styled from 'styled-components';
import FooterBackground from '../../assets/img/tibia_background1.jpg';

export const FooterBase = styled.footer`
  background-image: url(${FooterBackground});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export default FooterBase;
