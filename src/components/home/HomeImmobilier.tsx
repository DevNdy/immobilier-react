import React from "react";
import styled from "styled-components";
import imgImo from "../../assets/img/immo.png";

interface HomeImmobilierProps {
  onClick: () => void;
  visit: boolean;
  close: () => void;
}

const HomeImmobilier: React.FC<HomeImmobilierProps> = ({ onClick, visit, close }) => {
  return (
    <HomeImmobilierStyled>
      <button onClick={onClick}>Visiter l'appartement</button>
      <img className={`${visit ? "imgVisit" : "imgNotVisit"}`} src={imgImo} alt="immobilier 3d" />
      <iframe
        className={`${visit === true ? "visit" : "notVisit"}`}
        src="https://my.spline.design/untitled-8892733e47c2413865675d8b592905d7/"
        width="100%"
        height="100%"
      ></iframe>
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

  .imgNotVisit {
    transition: 3s;
    min-height: 400px;
    z-index: 0;
    opacity: 1;
  }

  .imgVisit {
    transition: 3s;
    min-height: 200px;
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
    width: 99vw;
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
