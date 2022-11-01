import React, { useState } from "react";
import styled from "styled-components";
import HomeImmobilier from "../components/home/HomeImmobilier";
import HomeWelcome from "../components/home/HomeWelcome";
import { theme } from "../theme/theme";

const Home = () => {
  const [visit, setVisit] = useState(false);

  function handleClick() {
    setVisit(!visit);
    console.log(visit);
  }

  return (
    <HomeStyled>
      <HomeWelcome />
      <HomeImmobilier onClick={handleClick} visit={visit} close={() => setVisit(!setVisit)} />
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  iframe {
    height: 700px;
  }
`;

export default Home;
