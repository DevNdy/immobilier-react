import React from "react";
import styled from "styled-components";
import imgImo from "../../assets/img/immo.png";
import { theme } from "../../theme/theme";
import Spline from "@splinetool/react-spline";

interface HomeImmobilierProps {
  onClick: () => void;
  visit: boolean;
  close: () => void;
}

const HomeImmobilier: React.FC<HomeImmobilierProps> = ({ onClick, visit, close }) => {
  return (
    <HomeImmobilierStyled>
      <button onClick={onClick}>Regarder la maquette</button>
      <img className={`${visit ? "imgVisit" : "imgNotVisit"}`} src={imgImo} alt="immobilier 3d" />
      <Spline
        className={`${visit === true ? "visit" : "notVisit"}`}
        scene="https://prod.spline.design/IP63riCTSyu5Vrxd/scene.splinecode"
      />
      {visit ? <i onClick={close} className="fa-solid fa-xmark iconClose"></i> : <></>}
    </HomeImmobilierStyled>
  );
};

const HomeImmobilierStyled = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  button {
    height: 30px;
    width: 300px;
    margin-bottom: 50px;
    border-radius: 5px;
    border: none;
    background-color: ${theme.colors.primaryColor};
    color: white;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }

  .imgNotVisit {
    transition: 3s;
    min-height: 400px;
    z-index: 0;
    opacity: 1;
  }

  .imgVisit {
    transition: 3s;
    min-height: 400px;
    z-index: 0;
    opacity: 0;
  }

  .notVisit {
    transition: 1s;
    position: absolute;
    top: 0;
    left: -100vw;
    border: none;
    background-color: white;
    height: 99vh;
    width: 99vw;
    z-index: 10;
    opacity: 1;
  }

  .visit {
    transition: 1s;
    position: absolute;
    border: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: white;
    height: 99vh;
    min-width: 99vw;
    z-index: 10;
    opacity: 1;
  }

  .iconClose {
    position: absolute;
    top: 50px;
    right: 50px;
    font-size: 30px;
    color: black;
    z-index: 40;
    cursor: pointer;
  }
`;

export default HomeImmobilier;
