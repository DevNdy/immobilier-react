import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const InfosWindow = () => {
  return (
    <InfosWindowStyled>
      <h4>Fiche du bien:</h4>
      <p>
        Prix: <span>28 000€</span>
      </p>
      <p>
        Lieu:<span>Toulouse</span>
      </p>
      <p>
        Nombre de pièces: <span>3</span>
      </p>
      <p>
        Superficie:<span>47m²</span>
      </p>
      <p>
        DPE: <span>B</span>
      </p>
      <p>
        Piscine: <span>Oui</span>
      </p>
    </InfosWindowStyled>
  );
};

const InfosWindowStyled = styled.div`
  position: absolute;
  bottom: 90px;
  left: 25px;
  width: 220px;
  height: 550px;
  border-radius: 5px;
  background-color: ${theme.colors.primaryColor};
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 60;
  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-size: 22px;
    color: white;
    border: 2px solid white;
    padding: 3px;
  }

  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    font-weight: 600;

    span {
      margin-top: 3px;
      font-weight: 200;
      color: #e3e3e3;
    }
  }

  @media (max-width: 599px) {
    bottom: 255px;
    height: 480px;
    left: 20%;

    h4 {
      font-size: 18px;
    }

    p {
      font-size: 15px;
    }
  }
`;

export default InfosWindow;
