import React from "react";
import styled from "styled-components";

const HomeWelcome = () => {
  return (
    <HomeWelcomeStyled>
      <h1>Bienvenue sur Immobilier 3D,</h1>
      <p>Visiter votre future maison dans une immersion 3d.</p>
      <span>Réalisé pars Kévin Naudy</span>
    </HomeWelcomeStyled>
  );
};

const HomeWelcomeStyled = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default HomeWelcome;
