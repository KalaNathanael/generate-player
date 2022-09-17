import {
  PCBar,
  PCBarMetric,
  PCCircle,
  PCCircleMetric,
  PCCircleStroke,
  PCCircleSVG,
  PCEmptyBar,
  PCFilledBar,
  PCtitle,
  PlayerCardContainer,
} from "./PlayerCard.styles";

const PlayerCard = ({ numero, position, prime, dureePrime }) => {
  let indice = "";
  switch (numero) {
    case 1:
      indice = "st";
      break;
    case 2:
      indice = "nd";
      break;
    case 3:
      indice = "rd";
      break;
    default:
      indice = "th";
  }

  return (
    <PlayerCardContainer
      barLength={dureePrime * 10}
      dashoffset={314 - Math.round((314 * prime) / 100)}
    >
      <PCtitle>
        {numero}
        <sup>{indice}</sup> Pick : {position}
      </PCtitle>
      <PCBar>
        <PCBarMetric>#{dureePrime}</PCBarMetric>
        <PCEmptyBar />
        <PCFilledBar />
      </PCBar>
      <PCCircle>
        <PCCircleMetric>{prime}</PCCircleMetric>
        <PCCircleSVG version="1.1" xmlns="http://www.w3.org/2000/svg">
          <PCCircleStroke cx="60" cy="60" r="50" />
        </PCCircleSVG>
      </PCCircle>
    </PlayerCardContainer>
  );
};

export default PlayerCard;
