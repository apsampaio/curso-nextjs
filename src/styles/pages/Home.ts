import styled, { keyframes } from "styled-components";

interface textProps {
  borderBottomColors: string;
}

export const BackgroundShape = styled.div`
  position: fixed;
  z-index: -1;
  height: 100vh;
  width: 40vw;
  background-color: #19ffb5;

  right: -15vw;
  transform: skew(-25deg);
`;

const show = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1
  }
`;

export const AgentBanner = styled.img`
  position: fixed;
  right: 0;
  animation: ${show} 1s linear;
`;

const showTopText = keyframes`
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

const showBottomText = keyframes`
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
`;

export const AnimatedTitle = styled.div`
  font-family: Roboto, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 700;
  height: 90vmin;
  position: absolute;
  left: 30%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vmin;

  & > div {
    height: 50%;
    overflow: hidden;
    position: absolute;
    width: 100%;
  }

  & > div div {
    font-size: 12vmin;
    padding: 2vmin 0;
    position: absolute;
  }
  & > div div span {
    display: block;
  }
  & > div.text-top {
    border-bottom: 1vmin solid
      ${({ borderBottomColors }: textProps) => borderBottomColors};
    top: 0;
  }
  & > div.text-top div {
    animation: ${showTopText} 1s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    bottom: 0;
    transform: translate(0, 100%);
  }

  & > div.text-top div span:first-child {
    color: ${({ borderBottomColors }: textProps) => borderBottomColors};
  }

  & > div.text-top div span:last-child {
    font-size: 8vmin;
    margin-left: 12px;
  }

  & > div.text-bottom {
    bottom: 0;
  }
  & > div.text-bottom div {
    animation: ${showBottomText} 0.5s;
    animation-delay: 1.75s;
    animation-fill-mode: forwards;
    top: 0;
    transform: translate(0, -100%);
  }
`;
