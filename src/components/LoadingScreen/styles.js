/* eslint-disable linebreak-style */
import styled from 'styled-components';

export const LoadingScreen = styled.div`
height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: 24px;
`;

export const LoadingIcon = styled.div`
.iconCircle {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  margin-top: 20px;
}
.iconCircle div {
  transform-origin: 40px 40px;
  animation: iconCircle 1.2s linear infinite;
}
.iconCircle div:after {
  content: " ";
  display: block;
  position: absolute;
  top: 3px;
  left: 37px;
  width: 6px;
  height: 18px;
  border-radius: 20%;
  background: var(--backEnd);
}
.iconCircle div:nth-child(1) {
  transform: rotate(0deg);
  animation-delay: -1.1s;
}
.iconCircle div:nth-child(2) {
  transform: rotate(30deg);
  animation-delay: -1s;
}
.iconCircle div:nth-child(3) {
  transform: rotate(60deg);
  animation-delay: -0.9s;
}
.iconCircle div:nth-child(4) {
  transform: rotate(90deg);
  animation-delay: -0.8s;
}
.iconCircle div:nth-child(5) {
  transform: rotate(120deg);
  animation-delay: -0.7s;
}
.iconCircle div:nth-child(6) {
  transform: rotate(150deg);
  animation-delay: -0.6s;
}
.iconCircle div:nth-child(7) {
  transform: rotate(180deg);
  animation-delay: -0.5s;
}
.iconCircle div:nth-child(8) {
  transform: rotate(210deg);
  animation-delay: -0.4s;
}
.iconCircle div:nth-child(9) {
  transform: rotate(240deg);
  animation-delay: -0.3s;
}
.iconCircle div:nth-child(10) {
  transform: rotate(270deg);
  animation-delay: -0.2s;
}
.iconCircle div:nth-child(11) {
  transform: rotate(300deg);
  animation-delay: -0.1s;
}
.iconCircle div:nth-child(12) {
  transform: rotate(330deg);
  animation-delay: 0s;
}
@keyframes iconCircle {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
`;
export default LoadingIcon;
