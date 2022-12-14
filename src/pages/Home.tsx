import React, { useState } from "react";
import styled from "styled-components";
import ContactWindow from "../components/contact/ContactWindow";
import HomeImmobilier from "../components/home/HomeImmobilier";
import HomeWelcome from "../components/home/HomeWelcome";
import InfosWindow from "../components/infos/InfosWindow";
import { theme } from "../theme/theme";
import ButtonsActions from "../ui-reusable/ButtonsActions";

const Home = () => {
  const [visit, setVisit] = useState(false);
  const [contact, setContact] = useState(false);
  const [infos, setInfos] = useState(false);

  function handleClick() {
    setVisit(!visit);
    console.log(visit);
  }

  return (
    <HomeStyled>
      <HomeWelcome />
      <HomeImmobilier onClick={handleClick} visit={visit} close={() => setVisit(!setVisit)} />
      <ButtonsActions
        onClickContact={() => setContact(!contact)}
        onClickInfos={() => setInfos(!infos)}
      />
      {contact ? <ContactWindow /> : <></>}
      {infos ? <InfosWindow /> : <></>}
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

  @media (max-width: 599px) {
    height: 100vh;
  }
`;

export default Home;
