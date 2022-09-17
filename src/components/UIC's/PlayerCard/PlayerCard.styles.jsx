import styled from "styled-components";

export const PCtitle = styled.h3`
  color: white;
  font-weight: 500;
  position: absolute;
  left: 20px;
  top: 15px;
`;

export const PCBar = styled.div`
  position: absolute;
  top: 100px;
  left: 15px;
  height: 5px;
  width: 160px;
`;

export const PCEmptyBar = styled.div`
  background-color: #2e3033;
  width: 100%;
  height: 100%;
`;

export const PCFilledBar = styled.div`
  position: absolute;
  top: 0px;
  z-index: 3;
  width: 0px;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 154, 217, 1) 0%,
    rgba(217, 147, 0, 1) 65%,
    rgba(255, 186, 0, 1) 100%
  );
  transition: 0.6s ease-out;
`;

export const PCBarMetric = styled.span`
  position: absolute;
  top: -22px;
  left: 0;
  font-size: 1rem;
  font-style: italic;
  color: rgba(0, 154, 217, 1);
  font-weight: bold;
  opacity: 0;
`;

export const PCCircle = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 150px;
  left: calc(50% - 60px);
`;

export const PCCircleSVG = styled.svg`
  fill: #17141d;
  stroke-width: 2px;
`;

export const PCCircleStroke = styled.circle`
  stroke: white;
  stroke-dasharray: 314;
  stroke-dashoffset: 314;
  transition: 0.6s ease-out;
`;

export const PCCircleMetric = styled.span`
  position: absolute;
  top: 33px;
  left: 33px;
  box-sizing: border-box;
  font-size: 1.9rem;
  width: 55px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-style: italic;
  color: white;
  border-radius: 50%;
  background-color: rgba(255, 186, 0, 0.25);
  opacity: 0;
`;

export const PlayerCardContainer = styled.div`
  display: flex;
  width: 200px;
  height: 280px;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.4s ease-out;
  position: relative;
  left: 0px;

  &:not(:first-child) {
    margin-left: -50px;
  }

  &:hover ~ & {
    position: relative;
    left: 50px;
    transition: 0.4s ease-out;
  }

  &:hover {
    ${PCFilledBar} {
      width: ${(p) => p.barLength}px;
      transition: 0.4s ease-out;
    }
    ${PCBarMetric} {
      opacity: 1;
      transition: 0.4s ease-out;
    }
    ${PCCircleStroke} {
      stroke-dashoffset: ${(p) => p.dashoffset};
      transition: 0.6s ease-out;
    }
    ${PCCircleMetric} {
      opacity: 1;
      transition: 0.6s ease-out;
    }
  }
`;
