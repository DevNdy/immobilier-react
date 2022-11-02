import React from "react";
import styled from "styled-components";
import { theme } from "../../theme/theme";

const ContactWindow = () => {
  return (
    <ContactWindowStyled>
      <h4>Immmo3d</h4>
      <p>
        Téléphone: <span>05.54.54.54.54</span>
      </p>
      <p>
        Email: <span>developpeur.ndy@gmail.com</span>
      </p>
      <p>
        Adresse agence: <span>Avenue de toulouse 31100</span>
      </p>
    </ContactWindowStyled>
  );
};

const ContactWindowStyled = styled.div`
  position: absolute;
  bottom: 90px;
  right: 25px;
  height: 270px;
  width: 220px;
  background-color: ${theme.colors.primaryColor};
  color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  z-index: 60;

  h4 {
    font-size: 23px;
    margin: 0 0 0 15px;
    font-family: "Fuzzy Bubbles", cursive;
  }

  p {
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 500;

    span {
      font-weight: 300;
    }
  }
`;

export default ContactWindow;
