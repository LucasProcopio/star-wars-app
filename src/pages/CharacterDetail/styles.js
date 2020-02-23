import styled from "styled-components";
import stormTroopper from "../../assets/images/storm_trooper.gif";

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
`;

export const CharacterImage = styled.div`
  width: 31%;
  height: 100%;
  background-image: url(${props => (props.img ? props.img : "")});
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
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
`;

export const StarshipImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
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
`;

export const NoStarShipImage = styled.div`
  width: 80px;
  height: 80px;
  background-image: url(${stormTroopper});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
`;
