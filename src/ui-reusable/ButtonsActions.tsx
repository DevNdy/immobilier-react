import React from "react";
import styled from "styled-components";
import { theme } from "../theme/theme";

interface ButtonsActionsProps {
  onClickContact: () => void;
  onClickInfos: () => void;
}

const ButtonsActions: React.FC<ButtonsActionsProps> = ({ onClickContact, onClickInfos }) => {
  return (
    <ButtonsActionsStyled>
      <i onClick={onClickInfos} className="fa-sharp fa-solid fa-clipboard-list"></i>
      <i onClick={onClickContact} className="fa-solid fa-phone"></i>
    </ButtonsActionsStyled>
  );
};

const ButtonsActionsStyled = styled.div`
  height: 60px;
  width: 96%;
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

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
    cursor: pointer;
    z-index: 50;

    &:hover {
      opacity: 0.7;
    }
  }

  @media (max-width: 599px) {
    width: 94%;
  }
`;

export default ButtonsActions;
