import styled from "styled-components";
import stormTroopper from "../../assets/images/storm_trooper.gif";
import { device } from "../../styles/breakpoints";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  width: 90%;
  height: 100%;
`;

export const CharacterInfo = styled.div`
  display: flex;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 4px;
  padding: 5px;
  margin-bottom: 20px;
`;

export const CharacterImage = styled.div`
  width: 31%;
  height: 100%;
  background-image: url(${props => (props.img ? props.img : "")});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;

  @media ${device.mobileL} {
    width: 45%;
    min-height: 300px;
  }

  @media ${device.laptop} {
    min-height: 600px;
  }

  @media ${device.laptopL} {
    min-height: 800px;
  }
`;

export const Details = styled.div`
  padding: 0 10px 10px;
  > h2 {
    color: #333;
    font-size: 20px;
    font-weight: 300;
    letter-spacing: 1.2px;
    margin-bottom: 5px;
  }

  > p {
    color: #333;
    font-size: 12px;
    letter-spacing: 1.2px;
    margin-bottom: 5px;
    font-weight: 300;

    span {
      color: #777;
    }
  }

  @media ${device.mobileL} {
    h2 {
      font-size: 22px;
      margin-bottom: 15px;
    }
    p {
      font-size: 16px;
    }
  }

  @media ${device.laptop} {
    padding: 0 18px 18px;
    h2 {
      font-size: 24px;
      margin-bottom: 20px;
    }

    p {
      font-size: 18px;
    }
  }

  @media ${device.laptopL} {
    padding: 0 24px 24px;
    h2 {
      font-size: 32px;
      margin-bottom: 25px;
    }

    p {
      font-size: 28px;
    }
  }
`;

export const StarshipsContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 10px 0;
  padding: 10px 0;
  border-radius: 4px;

  > h2 {
    color: #333;
    font-size: 16px;
    font-weight: 300;
    letter-spacing: 1.2px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ccc;
  }

  @media ${device.mobileL} {
    h2 {
      font-size: 22px;
      padding-bottom: 15px;
    }
  }

  @media ${device.laptop} {
    h2 {
      font-size: 24px;
      padding-bottom: 20px;
    }
  }

  @media ${device.laptopL} {
    h2 {
      font-size: 32px;
      padding-bottom: 25px;
    }
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  padding: 5px;
`;

export const Item = styled.li`
  display: flex;
  width: 80px;
  flex-direction: column;
  text-align: center;
  padding: 5px;
  margin: 0 5px;

  > p {
    letter-spacing: 1.2px;
    color: #555;
    margin: 10px 0;
  }

  @media ${device.mobileL} {
    width: 120px;
    padding: 25px;
    margin: 0 10px;
  }

  @media ${device.laptop} {
    width: 150px;
    p {
      font-size: 20px;
    }
  }

  @media ${device.laptopL} {
    width: 180px;
    p {
      font-size: 28px;
    }
  }
`;

export const StarshipImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;

  @media ${device.mobileL} {
    width: 72px;
    height: 72px;
  }

  @media ${device.laptop} {
    width: 90px;
    height: 90px;
  }

  @media ${device.laptopL} {
    width: 150px;
    height: 150px;
  }
`;

export const NoStarShips = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  > p {
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 1.1px;
    color: #333;
    margin: 10px;
  }

  @media ${device.mobileL} {
    font-size: 18px;
  }

  @media ${device.laptop} {
    font-size: 22px;
  }

  @media ${device.laptopL} {
    font-size: 28px;
  }
`;

export const NoStarShipImage = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${stormTroopper});
  background-size: cover;
  background-repeat: no-repeat;

  @media ${device.mobileL} {
    width: 120px;
    height: 120px;
  }

  @media ${device.laptop} {
    width: 150px;
    height: 150px;
  }

  @media ${device.laptopL} {
    width: 250px;
    height: 250px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;

  > button {
    border: 0;
    background: transparent;
    cursor: pointer;
  }

  @media ${device.mobileL} {
    svg {
      width: 24px;
      height: 24px;
    }
  }

  @media ${device.laptop} {
    margin: 20px 0;
    svg {
      width: 36px;
      height: 36px;
    }
  }

  @media ${device.laptopL} {
    margin: 30px 0;
    svg {
      width: 40px;
      height: 40px;
    }
  }
`;
