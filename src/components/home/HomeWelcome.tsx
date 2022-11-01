import React from "react";
import styled from "styled-components";

const HomeWelcome = () => {
  return (
    <HomeWelcomeStyled>
      <h1>Bienvenue sur Immobilier 3D</h1>
      <p>
        "Aillez un aperçu de votre future bien immobilier, en avant première grâce à nos maquettes
        3d réalisé avec Spline."
      </p>
      <span>Création de @DevNdy</span>
    </HomeWelcomeStyled>
  );
};

const HomeWelcomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 50px;
    font-family: "Fuzzy Bubbles", cursive;
  }

  p {
    width: 600px;
    font-weight: 300;
    font-size: 22px;
  }

  span {
    font-size: 14px;
    opacity: 0.6;
  }
`;

export default HomeWelcome;
