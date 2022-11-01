import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";

const ButtonsActions = () => {
  return (
    <ButtonsActionsStyled>
      <i className="fa-sharp fa-solid fa-clipboard-list"></i>
      <i className="fa-solid fa-phone"></i>
    </ButtonsActionsStyled>
  );
};

const ButtonsActionsStyled = styled.div`
  height: 60px;
  width: 200px;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 50;

  i {
    height: 40px;
    width: 40px;
    background-color: ${theme.colors.primaryColor};
    padding: 5px;
    font-size: 30px;
    border-radius: 50%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default ButtonsActions;
