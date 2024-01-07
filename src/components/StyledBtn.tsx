import { css, styled } from "styled-components";
import { myTheme } from "../styles/Theme.styled";

type StyledBtnPropsType = {
  color?: string;
  textColor?: string;
  btnType: "primary" | "outlined";
};

export const StyledBtn = styled.button<StyledBtnPropsType>`
  width: 86px;
  height: 30px;
  border-radius: 5px;
  background-color: ${(props) => props.color || "#4e71fe"};
  border: 2px solid ${myTheme.colors.blue};
  margin-left: 20px;
  color: ${(props) => props.textColor || "white"};
  font-weight: bold;
  font-size: 12px;

  ${(props) =>
    props.btnType === "primary" &&
    css<StyledBtnPropsType>`
      background-color: ${(props) => props.color || "#4e71fe"};
      color: ${(props) => props.textColor || "white"};
    `}
  ${(props) =>
    props.btnType === "outlined" &&
    css<StyledBtnPropsType>`
      background-color: ${(props) => props.color || "#4e71fe"};
      color: ${(props) => props.textColor || "white"};
    `}
`;
